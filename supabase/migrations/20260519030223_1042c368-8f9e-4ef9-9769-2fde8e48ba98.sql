
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;

DROP POLICY IF EXISTS "Public read site-images" ON storage.objects;
-- Bucket público continua acessível por URL direta; remover policy de listagem.
