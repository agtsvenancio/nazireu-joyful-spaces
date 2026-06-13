import { createFileRoute } from "@tanstack/react-router";
import {
  Stethoscope,
  HeartPulse,
  Apple,
  Brain,
  Activity,
  Sun,
  ShieldCheck,
  Users,
  Sparkles,
  Award,
  PlayCircle,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Accessibility,
  CheckCircle2,
  Plus,
  Minus,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar, WHATSAPP_URL } from "@/components/site/Navbar";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { AmenityCarousel } from "@/components/site/AmenityCarousel";
import { useSiteImage, useSiteVideo, toYouTubeEmbed } from "@/hooks/use-site-images";
import heroFallback from "@/assets/hero.jpg";
import aboutFallback from "@/assets/about.jpg";

const SITE_URL = "https://www.hgeriatriconazireu.com.br";
const PHONE_E164 = "+5515997900220";
const PHONE_DISPLAY = "+55 15 99790-0220";

const FAQS: { q: string; a: string }[] = [
  {
    q: "Quanto custa uma casa de repouso em Sorocaba?",
    a: "O valor de uma casa de repouso varia conforme o nível de dependência do idoso, o tipo de acomodação (individual ou compartilhada) e os serviços incluídos, como enfermagem 24 horas, fisioterapia, terapia ocupacional e nutrição. No Hotel Geriátrico Nazireu elaboramos um plano personalizado após uma avaliação gratuita. Fale com nossa equipe pelo WhatsApp e receba uma proposta sob medida para a sua família.",
  },
  {
    q: "Como funciona um hotel geriátrico?",
    a: "Um hotel geriátrico oferece moradia permanente ou temporária para idosos, com infraestrutura adaptada, equipe multidisciplinar e atividades diárias voltadas à qualidade de vida. No Nazireu, em Sorocaba, contamos com enfermagem 24h, médico geriatra, fisioterapeuta, terapeuta ocupacional, nutricionista e psicólogo, além de áreas verdes, suítes confortáveis e cardápio balanceado.",
  },
  {
    q: "Há enfermagem 24 horas para idosos?",
    a: "Sim. Mantemos equipe de enfermagem 24 horas por dia, todos os dias, com técnicos e enfermeiros presentes em escalas que garantem monitoramento contínuo, administração correta de medicamentos, controle de sinais vitais e atendimento imediato em qualquer intercorrência.",
  },
  {
    q: "Vocês atendem adultos abaixo de 60 anos?",
    a: "Sim. Atendemos adultos com necessidades especiais que precisam de cuidados contínuos, como sequelas neurológicas (AVC, traumatismo craniano), limitações físicas, recuperação pós-cirúrgica, doenças degenerativas e quadros que exigem assistência permanente. Nosso protocolo é individualizado para cada residente.",
  },
  {
    q: "Como agendar uma visita ao Hotel Geriátrico Nazireu?",
    a: "Você pode agendar uma visita guiada presencial pelo WhatsApp (+55 15 99790-0220). Na visita, você conhece toda a estrutura, conversa com a equipe técnica e tira todas as dúvidas sobre cuidados, rotinas e valores.",
  },
  {
    q: "Quais profissionais fazem parte da equipe multidisciplinar?",
    a: "Nossa equipe multidisciplinar reúne médico geriatra, enfermeiros, técnicos de enfermagem 24 horas, fisioterapeuta, terapeuta ocupacional, nutricionista, psicólogo e cuidadores treinados. Esse time atua de forma integrada para promover saúde, autonomia e bem-estar emocional.",
  },
];

const KEYWORDS = [
  "casa de repouso em Sorocaba",
  "hotel geriátrico em Sorocaba",
  "residencial para idosos em Sorocaba",
  "lar para idosos em Sorocaba",
  "cuidados para idosos em Sorocaba",
  "enfermagem 24 horas para idosos",
  "casa especializada para idosos",
  "cuidados para adultos dependentes em Sorocaba",
];

