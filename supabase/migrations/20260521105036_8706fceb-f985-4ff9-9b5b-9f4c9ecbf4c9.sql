CREATE POLICY "Public can read site-images"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'site-images');