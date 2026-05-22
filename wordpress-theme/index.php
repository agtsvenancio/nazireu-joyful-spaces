<?php
/**
 * Fallback template — usa front-page para páginas internas básicas.
 */
get_header(); ?>

<main class="section">
  <div class="container">
    <?php if ( have_posts() ) : ?>
      <?php while ( have_posts() ) : the_post(); ?>
        <article style="margin-bottom:3rem">
          <h1 style="font-size:2.5rem;margin-bottom:1rem"><?php the_title(); ?></h1>
          <div class="muted"><?php the_content(); ?></div>
        </article>
      <?php endwhile; ?>
    <?php else : ?>
      <h1>Nada encontrado</h1>
      <p class="muted">Não há conteúdo para exibir.</p>
    <?php endif; ?>
  </div>
</main>

<?php get_footer(); ?>
