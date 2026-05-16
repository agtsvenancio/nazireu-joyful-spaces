import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import suite from "@/assets/amenity-suite.jpg";
import garden from "@/assets/amenity-garden.jpg";
import common from "@/assets/amenity-common.jpg";
import dining from "@/assets/amenity-dining.jpg";

const slides = [
  { src: suite, title: "Suítes confortáveis", desc: "Quartos amplos, adaptados e acolhedores para descanso pleno." },
  { src: common, title: "Áreas comuns espaçosas", desc: "Ambientes claros para convivência, leitura e atividades." },
  { src: garden, title: "Jardins verdes", desc: "Espaços ao ar livre para caminhadas e momentos de tranquilidade." },
  { src: dining, title: "Refeitório elegante", desc: "Alimentação balanceada servida em ambiente sofisticado." },
];

export function AmenityCarousel() {
  const [i, setI] = useState(0);
  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setI((p) => (p + 1) % slides.length);

  return (
    <div className="relative">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-lift bg-muted">
        {slides.map((s, idx) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.title}
            loading="lazy"
            width={1600}
            height={1000}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
          <h3 className="font-serif text-2xl sm:text-3xl">{slides[i].title}</h3>
          <p className="mt-2 max-w-xl text-white/90">{slides[i].desc}</p>
        </div>

        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-card"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={next}
          aria-label="Próximo"
          className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-card"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {slides.map((s, idx) => (
          <button
            key={s.src}
            aria-label={`Ir para ${s.title}`}
            onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === i ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
