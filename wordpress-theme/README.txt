=== Tema WordPress Nazireu ===

Este é o tema WordPress do Hotel Geriátrico Nazireu, replicando o layout do site Lovable.

== Arquivos incluídos ==
- style.css        (cabeçalho do tema + todo o CSS)
- functions.php    (suporte ao tema, menus, customizer com imagens editáveis)
- header.php       (topo / navbar fixa)
- footer.php       (rodapé + botão flutuante do WhatsApp)
- front-page.php   (página inicial completa: hero, sobre, serviços, instalações, vídeo, CTA)
- index.php        (fallback para posts/páginas)

== Como instalar ==
1. Crie uma pasta chamada "nazireu" dentro de /wp-content/themes/ no seu servidor.
2. Copie TODOS os arquivos acima para essa pasta.
   (Renomeie cada arquivo retirando a extensão .txt se você baixou como texto.)
3. No admin do WordPress: Aparência → Temas → Ative "Nazireu".
4. Vá em Configurações → Leitura → defina "Sua página inicial exibe" como
   "Uma página estática" e selecione (ou crie) uma página chamada "Home".
   O tema usará automaticamente front-page.php.

== Como editar conteúdo ==
Acesse Aparência → Personalizar:

  • Nazireu — Contato:    telefone, link do WhatsApp, endereço
  • Nazireu — Mídia:      imagem do hero (1ª dobra), imagem do "Sobre",
                          URL do vídeo do YouTube (convertida em embed automaticamente)
  • Nazireu — Redes Sociais: Facebook e Instagram

== Galeria de instalações ==
A seção "Instalações" usa o shortcode [gallery] do WordPress. Crie uma página,
insira um bloco de Galeria com suas fotos, e elas aparecerão automaticamente.

== Observações ==
- As fontes Inter e Playfair Display são carregadas via Google Fonts.
- Imagens padrão (assets/hero.jpg, assets/about.jpg) podem ser colocadas
  em /wp-content/themes/nazireu/assets/ — ou simplesmente faça upload via
  o Personalizador.
- O link padrão do WhatsApp já vem configurado:
  https://wa.me/5515997900220
