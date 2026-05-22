<?php
/**
 * Nazireu Theme Functions
 */

if ( ! defined( 'ABSPATH' ) ) exit;

if ( ! function_exists( 'nazireu_setup' ) ) :
function nazireu_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'custom-logo' );
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );

    register_nav_menus( array(
        'primary' => __( 'Menu Principal', 'nazireu' ),
        'footer'  => __( 'Menu Rodapé', 'nazireu' ),
    ) );
}
endif;
add_action( 'after_setup_theme', 'nazireu_setup' );

function nazireu_scripts() {
    wp_enqueue_style( 'nazireu-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap', array(), null );
    wp_enqueue_style( 'nazireu-style', get_stylesheet_uri(), array(), '1.0.0' );
}
add_action( 'wp_enqueue_scripts', 'nazireu_scripts' );

/**
 * Personalizador: imagens e dados editáveis
 */
function nazireu_customize_register( $wp_customize ) {

    // ====== Seção: Contato ======
    $wp_customize->add_section( 'nazireu_contact', array(
        'title'    => __( 'Nazireu — Contato', 'nazireu' ),
        'priority' => 30,
    ) );

    $wp_customize->add_setting( 'nazireu_phone', array(
        'default'           => '+55 15 99790-0220',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'nazireu_phone', array(
        'label'   => __( 'Telefone', 'nazireu' ),
        'section' => 'nazireu_contact',
        'type'    => 'text',
    ) );

    $wp_customize->add_setting( 'nazireu_whatsapp', array(
        'default'           => 'https://wa.me/5515997900220?text=oi%20vim%20atraves%20do%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20do%20nazireu',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    $wp_customize->add_control( 'nazireu_whatsapp', array(
        'label'   => __( 'Link WhatsApp', 'nazireu' ),
        'section' => 'nazireu_contact',
        'type'    => 'url',
    ) );

    $wp_customize->add_setting( 'nazireu_address', array(
        'default'           => 'Sorocaba, SP',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'nazireu_address', array(
        'label'   => __( 'Endereço', 'nazireu' ),
        'section' => 'nazireu_contact',
        'type'    => 'text',
    ) );

    // ====== Seção: Mídia ======
    $wp_customize->add_section( 'nazireu_media', array(
        'title'    => __( 'Nazireu — Mídia', 'nazireu' ),
        'priority' => 31,
    ) );

    // Imagem do Hero (primeira dobra)
    $wp_customize->add_setting( 'nazireu_hero_image', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'nazireu_hero_image', array(
        'label'   => __( 'Imagem do Hero (1ª dobra)', 'nazireu' ),
        'section' => 'nazireu_media',
    ) ) );

    // Imagem do Sobre
    $wp_customize->add_setting( 'nazireu_about_image', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'nazireu_about_image', array(
        'label'   => __( 'Imagem "Sobre nós"', 'nazireu' ),
        'section' => 'nazireu_media',
    ) ) );

    // URL do vídeo do YouTube
    $wp_customize->add_setting( 'nazireu_video_url', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    $wp_customize->add_control( 'nazireu_video_url', array(
        'label'       => __( 'URL do vídeo do YouTube (institucional)', 'nazireu' ),
        'description' => __( 'Cole a URL completa do YouTube (ex.: https://www.youtube.com/watch?v=XXXX).', 'nazireu' ),
        'section'     => 'nazireu_media',
        'type'        => 'url',
    ) );

    // ====== Seção: Redes sociais ======
    $wp_customize->add_section( 'nazireu_social', array(
        'title'    => __( 'Nazireu — Redes Sociais', 'nazireu' ),
        'priority' => 32,
    ) );
    $wp_customize->add_setting( 'nazireu_facebook', array( 'default' => '#', 'sanitize_callback' => 'esc_url_raw' ) );
    $wp_customize->add_control( 'nazireu_facebook', array( 'label' => 'Facebook URL', 'section' => 'nazireu_social', 'type' => 'url' ) );
    $wp_customize->add_setting( 'nazireu_instagram', array( 'default' => '#', 'sanitize_callback' => 'esc_url_raw' ) );
    $wp_customize->add_control( 'nazireu_instagram', array( 'label' => 'Instagram URL', 'section' => 'nazireu_social', 'type' => 'url' ) );
}
add_action( 'customize_register', 'nazireu_customize_register' );

/**
 * Converte URL do YouTube em URL de embed.
 */
function nazireu_youtube_embed( $url ) {
    if ( empty( $url ) ) return '';
    if ( preg_match( '#(?:youtube\.com/watch\?v=|youtu\.be/|youtube\.com/embed/|youtube\.com/shorts/)([A-Za-z0-9_-]{6,})#', $url, $m ) ) {
        return 'https://www.youtube.com/embed/' . $m[1];
    }
    return $url;
}
