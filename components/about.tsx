"use client"

import Image from "next/image"
import { Award, Clock, Truck } from "lucide-react"

const highlights = [
  {
    icon: Award,
    title: "Calidad Premium",
    description: "Ingredientes frescos seleccionados a diario y recetas ajustadas a cada evento.",
  },
  {
    icon: Clock,
    title: "Receta Tradicional",
    description: "Preparaciones inspiradas en la paella valenciana con azafran de origen espanol.",
  },
  {
    icon: Truck,
    title: "Delivery Puntual",
    description: "Cobertura en La Serena y Coquimbo con logistica propia y horarios flexibles.",
  },
]

export function About() {
  return (
    <section id="somos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-12 lg:gap-16">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                Nuestra Historia
              </span>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">Sobre Paellas La Serena</h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Nacimos para acercar la cocina espanola al norte de Chile. Cada paella se prepara con sofrito recien hecho
                  y caldos sabrosos, respetando el tiempo de coccion para lograr un arroz con el punto perfecto.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Nos encargamos de todo: planificacion del menu, montaje y entrega o preparacion en el lugar, ofreciendo
                  una experiencia que se adapta a celebraciones familiares, eventos corporativos y matrimonios.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-primary/20 bg-primary/5 px-5 py-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <item.icon className="mb-3 h-8 w-8 text-primary" />
                    <h3 className="text-sm font-semibold text-card-foreground mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[380px] md:h-[460px] lg:h-[420px] overflow-hidden rounded-3xl border border-border/60 shadow-xl">
              <Image
                src="/marinera.jpg"
                alt="Equipo de Paellas La Serena"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-background/90 px-4 py-3 shadow-lg backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Desde 2017</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Preparaciones en vivo, aromas a azafran y todo el montaje para tu evento.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-56 md:h-64 rounded-3xl overflow-hidden border border-border/50 shadow-lg">
              <Image
                src="/mixta_premium2.jpg"
                alt="Paella servida en evento"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="rounded-3xl border border-primary/30 bg-primary/5 px-6 py-8 shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Delivery especializado en paellas</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                En Paellas La Serena coordinamos cada detalle contigo: fecha, horarios, puntos de entrega. Nuestro equipo llega con todo lo necesario para cocinar en vivo o entregar la paella lista,
                cuidando la presentación y temperatura de cada plato.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-3">
                Contáctanos por WhatsApp y construyamos juntos una experiencia culinaria inolvidable para tus invitados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}








