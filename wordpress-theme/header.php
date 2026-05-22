<?php
/**
 * Header
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width,initial-scale=1">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
  <div class="container nav">
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="brand">
      <span class="brand-mark">N</span>
      <span>
        Hotel Geriátrico
        <small>Nazireu</small>
      </span>
    </a>
    <nav class="nav-menu" aria-label="Menu principal">
      <a href="#sobre">Sobre</a>
      <a href="#servicos">Serviços</a>
      <a href="#instalacoes">Instalações</a>
      <a href="#contato">Contato</a>
      <a class="btn btn-primary" style="padding:.6rem 1.25rem;font-size:.85rem" href="<?php echo esc_url( get_theme_mod( 'nazireu_whatsapp', '#' ) ); ?>" target="_blank" rel="noopener">Fale Conosco</a>
    </nav>
  </div>
</header>
