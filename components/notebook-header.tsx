import { BookOpen } from "lucide-react"

export function NotebookHeader() {
  return (
    <header className="relative overflow-hidden bg-primary py-16 text-primary-foreground md:py-24">
      {/* Decorative ruled lines */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 31px, currentColor 31px, currentColor 32px)`,
          }}
        />
      </div>

      {/* Decorative circles */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute -top-8 -left-8 h-40 w-40 rounded-full border-2 border-current" />
        <div className="absolute -right-12 -bottom-12 h-56 w-56 rounded-full border border-current" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-current opacity-40" />
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-current/30">
            <BookOpen className="h-7 w-7" aria-hidden="true" />
          </div>
          <div className="h-px w-16 bg-current opacity-40" />
        </div>

        <h1 className="font-serif text-4xl font-bold tracking-tight text-balance md:text-6xl">
          Caderno de Perguntas
          <br />
          <span className="italic">de Gente Grande</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed opacity-85 md:text-xl">
          100 perguntas para quem chegou aos 40 e quer ir mais fundo.
          Reflexoes sobre vida, amor, tempo e o que realmente importa.
        </p>

        <div className="mt-10 flex items-center justify-center gap-6 text-sm opacity-70">
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
            100 Perguntas
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
            10 Categorias
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
            {"Reflexao Profunda"}
          </span>
        </div>
      </div>
    </header>
  )
}
