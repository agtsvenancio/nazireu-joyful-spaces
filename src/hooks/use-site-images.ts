import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type SiteImageRow = {
  key: string;
  url: string;
  label: string;
  recommended_size: string;
  description: string | null;
  updated_at: string;
};

let cache: Record<string, string> | null = null;
const listeners = new Set<(c: Record<string, string>) => void>();

async function load() {
  const { data } = await supabase.from("site_images").select("key,url");
  const map: Record<string, string> = {};
  (data ?? []).forEach((r) => {
    if (r.url) map[r.key] = r.url;
  });
  cache = map;
  listeners.forEach((l) => l(map));
}

export function useSiteImage(key: string, fallback: string): string {
  const [url, setUrl] = useState<string>(cache?.[key] ?? fallback);

  useEffect(() => {
    const update = (c: Record<string, string>) => setUrl(c[key] || fallback);
    listeners.add(update);
    if (cache) update(cache);
    else load();
    return () => {
      listeners.delete(update);
    };
  }, [key, fallback]);

  return url;
}

export async function useSiteImagesAdminFetch(): Promise<SiteImageRow[]> {
  const { data, error } = await supabase
    .from("site_images")
    .select("*")
    .order("key");
  if (error) throw error;
  return data as SiteImageRow[];
}
