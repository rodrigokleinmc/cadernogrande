"use client"

import React from "react"

import { cn } from "@/lib/utils"
import { categories, type Category } from "@/lib/questions"
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
  "Vida & Maturidade": <Sparkles className="h-4 w-4" />,
  "Relacionamentos": <Heart className="h-4 w-4" />,
  "Carreira & Finanças": <Briefcase className="h-4 w-4" />,
  "Saúde & Bem-Estar": <Activity className="h-4 w-4" />,
  "Autoconhecimento": <Search className="h-4 w-4" />,
  "Família": <Users className="h-4 w-4" />,
  "Sonhos & Propósito": <Rocket className="h-4 w-4" />,
  "Reflexões Profundas": <Brain className="h-4 w-4" />,
  "Tempo & Prioridades": <Clock className="h-4 w-4" />,
  "Legado & Futuro": <Star className="h-4 w-4" />,
}

interface CategoryNavProps {
  activeCategory: string | null
  onCategoryChange: (category: string | null) => void
}

export function CategoryNav({ activeCategory, onCategoryChange }: CategoryNavProps) {
  return (
    <nav className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl px-6 py-4">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => onCategoryChange(null)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === null
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            Todas
          </button>
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {categoryIcons[cat]}
              <span className="hidden sm:inline">{cat}</span>
              <span className="sm:hidden">{cat.split(" ")[0]}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
