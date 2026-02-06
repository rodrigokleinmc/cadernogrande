import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { answers, userName } = await request.json()

    if (!answers || typeof answers !== "object") {
      return NextResponse.json({ error: "Dados invalidos" }, { status: 400 })
    }

    // Build email body from answers
    const answeredEntries = Object.entries(answers as Record<string, { question: string; answer: string; category: string }>)
      .filter(([, val]) => val.answer && val.answer.trim() !== "")
      .sort(([a], [b]) => Number(a) - Number(b))

    if (answeredEntries.length === 0) {
      return NextResponse.json({ error: "Nenhuma pergunta foi respondida." }, { status: 400 })
    }

    let emailBody = `CADERNO DE PERGUNTAS DE GENTE GRANDE\n`
    emailBody += `========================================\n\n`
    if (userName) {
      emailBody += `Respondido por: ${userName}\n`
    }
    emailBody += `Data: ${new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}\n`
    emailBody += `Total de perguntas respondidas: ${answeredEntries.length} de 100\n\n`
    emailBody += `========================================\n\n`

    let currentCategory = ""
    for (const [id, { question, answer, category }] of answeredEntries) {
      if (category !== currentCategory) {
        currentCategory = category
        emailBody += `\n--- ${category.toUpperCase()} ---\n\n`
      }
      emailBody += `Pergunta ${id}: ${question}\n`
      emailBody += `Resposta: ${answer}\n\n`
    }

    emailBody += `\n========================================\n`
    emailBody += `Enviado pelo Caderno de Perguntas de Gente Grande\n`

    // Use FormSubmit.co free email forwarding service
    const formData = new FormData()
    formData.append("email", "rodrigokleinmc@hotmail.com")
    formData.append("_subject", `Caderno de Perguntas de Gente Grande${userName ? ` - ${userName}` : ""}`)
    formData.append("message", emailBody)
    formData.append("_captcha", "false")
    formData.append("_template", "box")

    const response = await fetch("https://formsubmit.co/ajax/rodrigokleinmc@hotmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: userName || "Anonimo",
        email: "caderno@perguntas.com",
        _subject: `Caderno de Perguntas de Gente Grande${userName ? ` - ${userName}` : ""}`,
        message: emailBody,
        _captcha: "false",
        _template: "box",
      }),
    })

    if (!response.ok) {
      throw new Error("Erro ao enviar e-mail")
    }

    return NextResponse.json({ success: true, total: answeredEntries.length })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Erro ao enviar as respostas. Tente novamente." },
      { status: 500 }
    )
  }
}
