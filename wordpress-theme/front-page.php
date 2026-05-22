<?php
/**
 * Front Page — Home do Hotel Geriátrico Nazireu
 */
get_header();

$wa          = get_theme_mod( 'nazireu_whatsapp', '#' );
$phone       = get_theme_mod( 'nazireu_phone', '+55 15 99790-0220' );
$address     = get_theme_mod( 'nazireu_address', 'Sorocaba, SP' );
$hero_image  = get_theme_mod( 'nazireu_hero_image', get_template_directory_uri() . '/assets/hero.jpg' );
$about_image = get_theme_mod( 'nazireu_about_image', get_template_directory_uri() . '/assets/about.jpg' );
$video_url   = get_theme_mod( 'nazireu_video_url', '' );
$video_embed = nazireu_youtube_embed( $video_url );

$services = array(
  array( 'Médicos', 'Geriatria e acompanhamento clínico contínuo, com protocolos individualizados.' ),
  array( 'Enfermagem 24 horas', 'Equipe técnica presente dia e noite, monitoramento e segurança permanentes.' ),
  array( 'Nutrição', 'Cardápios balanceados elaborados por nutricionista, respeitando restrições.' ),
  array( 'Terapia Ocupacional', 'Atividades para estimular memória, autonomia e bem-estar emocional.' ),
  array( 'Fisioterapia', 'Manutenção preventiva e reabilitação para mobilidade e independência.' ),
  array( 'Day Care', 'Creche para idosos com translado, convivência e atividades programadas.' ),
);

$pillars = array(
  array( 'Dignidade', 'Cuidado humano em cada gesto.' ),
  array( 'Família', 'Ambiente acolhedor e próximo.' ),
  array( 'Excelência', 'Padrão hoteleiro de bem-estar.' ),
);

$badges = array(
  array( 'Melhor de Sorocaba', 'Edição 2023' ),
  array( '+18 anos', 'de história e tradição' ),
  array( 'Equipe certificada', 'Médicos, enfermeiros e terapeutas' ),
  array( 'Nota máxima', 'em avaliações de familiares' ),
);
?>

<!-- HERO -->
<section id="home" class="hero">
  <?php if ( $hero_image ) : ?>
    <img class="hero-bg" src="<?php echo esc_url( $hero_image ); ?>" alt="Ambiente acolhedor do Hotel Geriátrico Nazireu">
  <?php endif; ?>
  <div class="container hero-inner">
    <span class="hero-pill">✦ Há mais de 18 anos em Sorocaba</span>
    <h1>Hotel Geriátrico <span>Nazireu</span></h1>
    <p>Onde cada dia é uma celebração de vida, com respeito, alegria e cuidado.</p>
    <div class="hero-cta">
      <a class="btn btn-primary" href="<?php echo esc_url( $wa ); ?>" target="_blank" rel="noopener">Fale Conosco</a>
      <a class="btn btn-outline" href="#instalacoes">Conhecer instalações</a>
    </div>
    <dl class="hero-stats">
      <div><dt>18+</dt><dd>anos de experiência</dd></div>
      <div><dt>24h</dt><dd>enfermagem presente</dd></div>
      <div><dt>100%</dt><dd>cuidado humanizado</dd></div>
    </dl>
  </div>
</section>

<!-- SOBRE -->
<section id="sobre" class="section">
  <div class="container about">
    <div class="about-img">
      <?php if ( $about_image ) : ?>
        <img src="<?php echo esc_url( $about_image ); ?>" alt="Cuidado humanizado no Nazireu" loading="lazy">
      <?php endif; ?>
    </div>
    <div>
      <span class="eyebrow">Sobre nós</span>
      <h2>Mais de 18 anos cuidando com amor e excelência.</h2>
      <p class="muted" style="margin-top:1.5rem;font-size:1.1rem">No Nazireu, recebemos cada residente como parte da nossa família. Nossa missão é oferecer um lar onde a longevidade é vivida com dignidade, alegria e cuidado personalizado — sustentado por uma equipe multidisciplinar que combina técnica, sensibilidade e propósito.</p>
      <div class="pillars">
        <?php foreach ( $pillars as $p ) : ?>
          <div class="pillar">
            <div class="pillar-icon">✦</div>
            <h3><?php echo esc_html( $p[0] ); ?></h3>
            <p><?php echo esc_html( $p[1] ); ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</section>

