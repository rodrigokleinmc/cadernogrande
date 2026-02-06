"use client"

import type { Question } from "@/lib/questions"
import { cn } from "@/lib/utils"

interface QuestionCardProps {
  question: Question
  answer: string
  onAnswerChange: (value: string) => void
}

export function QuestionCard({ question, answer, onAnswerChange }: QuestionCardProps) {
  const isFirst = question.id % 10 === 1

  return (
    <article className="group relative border-b border-border py-5 last:border-b-0 md:py-6">
      <div className="flex items-start gap-4 md:gap-5">
        {/* Number badge */}
        <span
          className={cn(
            "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-serif text-sm font-bold transition-colors md:h-11 md:w-11 md:text-base",
            isFirst
              ? "bg-primary text-primary-foreground"
              : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
          )}
        >
          {question.id}
        </span>

        {/* Question + Answer */}
        <div className="flex-1">
          <p className="text-base leading-relaxed text-foreground md:text-lg">
            {question.text}
          </p>
          <span className="mt-1.5 inline-block text-xs font-medium tracking-wider text-muted-foreground uppercase">
            {question.category}
          </span>

          {/* Answer textarea */}
          <textarea
            value={answer}
            onChange={(e) => onAnswerChange(e.target.value)}
            placeholder="Escreva sua resposta aqui..."
            rows={2}
            className="mt-3 w-full resize-y rounded-lg border border-border bg-card px-4 py-3 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
          />
        </div>
      </div>

      {/* Hover accent line */}
      <div className="absolute top-0 left-0 h-full w-0.5 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
    </article>
  )
}
