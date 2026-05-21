import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type SiteImageRow = {
  key: string;
  url: string;
  label: string;
  recommended_size: string;
  description: string | null;
  video_url: string | null;
  updated_at: string;
};

type CacheEntry = { url: string; video_url: string | null };
let cache: Record<string, CacheEntry> | null = null;
const listeners = new Set<(c: Record<string, CacheEntry>) => void>();

async function load() {
  const { data } = await supabase.from("site_images").select("key,url,video_url");
  const map: Record<string, CacheEntry> = {};
  (data ?? []).forEach((r: { key: string; url: string | null; video_url: string | null }) => {
    map[r.key] = { url: r.url ?? "", video_url: r.video_url ?? null };
  });
  cache = map;
  listeners.forEach((l) => l(map));
}

export function useSiteImage(key: string, fallback: string): string {
  const [url, setUrl] = useState<string>(cache?.[key]?.url || fallback);

  useEffect(() => {
    const update = (c: Record<string, CacheEntry>) => setUrl(c[key]?.url || fallback);
    listeners.add(update);
    if (cache) update(cache);
    else load();
    return () => {
      listeners.delete(update);
    };
  }, [key, fallback]);

  return url;
}

export function useSiteVideo(key: string): string | null {
  const [videoUrl, setVideoUrl] = useState<string | null>(cache?.[key]?.video_url ?? null);

  useEffect(() => {
    const update = (c: Record<string, CacheEntry>) => setVideoUrl(c[key]?.video_url ?? null);
    listeners.add(update);
    if (cache) update(cache);
    else load();
    return () => {
      listeners.delete(update);
    };
  }, [key]);

  return videoUrl;
}

export function toYouTubeEmbed(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace("/", "");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (u.hostname.includes("youtube.com")) {
      if (u.pathname.startsWith("/embed/")) return url;
      const id = u.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    return url;
  } catch {
    return null;
  }
}

export async function useSiteImagesAdminFetch(): Promise<SiteImageRow[]> {
  const { data, error } = await supabase
    .from("site_images")
    .select("*")
    .order("key");
  if (error) throw error;
  return data as SiteImageRow[];
}