<!-- SERVIÇOS -->
<section id="servicos" class="section section-secondary">
  <div class="container">
    <div class="services-head">
      <span class="eyebrow">Nossos serviços</span>
      <h2>Cuidado completo, em um só lugar</h2>
      <p>Uma equipe multidisciplinar dedicada a promover saúde, autonomia e bem-estar todos os dias.</p>
    </div>
    <div class="services">
      <?php foreach ( $services as $s ) : ?>
        <article class="service">
          <div class="service-icon">✚</div>
          <h3><?php echo esc_html( $s[0] ); ?></h3>
          <p><?php echo esc_html( $s[1] ); ?></p>
          <a href="#contato">Saiba mais →</a>
        </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- INSTALAÇÕES -->
<section id="instalacoes" class="section">
  <div class="container">
    <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:1.5rem;margin-bottom:3rem">
      <div style="max-width:640px">
        <span class="eyebrow">Instalações</span>
        <h2 style="font-size:clamp(2rem,4vw,3rem);margin-top:.75rem">Um lar pensado em cada detalhe</h2>
      </div>
      <p class="muted" style="max-width:380px">Espaços projetados para conforto, segurança e mobilidade — com áreas verdes, suítes adaptadas e ambientes de convivência.</p>
    </div>
    <!-- Galeria (use o plugin de galeria de sua preferência ou o block Gallery do WordPress) -->
    <?php echo do_shortcode( '[gallery columns="3" size="large"]' ); ?>
  </div>
</section>

<!-- TRUST / VÍDEO -->
<section class="section section-soft">
  <div class="container trust">
    <div>
      <span class="eyebrow">Reconhecimento</span>
      <h2>Confiança que se constrói no dia a dia</h2>
      <p class="muted" style="margin-top:1.5rem;font-size:1.1rem">Reconhecidos por famílias e pela comunidade como referência em cuidado sênior na região.</p>
      <div class="badges">
        <?php foreach ( $badges as $b ) : ?>
          <div class="badge-card">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 6.9H22l-6 4.4L18.4 21 12 16.7 5.6 21 8 13.3 2 8.9h7.6z"/></svg>
            <div>
              <p><?php echo esc_html( $b[0] ); ?></p>
              <p><?php echo esc_html( $b[1] ); ?></p>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
    <div class="video-wrap">
      <?php if ( $video_embed ) : ?>
        <iframe src="<?php echo esc_url( $video_embed ); ?>" title="Vídeo institucional Nazireu" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <?php else : ?>
        <div style="display:flex;align-items:center;justify-content:center;height:100%;color:#fff;background:#2a2118">Adicione a URL do YouTube em Aparência → Personalizar → Nazireu — Mídia</div>
      <?php endif; ?>
    </div>
  </div>
</section>

<!-- CTA FINAL -->
<section id="contato" class="section">
  <div class="container cta">
    <span class="eyebrow">Agende sua visita</span>
    <h2>Conheça o nosso hotel <em>pessoalmente</em></h2>
    <p>Agende agora sua visita e descubra como podemos proporcionar o máximo de conforto e felicidade para quem você mais ama.</p>
    <a class="btn btn-primary btn-lg" style="margin-top:2.5rem" href="<?php echo esc_url( $wa ); ?>" target="_blank" rel="noopener">Agendar Uma Visita via WhatsApp</a>
    <div class="contact-cards">
      <div class="contact-card">
        <div class="ico">📞</div>
        <div><small>Telefone</small><p><?php echo esc_html( $phone ); ?></p></div>
      </div>
      <div class="contact-card">
        <div class="ico">📍</div>
        <div><small>Endereço</small><p><?php echo esc_html( $address ); ?></p></div>
      </div>
    </div>
  </div>
</section>

<?php get_footer(); ?>
