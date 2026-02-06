"use client"

import React from "react"

import { toast } from "@/hooks/use-toast"

import { useState, useMemo, useEffect } from "react"
import { questions, categories, type Category } from "@/lib/questions"
import { CategoryNav } from "./category-nav"
import { QuestionCard } from "./question-card"
import { ChevronUp, Send } from "lucide-react"
import {
  Sparkles,
  Heart,
  Briefcase,
  Activity,
  Search,
  Users,
  Rocket,
  Brain,
  Clock,
  Star,
} from "lucide-react"

const categoryIcons: Record<Category, React.ReactNode> = {
  "Vida & Maturidade": <Sparkles className="h-5 w-5 text-primary" />,
  Relacionamentos: <Heart className="h-5 w-5 text-primary" />,
  "Carreira & Finanças": <Briefcase className="h-5 w-5 text-primary" />,
  "Saúde & Bem-Estar": <Activity className="h-5 w-5 text-primary" />,
  Autoconhecimento: <Search className="h-5 w-5 text-primary" />,
  Família: <Users className="h-5 w-5 text-primary" />,
  "Sonhos & Propósito": <Rocket className="h-5 w-5 text-primary" />,
  "Reflexões Profundas": <Brain className="h-5 w-5 text-primary" />,
  "Tempo & Prioridades": <Clock className="h-5 w-5 text-primary" />,
  "Legado & Futuro": <Star className="h-5 w-5 text-primary" />,
}

export function QuestionsList() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [userName, setUserName] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [sendStatus, setSendStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const filteredQuestions = useMemo(() => {
    if (!activeCategory) return questions
    return questions.filter((q) => q.category === activeCategory)
  }, [activeCategory])

  const groupedQuestions = useMemo(() => {
    const groups: Record<string, typeof questions> = {}
    for (const q of filteredQuestions) {
      if (!groups[q.category]) groups[q.category] = []
      groups[q.category].push(q)
    }
    return groups
  }, [filteredQuestions])

  const answeredCount = useMemo(() => {
    return Object.values(answers).filter((a) => a.trim() !== "").length
  }, [answers])

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [String(questionId)]: value }))
  }

  const handleSend = async () => {
    if (answeredCount === 0) {
      setSendStatus("error")
      toast({
        title: "Nada para enviar 🙂",
        description: "Responda pelo menos uma pergunta antes de clicar em Enviar.",
      })
      setTimeout(() => setSendStatus("idle"), 3000)
      return
    }

    setIsSending(true)
    setSendStatus("idle")

    try {
      const payload: Record<string, { question: string; answer: string; category: string }> = {}
      for (const q of questions) {
        const answer = answers[String(q.id)]
        if (answer && answer.trim() !== "") {
          payload[String(q.id)] = {
            question: q.text,
            answer: answer.trim(),
            category: q.category,
          }
        }
      }

      const res = await fetch("/api/send-answers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: payload, userName: userName.trim() || null }),
      })

      if (res.ok) {
        setSendStatus("success")
        toast({
          title: "Enviado ✅",
          description: "Suas respostas foram enviadas para o seu e-mail.",
        })
      } else {
        setSendStatus("error")
        toast({
          title: "Não foi possível enviar",
          description: "Tente novamente em alguns instantes.",
          variant: "destructive",
        })
      }
    } catch {
      setSendStatus("error")
        toast({
          title: "Não foi possível enviar",
          description: "Tente novamente em alguns instantes.",
          variant: "destructive",
        })
    } finally {
      setIsSending(false)
      setTimeout(() => setSendStatus("idle"), 5000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <CategoryNav
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <main className="mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-12">
        {/* User name input */}
        <div className="mb-8 rounded-xl border border-border bg-card p-6 shadow-sm">
          <label htmlFor="user-name" className="mb-2 block font-serif text-lg font-semibold text-foreground">
            Seu nome (opcional)
          </label>
          <input
            id="user-name"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Digite seu nome aqui..."
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Counter */}
        <div className="mb-8 text-center">
          <p className="text-sm text-muted-foreground">
            {"Exibindo "}
            <span className="font-semibold text-foreground">{filteredQuestions.length}</span>
            {filteredQuestions.length === 1 ? " pergunta" : " perguntas"}
            {activeCategory && (
              <>
                {" de "}
                <span className="font-semibold text-foreground">{activeCategory}</span>
              </>
            )}
            {answeredCount > 0 && (
              <>
                {" | "}
                <span className="font-semibold text-primary">{answeredCount}</span>
                {" respondida"}
                {answeredCount !== 1 && "s"}
              </>
            )}
          </p>
        </div>

        {/* Questions grouped by category */}
        <div className="flex flex-col gap-12">
          {Object.entries(groupedQuestions).map(([category, categoryQuestions]) => (
            <section key={category}>
              {/* Category header */}
              <div className="mb-4 flex items-center gap-3 border-b border-border pb-4">
                {categoryIcons[category as Category]}
                <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                  {category}
                </h2>
                <span className="ml-auto text-sm text-muted-foreground">
                  {categoryQuestions[0].id}
                  {" - "}
                  {categoryQuestions[categoryQuestions.length - 1].id}
                </span>
              </div>

              {/* Question cards with answer inputs */}
              <div>
                {categoryQuestions.map((q) => (
                  <QuestionCard
                    key={q.id}
                    question={q}
                    answer={answers[String(q.id)] || ""}
                    onAnswerChange={(value) => handleAnswerChange(q.id, value)}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Send button */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={handleSend}
            disabled={isSending || answeredCount === 0}
            className="flex items-center gap-3 rounded-xl bg-primary px-10 py-4 font-serif text-lg font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSending ? (
              <>
                <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Enviar
              </>
            )}
          </button>

          {answeredCount === 0 && (
            <p className="text-sm text-muted-foreground">
              Responda pelo menos uma pergunta para enviar.
            </p>
          )}

          {sendStatus === "success" && (
            <p className="rounded-lg bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
              Respostas enviadas com sucesso! Obrigado por participar.
            </p>
          )}

          {sendStatus === "error" && answeredCount > 0 && (
            <p className="rounded-lg bg-red-100 px-4 py-2 text-sm font-medium text-red-800">
              Erro ao enviar. Tente novamente.
            </p>
          )}

          {sendStatus === "error" && answeredCount === 0 && (
            <p className="rounded-lg bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
              Responda pelo menos uma pergunta antes de enviar.
            </p>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-border pt-8 text-center">
          <p className="font-serif text-xl italic text-muted-foreground">
            {'"A pergunta certa pode mudar uma vida inteira."'}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            {"Caderno de Perguntas de Gente Grande"}
          </p>
        </footer>
      </main>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          className="fixed right-6 bottom-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:bg-primary/90"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </>
  )
}
