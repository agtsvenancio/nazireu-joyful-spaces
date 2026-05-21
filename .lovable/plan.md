# Corrigir erro de RLS no upload de imagens

## Diagnóstico

O erro "new row violates row-level security policy" acontece no momento do upload do arquivo para o bucket `site-images`.

Verificações já feitas no banco:
- O usuário `admin@nazireu.com` (id `af8a6636…`) existe.
- Ele está registrado em `public.user_roles` com `role = 'admin'`.
- As políticas no bucket `site-images` (INSERT/UPDATE/DELETE) exigem `has_role(auth.uid(), 'admin')`.

Tudo isso parece correto, então a causa mais provável é uma destas:

1. A sessão no navegador foi criada **antes** do papel `admin` ser inserido, então o token JWT atual não bate com o que a política espera (e/ou está expirado).
2. Falta a política de **SELECT** em `storage.objects` para o bucket `site-images`. O método `.upload()` do Supabase faz um `select` interno depois do insert para devolver os metadados — sem SELECT permitido, a operação inteira é revertida e devolve exatamente a mensagem de RLS.
3. As mensagens de erro hoje não diferenciam "falhou no storage" de "falhou no update da tabela", dificultando o diagnóstico.

## Plano de correção

1. **Adicionar política de SELECT no `storage.objects` para o bucket `site-images`** (leitura pública, já que o bucket é público). Isso resolve a causa nº 2 e é seguro.
2. **Melhorar a mensagem de erro no painel** (`src/routes/admin.index.tsx`) para mostrar o código do erro do Supabase, deixando claro se o problema foi no storage ou na tabela `site_images`.
3. **Forçar refresh da sessão ao abrir o painel** (`supabase.auth.refreshSession()`) para garantir que o token usado nos uploads é o atual e tem o papel de admin reconhecido. Resolve a causa nº 1.
4. Pedir para o usuário **deslogar e logar novamente** uma vez após o deploy, para garantir um JWT novo.

## Detalhes técnicos

Migração SQL a aplicar:

```sql
CREATE POLICY "Public can read site-images"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'site-images');
```

Ajuste no `handleUpload`:

```ts
if (upErr) {
  setMessage(`Erro ao enviar (${upErr.name}): ${upErr.message}`);
  ...
}
```

E no `useEffect` inicial do painel, depois de checar sessão:

```ts
await supabase.auth.refreshSession();
```

Nenhuma alteração no design ou em outras telas.
