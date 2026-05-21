import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Upload, LogOut, ImageIcon, Loader2 } from "lucide-react";
import heroFallback from "@/assets/hero.jpg";
import aboutFallback from "@/assets/about.jpg";
import suiteFallback from "@/assets/amenity-suite.jpg";
import commonFallback from "@/assets/amenity-common.jpg";
import gardenFallback from "@/assets/amenity-garden.jpg";
import diningFallback from "@/assets/amenity-dining.jpg";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

const FALLBACKS: Record<string, string> = {
  hero: heroFallback,
  about: aboutFallback,
  "trust-video": aboutFallback,
  "amenity-suite": suiteFallback,
  "amenity-common": commonFallback,
  "amenity-garden": gardenFallback,
  "amenity-dining": diningFallback,
};

type Row = {
  key: string;
  url: string;
  label: string;
  recommended_size: string;
  description: string | null;
  updated_at: string;
};

function AdminDashboard() {
  const navigate = useNavigate();
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploadingKey, setUploadingKey] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const fetchRows = useCallback(async () => {
    const { data, error } = await supabase
      .from("site_images")
      .select("*")
      .order("key");
    if (!error && data) setRows(data as Row[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data }) => {
      if (!data.session) {
        navigate({ to: "/admin/login" });
        return;
      }
      await supabase.auth.refreshSession();
      fetchRows();
    });
  }, [navigate, fetchRows]);


  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/admin/login" });
  };

  const handleUpload = async (key: string, file: File) => {
    setUploadingKey(key);
    setMessage(null);
    const ext = file.name.split(".").pop() ?? "jpg";
    const path = `${key}-${Date.now()}.${ext}`;

    const { error: upErr } = await supabase.storage
      .from("site-images")
      .upload(path, file, { cacheControl: "3600", upsert: false });

    if (upErr) {
      setMessage(`Erro ao enviar (storage): ${upErr.message}`);
      setUploadingKey(null);
      return;
    }


    const { data: pub } = supabase.storage.from("site-images").getPublicUrl(path);
    const publicUrl = pub.publicUrl;

    const { error: updErr } = await supabase
      .from("site_images")
      .update({ url: publicUrl, updated_at: new Date().toISOString() })
      .eq("key", key);

    if (updErr) {
      setMessage(`Erro ao salvar: ${updErr.message}`);
    } else {
      setMessage("Imagem atualizada com sucesso!");
      await fetchRows();
    }
    setUploadingKey(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-primary" size={32} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary">
      <header className="bg-background border-b border-border sticky top-0 z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-serif text-2xl">Painel Administrativo</h1>
            <p className="text-xs text-muted-foreground">Gerenciar fotos do site</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Ver site
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 text-sm rounded-lg border border-border px-3 py-2 hover:border-primary hover:text-primary transition"
            >
              <LogOut size={16} /> Sair
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        {message && (
          <div className="mb-6 rounded-lg bg-primary-soft border border-primary/30 px-4 py-3 text-sm">
            {message}
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rows.map((row) => {
            const currentSrc = row.url || FALLBACKS[row.key];
            const isUploading = uploadingKey === row.key;
            return (
              <article
                key={row.key}
                className="bg-card rounded-2xl border border-border overflow-hidden shadow-card flex flex-col"
              >
                <div className="aspect-[4/3] bg-muted relative">
                  {currentSrc ? (
                    <img
                      src={currentSrc}
                      alt={row.label}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      <ImageIcon size={40} />
                    </div>
                  )}
                  {!row.url && (
                    <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider bg-background/90 border border-border rounded-full px-2 py-1">
                      Padrão
                    </span>
                  )}
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-serif text-lg">{row.label}</h3>
                  {row.description && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {row.description}
                    </p>
                  )}
                  <div className="mt-3 inline-flex items-center gap-2 text-xs font-medium rounded-full bg-primary-soft text-primary px-3 py-1 self-start">
                    Tamanho recomendado: {row.recommended_size}
                  </div>

                  <label className="mt-auto pt-5">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      disabled={isUploading}
                      onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (f) handleUpload(row.key, f);
                        e.target.value = "";
                      }}
                    />
                    <span className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold cursor-pointer hover:opacity-90 transition disabled:opacity-60">
                      {isUploading ? (
                        <>
                          <Loader2 size={16} className="animate-spin" /> Enviando...
                        </>
                      ) : (
                        <>
                          <Upload size={16} /> Trocar foto
                        </>
                      )}
                    </span>
                  </label>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
}
