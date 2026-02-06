import { NotebookHeader } from "@/components/notebook-header"
import { QuestionsList } from "@/components/questions-list"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <NotebookHeader />
      <QuestionsList />
    </div>
  )
}
