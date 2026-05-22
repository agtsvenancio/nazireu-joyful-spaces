<?php
/**
 * Footer
 */
$wa      = get_theme_mod( 'nazireu_whatsapp', '#' );
$phone   = get_theme_mod( 'nazireu_phone', '+55 15 99790-0220' );
$address = get_theme_mod( 'nazireu_address', 'Sorocaba, SP' );
$fb      = get_theme_mod( 'nazireu_facebook', '#' );
$ig      = get_theme_mod( 'nazireu_instagram', '#' );
?>
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="brand">
          <span class="brand-mark">N</span>
          <span>Hotel Geriátrico<small>Nazireu</small></span>
        </div>
        <p style="margin-top:1rem;font-size:.9rem;color:rgba(42,33,24,.7)">Cuidado humanizado, ambiente acolhedor e excelência há mais de 18 anos.</p>
      </div>
      <div>
        <h3>Navegação</h3>
        <ul>
          <li><a href="#sobre">Sobre nós</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#instalacoes">Instalações</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>
      <div>
        <h3>Contato</h3>
        <ul>
          <li>📞 <?php echo esc_html( $phone ); ?></li>
          <li>📍 <?php echo esc_html( $address ); ?></li>
        </ul>
      </div>
      <div>
        <h3>Siga-nos</h3>
        <div class="socials">
          <a href="<?php echo esc_url( $fb ); ?>" aria-label="Facebook" target="_blank" rel="noopener">f</a>
          <a href="<?php echo esc_url( $ig ); ?>" aria-label="Instagram" target="_blank" rel="noopener">ig</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© <?php echo date('Y'); ?> Hotel Geriátrico Nazireu. Todos os direitos reservados.</p>
      <p>Feito com cuidado em Sorocaba, SP.</p>
    </div>
  </div>
</footer>

<a class="wa-fab" href="<?php echo esc_url( $wa ); ?>" target="_blank" rel="noopener" aria-label="WhatsApp">
  <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor"><path d="M19.11 17.27c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.85 1.06-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.33-.8-.71-1.33-1.59-1.49-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.83-2.01-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.65 1.12 2.83c.14.18 1.94 2.96 4.7 4.15 2.76 1.19 2.76.79 3.26.74.5-.05 1.6-.65 1.83-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.31zM16.02 5.33C10.13 5.33 5.34 10.12 5.34 16c0 1.88.49 3.72 1.43 5.34L5.33 26.67l5.46-1.43a10.66 10.66 0 005.23 1.34h.01c5.88 0 10.67-4.79 10.67-10.67 0-2.85-1.11-5.53-3.13-7.55a10.6 10.6 0 00-7.55-3.13z"/></svg>
</a>

<?php wp_footer(); ?>
</body>
</html>
