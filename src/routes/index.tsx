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
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Navbar, WHATSAPP_URL } from "@/components/site/Navbar";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { AmenityCarousel } from "@/components/site/AmenityCarousel";
import { useSiteImage, useSiteVideo, toYouTubeEmbed } from "@/hooks/use-site-images";
import heroFallback from "@/assets/hero.jpg";
import aboutFallback from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const services = [
  { icon: Stethoscope, title: "Médicos", desc: "Geriatria e acompanhamento clínico contínuo, com protocolos individualizados." },
  { icon: HeartPulse, title: "Enfermagem 24 horas", desc: "Equipe técnica presente dia e noite, monitoramento e segurança permanentes." },
  { icon: Apple, title: "Nutrição", desc: "Cardápios balanceados elaborados por nutricionista, respeitando restrições." },
  { icon: Brain, title: "Terapia Ocupacional", desc: "Atividades para estimular memória, autonomia e bem-estar emocional." },
  { icon: Activity, title: "Fisioterapia", desc: "Manutenção preventiva e reabilitação para mobilidade e independência." },
  { icon: Sun, title: "Day Care", desc: "Creche para idosos com translado, convivência e atividades programadas." },
];

const pillars = [
  { icon: ShieldCheck, title: "Dignidade", desc: "Cuidado humano em cada gesto." },
  { icon: Users, title: "Família", desc: "Ambiente acolhedor e próximo." },
  { icon: Sparkles, title: "Excelência", desc: "Padrão hoteleiro de bem-estar." },
];

function Home() {
  const hero = useSiteImage("hero", heroFallback);
  const about = useSiteImage("about", aboutFallback);
  const trustVideo = useSiteImage("trust-video", aboutFallback);
  const trustVideoUrl = useSiteVideo("trust-video");
  const trustEmbed = trustVideoUrl ? toYouTubeEmbed(trustVideoUrl) : null;
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <WhatsAppFab />


      {/* HERO */}
      <section id="home" className="relative min-h-[100svh] flex items-center">
        <img
          src={hero}
          alt="Ambiente acolhedor do Hotel Geriátrico Nazireu"
          width={1920}
          height={1280}
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
              Onde cada dia é uma celebração de vida, com respeito, alegria e cuidado.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-semibold shadow-lift hover:-translate-y-0.5 hover:shadow-soft transition-all"
              >
                <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor" aria-hidden>
                  <path d="M19.11 17.27c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.85 1.06-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.33-.8-.71-1.33-1.59-1.49-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.83-2.01-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.65 1.12 2.83c.14.18 1.94 2.96 4.7 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.31zM16.02 5.33C10.13 5.33 5.34 10.12 5.34 16c0 1.88.49 3.72 1.43 5.34L5.33 26.67l5.46-1.43a10.66 10.66 0 005.23 1.34h.01c5.88 0 10.67-4.79 10.67-10.67 0-2.85-1.11-5.53-3.13-7.55a10.6 10.6 0 00-7.55-3.13z" />
                </svg>
                Fale Conosco
              </a>
              <a
                href="#instalacoes"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 text-white px-8 py-4 text-base font-medium hover:bg-white/10 transition-colors"
              >
                Conhecer instalações
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
              <img src={about} alt="Cuidado humanizado no Nazireu" loading="lazy" width={1200} height={1400} className="w-full h-full object-cover aspect-[4/5]" />
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
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Sobre nós</span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl leading-tight">
              Mais de 18 anos cuidando com amor e excelência.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              No Nazireu, recebemos cada residente como parte da nossa família. Nossa missão é oferecer um lar onde a longevidade é vivida com dignidade, alegria e cuidado personalizado — sustentado por uma equipe multidisciplinar que combina técnica, sensibilidade e propósito.
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
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="py-24 sm:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Nossos serviços</span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Cuidado completo, em um só lugar</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Uma equipe multidisciplinar dedicada a promover saúde, autonomia e bem-estar todos os dias.
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
                  href="#contato"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  Saiba mais
                  <span aria-hidden>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section id="instalacoes" className="py-24 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Instalações</span>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Um lar pensado em cada detalhe</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Espaços projetados para conforto, segurança e mobilidade — com áreas verdes, suítes adaptadas e ambientes de convivência.
            </p>
          </div>

          <AmenityCarousel />
        </div>
      </section>

      {/* TRUST */}
      <section className="py-24 sm:py-32 bg-primary-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Reconhecimento</span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Confiança que se constrói no dia a dia</h2>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
              Reconhecidos por famílias e pela comunidade como referência em cuidado sênior na região.
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
                title="Vídeo institucional Nazireu"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          ) : (
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lift bg-foreground/90 group cursor-pointer">
              <img
                src={trustVideo}
                alt="Vídeo institucional"
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

      {/* FINAL CTA */}
      <section id="contato" className="py-24 sm:py-32 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Agende sua visita</span>
          <h2 className="mt-3 font-serif text-4xl sm:text-6xl leading-tight">
            Conheça o nosso hotel <em className="text-primary not-italic">pessoalmente</em>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Agende agora sua visita e descubra como podemos proporcionar o máximo de conforto e felicidade para quem você mais ama.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-10 py-5 text-lg font-semibold shadow-lift hover:-translate-y-0.5 hover:shadow-soft transition-all"
          >
            <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden>
              <path d="M19.11 17.27c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.85 1.06-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.33-.8-.71-1.33-1.59-1.49-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.83-2.01-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.65 1.12 2.83c.14.18 1.94 2.96 4.7 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.31z" />
            </svg>
            Agendar Uma Visita via WhatsApp
          </a>

          <div className="mt-16 grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            {[
              { icon: Phone, t: "Telefone", v: "+55 15 99790-0220" },
              { icon: MapPin, t: "Endereço", v: "Sorocaba, SP" },
            ].map((c) => (
              <div key={c.t} className="flex items-start gap-4 rounded-xl border border-border p-5 bg-card">
                <div className="h-11 w-11 rounded-lg bg-primary-soft text-primary flex items-center justify-center shrink-0">
                  <c.icon size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.t}</p>
                  <p className="mt-1 font-medium">{c.v}</p>
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
              Cuidado humanizado, ambiente acolhedor e excelência há mais de 18 anos.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-base mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#sobre" className="hover:text-primary">Sobre nós</a></li>
              <li><a href="#servicos" className="hover:text-primary">Serviços</a></li>
              <li><a href="#instalacoes" className="hover:text-primary">Instalações</a></li>
              <li><a href="#contato" className="hover:text-primary">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="flex items-center gap-2"><Phone size={14} className="text-primary" /> +55 15 99790-0220</li>
              <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Sorocaba, SP</li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base mb-4">Siga-nos</h3>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="h-11 w-11 rounded-full bg-background border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="h-11 w-11 rounded-full bg-background border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-foreground/60 flex flex-col sm:flex-row gap-2 justify-between items-center">
            <p>© {new Date().getFullYear()} Hotel Geriátrico Nazireu. Todos os direitos reservados.</p>
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