const TITLE = "Hotel Geriátrico Nazireu | Casa de Repouso em Sorocaba com Enfermagem 24h";
const DESCRIPTION =
  "Casa de repouso e hotel geriátrico em Sorocaba há mais de 18 anos. Enfermagem 24 horas, equipe multidisciplinar, fisioterapia, terapia ocupacional e nutrição. Agende uma visita pelo WhatsApp.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => {
    const localBusiness = {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness"],
      "@id": `${SITE_URL}/#business`,
      name: "Hotel Geriátrico Nazireu",
      alternateName: "Casa de Repouso Nazireu",
      description: DESCRIPTION,
      url: SITE_URL,
      telephone: PHONE_E164,
      image: `${SITE_URL}/og-image.jpg`,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sorocaba",
        addressRegion: "SP",
        addressCountry: "BR",
      },
      areaServed: [
        { "@type": "City", name: "Sorocaba" },
        { "@type": "City", name: "Votorantim" },
        { "@type": "City", name: "Itu" },
        { "@type": "City", name: "Salto de Pirapora" },
      ],
      medicalSpecialty: ["Geriatrics", "Nursing"],
      availableService: [
        { "@type": "MedicalProcedure", name: "Enfermagem 24 horas" },
        { "@type": "MedicalProcedure", name: "Fisioterapia" },
        { "@type": "MedicalProcedure", name: "Terapia Ocupacional" },
        { "@type": "MedicalProcedure", name: "Nutrição clínica" },
        { "@type": "MedicalProcedure", name: "Acompanhamento médico geriátrico" },
        { "@type": "Service", name: "Day Care para idosos" },
        { "@type": "Service", name: "Cuidados para adultos com necessidades especiais" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      sameAs: [] as string[],
    };

    const organization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Hotel Geriátrico Nazireu",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: PHONE_E164,
        contactType: "customer service",
        areaServed: "BR",
        availableLanguage: ["Portuguese"],
      },
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };

    return {
      meta: [
        { title: TITLE },
        { name: "description", content: DESCRIPTION },
        { name: "keywords", content: KEYWORDS.join(", ") },
        { name: "author", content: "Hotel Geriátrico Nazireu" },
        { property: "og:title", content: TITLE },
        { property: "og:description", content: DESCRIPTION },
        { property: "og:url", content: `${SITE_URL}/` },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "pt_BR" },
        { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
        { name: "twitter:title", content: TITLE },
        { name: "twitter:description", content: DESCRIPTION },
        { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/` }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(localBusiness) },
        { type: "application/ld+json", children: JSON.stringify(organization) },
        { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      ],
    };
  },
});

const services = [
  {
    icon: Stethoscope,
    title: "Acompanhamento Médico Geriátrico",
    desc: "Avaliação clínica regular com geriatra, protocolos individualizados e monitoramento contínuo de saúde para cada residente.",
  },
  {
    icon: HeartPulse,
    title: "Enfermagem 24 Horas",
    desc: "Equipe de enfermagem 24h presente todos os dias, com controle de medicação, sinais vitais e atendimento imediato.",
  },
  {
    icon: Apple,
    title: "Nutrição Personalizada",
    desc: "Cardápios balanceados elaborados por nutricionista, respeitando restrições alimentares, diabetes, hipertensão e disfagia.",
  },
  {
    icon: Brain,
    title: "Terapia Ocupacional",
    desc: "Atividades terapêuticas que estimulam memória, cognição, autonomia e bem-estar emocional dos idosos.",
  },
  {
    icon: Activity,
    title: "Fisioterapia",
    desc: "Fisioterapia preventiva, motora e reabilitação para mobilidade, equilíbrio e prevenção de quedas.",
  },
  {
    icon: Sun,
    title: "Day Care para Idosos",
    desc: "Creche para idosos em Sorocaba com translado opcional, convivência, refeições e atividades programadas.",
  },
];

const pillars = [
  { icon: ShieldCheck, title: "Dignidade", desc: "Cuidado humanizado em cada gesto, respeitando a história de vida." },
  { icon: Users, title: "Família", desc: "Ambiente acolhedor onde residentes e familiares se sentem em casa." },
  { icon: Sparkles, title: "Excelência", desc: "Padrão hoteleiro de bem-estar com técnica e sensibilidade." },
];

function Home() {
  const hero = useSiteImage("hero", heroFallback);
  const about = useSiteImage("about", aboutFallback);
  const trustVideo = useSiteImage("trust-video", aboutFallback);
  const trustVideoUrl = useSiteVideo("trust-video");
  const trustEmbed = trustVideoUrl ? toYouTubeEmbed(trustVideoUrl) : null;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <WhatsAppFab />

      {/* HERO */}
      <section id="home" className="relative min-h-[100svh] flex items-center">
        <img
          src={hero}
          alt="Hotel Geriátrico Nazireu — casa de repouso em Sorocaba com ambiente acolhedor"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
          <div className="max-w-2xl text-white animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium tracking-widest uppercase border border-white/20">
              <Sparkles size={14} className="text-primary" />
              Há mais de 18 anos em Sorocaba
            </span>
            <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
              Hotel Geriátrico <span className="text-primary">Nazireu</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-xl leading-relaxed">
              Casa de repouso em Sorocaba com enfermagem 24 horas, equipe multidisciplinar
              e cuidado humanizado para idosos e adultos com necessidades especiais.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar visita pelo WhatsApp"
                className="inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-semibold shadow-lift hover:-translate-y-0.5 hover:shadow-soft transition-all"
              >
                <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor" aria-hidden>
                  <path d="M19.11 17.27c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.85 1.06-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.33-.8-.71-1.33-1.59-1.49-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.83-2.01-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.65 1.12 2.83c.14.18 1.94 2.96 4.7 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.31zM16.02 5.33C10.13 5.33 5.34 10.12 5.34 16c0 1.88.49 3.72 1.43 5.34L5.33 26.67l5.46-1.43a10.66 10.66 0 005.23 1.34h.01c5.88 0 10.67-4.79 10.67-10.67 0-2.85-1.11-5.53-3.13-7.55a10.6 10.6 0 00-7.55-3.13z" />
                </svg>
                Fale com nossa equipe
              </a>
              <a
                href="#instalacoes"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 text-white px-8 py-4 text-base font-medium hover:bg-white/10 transition-colors"
              >
                Conheça nossa estrutura
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 max-w-md text-white">
              {[
                { k: "18+", v: "anos de experiência" },
                { k: "24h", v: "enfermagem presente" },
                { k: "100%", v: "cuidado humanizado" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-serif text-3xl text-primary">{s.k}</dt>
                  <dd className="text-xs uppercase tracking-wider text-white/75 mt-1">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="sobre" className="py-24 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lift">
              <img
                src={about}
                alt="Equipe multidisciplinar do Hotel Geriátrico Nazireu cuidando de idoso em Sorocaba"
                loading="lazy"
                width={1200}
                height={1400}
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-8 -right-8 bg-background rounded-2xl shadow-card p-6 max-w-xs border border-border">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary-soft flex items-center justify-center text-primary">
                  <Award size={22} />
                </div>
                <div>
                  <p className="font-serif text-xl leading-none">2023</p>
                  <p className="text-xs text-muted-foreground mt-1">Melhor de Sorocaba</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Sobre o Nazireu</span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl leading-tight">
              Mais de 18 anos de experiência em cuidados para idosos em Sorocaba
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              O Hotel Geriátrico Nazireu é uma <strong>casa de repouso em Sorocaba</strong> que une
              estrutura hoteleira, atendimento humanizado e uma equipe multidisciplinar completa para
              oferecer o melhor lar para idosos da região. Em quase duas décadas de atuação, recebemos
              cada residente como parte da nossa família — promovendo dignidade, autonomia e qualidade
              de vida em cada etapa do envelhecimento.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Nossa proposta vai além do cuidado clínico: combinamos enfermagem 24 horas, fisioterapia,
              terapia ocupacional, nutrição balanceada, acompanhamento médico geriátrico e atividades
              de convivência em um ambiente seguro, acessível e acolhedor. Famílias de Sorocaba,
              Votorantim, Itu, Salto de Pirapora e região encontram aqui um residencial para idosos
              em que tradição, técnica e amor caminham juntos.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-xl border border-border p-5 hover:border-primary hover:-translate-y-1 transition-all bg-card">
                  <div className="h-10 w-10 rounded-lg bg-primary-soft text-primary flex items-center justify-center">
                    <p.icon size={20} />
                  </div>
                  <h3 className="mt-4 font-serif text-lg">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-card hover:-translate-y-0.5 transition-all"
              >
                Solicite informações pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="py-24 sm:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Nossos serviços</span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              Cuidados especializados para idosos em Sorocaba
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Uma equipe multidisciplinar com enfermagem 24h, fisioterapia, terapia ocupacional,
              nutrição e acompanhamento médico — todos os serviços essenciais reunidos em um só lugar.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article
                key={s.title}
                className="group relative rounded-2xl bg-card p-8 border border-border shadow-card hover:shadow-lift hover:-translate-y-1 transition-all"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary-soft text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon size={26} />
                </div>
                <h3 className="mt-6 font-serif text-2xl">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  Saiba mais
                  <span aria-hidden>→</span>
                </a>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-semibold shadow-lift hover:-translate-y-0.5 transition-all"
            >
              Fale com nossa equipe
            </a>
          </div>
        </div>
      </section>

      {/* SPECIAL NEEDS — Adultos com necessidades especiais */}
      <section id="adultos-necessidades-especiais" className="py-24 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Atendimento especializado
            </span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl leading-tight">
              Cuidados Especializados para Adultos com Necessidades Especiais
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              O Hotel Geriátrico Nazireu também é referência em <strong>cuidados para adultos
              dependentes em Sorocaba</strong>. Recebemos adultos abaixo de 60 anos que necessitam
              de acompanhamento contínuo, assistência permanente, reabilitação ou suporte
              especializado por conta de condições clínicas, neurológicas ou físicas.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Atendemos pacientes com sequelas de AVC, traumatismo craniano, doenças
              neurodegenerativas, limitações físicas severas, recuperação pós-cirúrgica e demais
              quadros que exigem cuidados permanentes. Nossa equipe multidisciplinar elabora um
              plano de cuidados individualizado, com fisioterapia, terapia ocupacional, enfermagem
              24 horas, nutrição clínica e acompanhamento médico — tudo em um ambiente seguro,
              adaptado e humanizado.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Sequelas neurológicas (AVC, traumatismo craniano, esclerose múltipla)",
                "Limitações físicas, mobilidade reduzida e cadeirantes",
                "Recuperação pós-cirúrgica e cuidados pós-hospitalares",
                "Doenças degenerativas e quadros que exigem assistência contínua",
                "Pacientes acamados com necessidade de cuidados permanentes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80">
                  <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-base font-semibold shadow-lift hover:-translate-y-0.5 transition-all"
              >
                Solicite uma avaliação gratuita
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-primary-soft p-10 border border-primary/20">
              <Accessibility className="text-primary" size={56} />
              <h3 className="mt-6 font-serif text-2xl">
                Um plano de cuidados para cada história
              </h3>
              <p className="mt-3 text-foreground/80 leading-relaxed">
                Cada adulto que chega ao Nazireu passa por uma avaliação completa com nossa equipe
                clínica. A partir dela, definimos rotinas de reabilitação, atividades terapêuticas,
                cardápio personalizado e protocolos de enfermagem adequados ao seu quadro — sempre
                com o objetivo de promover autonomia, conforto e qualidade de vida.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-background p-4">
                  <p className="font-serif text-2xl text-primary">24h</p>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                    Enfermagem
                  </p>
                </div>
                <div className="rounded-xl bg-background p-4">
                  <p className="font-serif text-2xl text-primary">+8</p>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                    Especialidades
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section id="instalacoes" className="py-24 sm:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Instalações</span>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                Um residencial para idosos pensado em cada detalhe
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Espaços projetados para conforto, segurança e mobilidade — com áreas verdes,
              suítes adaptadas, refeitório acolhedor e ambientes de convivência.
            </p>
          </div>

          <AmenityCarousel />

          <div className="mt-10 text-center">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-primary text-primary px-7 py-3.5 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Agende uma visita guiada
            </a>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-24 sm:py-32 bg-primary-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Reconhecimento</span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              Referência em cuidado sênior na região de Sorocaba
            </h2>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
              Reconhecidos por famílias e pela comunidade como um dos principais hotéis geriátricos
              de Sorocaba, com tradição, segurança e atendimento humanizado em cada detalhe.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {[
                { t: "Melhor de Sorocaba", s: "Edição 2023" },
                { t: "+18 anos", s: "de história e tradição" },
                { t: "Equipe certificada", s: "Médicos, enfermeiros e terapeutas" },
                { t: "Nota máxima", s: "em avaliações de familiares" },
              ].map((b) => (
                <div key={b.t} className="rounded-xl bg-background p-5 border border-border">
                  <div className="flex items-start gap-3">
                    <Award className="text-primary mt-0.5" size={22} />
                    <div>
                      <p className="font-serif text-lg leading-tight">{b.t}</p>
                      <p className="text-sm text-muted-foreground mt-1">{b.s}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {trustEmbed ? (
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lift bg-foreground/90">
              <iframe
                src={trustEmbed}
                title="Vídeo institucional do Hotel Geriátrico Nazireu em Sorocaba"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          ) : (
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lift bg-foreground/90 group cursor-pointer">
              <img
                src={trustVideo}
                alt="Vídeo institucional do Hotel Geriátrico Nazireu — casa de repouso em Sorocaba"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lift group-hover:scale-110 transition-transform">
                  <PlayCircle size={44} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="font-serif text-2xl">Conheça o Nazireu</p>
                <p className="text-sm text-white/80">Vídeo institucional · 2 min</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 sm:py-32 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Perguntas frequentes
            </span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              Dúvidas sobre nossa casa de repouso em Sorocaba
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Reunimos as perguntas mais comuns de famílias que buscam um hotel geriátrico
              de confiança para um ente querido.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <article
                  key={faq.q}
                  className="rounded-2xl border border-border bg-card overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-muted/40 transition-colors"
                  >
                    <h3 className="font-serif text-lg sm:text-xl">{faq.q}</h3>
                    <span className="shrink-0 h-9 w-9 rounded-full bg-primary-soft text-primary flex items-center justify-center">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 -mt-1">
                      <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Ainda tem dúvidas? Estamos prontos para ajudar.</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-base font-semibold shadow-lift hover:-translate-y-0.5 transition-all"
            >
              Solicite informações pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contato" className="py-24 sm:py-32 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Agende sua visita</span>
          <h2 className="mt-3 font-serif text-4xl sm:text-6xl leading-tight">
            Conheça o nosso hotel geriátrico <em className="text-primary not-italic">pessoalmente</em>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Agende uma visita guiada e descubra como o Hotel Geriátrico Nazireu pode proporcionar
            cuidado, segurança e qualidade de vida para quem você mais ama. Atendemos famílias de
            Sorocaba e região com transparência e dedicação.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar uma visita via WhatsApp"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-10 py-5 text-lg font-semibold shadow-lift hover:-translate-y-0.5 hover:shadow-soft transition-all"
          >
            <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden>
              <path d="M19.11 17.27c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.85 1.06-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.33-.8-.71-1.33-1.59-1.49-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.83-2.01-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.65 1.12 2.83c.14.18 1.94 2.96 4.7 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.31z" />
            </svg>
            Agendar uma visita via WhatsApp
          </a>

          <div className="mt-16 grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            {[
              { icon: Phone, t: "Telefone", v: PHONE_DISPLAY, href: `tel:${PHONE_E164}` },
              { icon: MapPin, t: "Endereço", v: "Sorocaba, SP" },
            ].map((c) => (
              <div key={c.t} className="flex items-start gap-4 rounded-xl border border-border p-5 bg-card">
                <div className="h-11 w-11 rounded-lg bg-primary-soft text-primary flex items-center justify-center shrink-0">
                  <c.icon size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.t}</p>
                  {c.href ? (
                    <a href={c.href} className="mt-1 font-medium hover:text-primary transition-colors block">
                      {c.v}
                    </a>
                  ) : (
                    <p className="mt-1 font-medium">{c.v}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary-soft border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-9 w-9 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-serif text-lg">N</span>
              <span className="font-serif text-lg leading-tight">
                Hotel Geriátrico
                <span className="block text-xs tracking-widest uppercase opacity-70">Nazireu</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-foreground/70 leading-relaxed">
              Casa de repouso e hotel geriátrico em Sorocaba. Enfermagem 24 horas, equipe
              multidisciplinar e cuidado humanizado há mais de 18 anos.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-base mb-4">Navegação</h2>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#sobre" className="hover:text-primary">Sobre nós</a></li>
              <li><a href="#servicos" className="hover:text-primary">Serviços</a></li>
              <li><a href="#instalacoes" className="hover:text-primary">Instalações</a></li>
              <li><a href="#adultos-necessidades-especiais" className="hover:text-primary">Adultos com necessidades especiais</a></li>
              <li><a href="#faq" className="hover:text-primary">Perguntas frequentes</a></li>
              <li><a href="#contato" className="hover:text-primary">Contato</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-base mb-4">Contato</h2>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-primary" />
                <a href={`tel:${PHONE_E164}`} className="hover:text-primary">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Sorocaba, SP</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-base mb-4">Siga-nos</h2>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook do Hotel Geriátrico Nazireu" className="h-11 w-11 rounded-full bg-background border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram do Hotel Geriátrico Nazireu" className="h-11 w-11 rounded-full bg-background border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-foreground/60 flex flex-col sm:flex-row gap-2 justify-between items-center">
            <p>© {new Date().getFullYear()} Hotel Geriátrico Nazireu — Casa de repouso em Sorocaba. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <p>Feito com cuidado em Sorocaba, SP.</p>
              <Link to="/admin/login" className="opacity-60 hover:opacity-100 hover:text-primary transition">
                Acesso administrativo
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
