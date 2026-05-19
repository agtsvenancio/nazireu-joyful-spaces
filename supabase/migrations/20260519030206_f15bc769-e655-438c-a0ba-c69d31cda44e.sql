
-- Roles
CREATE TYPE public.app_role AS ENUM ('admin');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE POLICY "Admins manage roles" ON public.user_roles
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Site images registry
CREATE TABLE public.site_images (
  key TEXT PRIMARY KEY,
  url TEXT NOT NULL,
  label TEXT NOT NULL,
  recommended_size TEXT NOT NULL,
  description TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.site_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view site images" ON public.site_images
  FOR SELECT USING (true);

CREATE POLICY "Admins can insert site images" ON public.site_images
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update site images" ON public.site_images
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete site images" ON public.site_images
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Seed slots (urls will be empty initially; site falls back to local assets)
INSERT INTO public.site_images (key, url, label, recommended_size, description) VALUES
  ('hero', '', 'Imagem principal (Hero)', '1920×1080 px (16:9)', 'Foto de destaque no topo da página inicial.'),
  ('about', '', 'Seção Sobre', '1200×1500 px (4:5)', 'Foto da seção "Sobre" / quem somos.'),
  ('amenity-suite', '', 'Carrossel — Suítes', '1600×1000 px (16:10)', 'Foto das suítes no carrossel de instalações.'),
  ('amenity-common', '', 'Carrossel — Áreas comuns', '1600×1000 px (16:10)', 'Foto das áreas comuns no carrossel.'),
  ('amenity-garden', '', 'Carrossel — Jardins', '1600×1000 px (16:10)', 'Foto dos jardins no carrossel.'),
  ('amenity-dining', '', 'Carrossel — Refeitório', '1600×1000 px (16:10)', 'Foto do refeitório no carrossel.');

-- Storage bucket
INSERT INTO storage.buckets (id, name, public) VALUES ('site-images', 'site-images', true);

CREATE POLICY "Public read site-images" ON storage.objects
  FOR SELECT USING (bucket_id = 'site-images');

CREATE POLICY "Admins upload site-images" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'site-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins update site-images" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id = 'site-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins delete site-images" ON storage.objects
  FOR DELETE TO authenticated
  USING (bucket_id = 'site-images' AND public.has_role(auth.uid(), 'admin'));
