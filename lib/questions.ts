export interface Question {
  id: number
  text: string
  category: string
}

export const categories = [
  "Vida & Maturidade",
  "Relacionamentos",
  "Carreira & Finanças",
  "Saúde & Bem-Estar",
  "Autoconhecimento",
  "Família",
  "Sonhos & Propósito",
  "Reflexões Profundas",
  "Tempo & Prioridades",
  "Legado & Futuro",
] as const

export type Category = (typeof categories)[number]

export const questions: Question[] = [
  // Vida & Maturidade (1-10)
  { id: 1, text: "O que você sabe hoje que gostaria de ter sabido aos 20 anos?", category: "Vida & Maturidade" },
  { id: 2, text: "Qual foi o momento mais transformador da sua vida até agora?", category: "Vida & Maturidade" },
  { id: 3, text: "Se pudesse voltar no tempo e dar um único conselho a si mesmo, qual seria?", category: "Vida & Maturidade" },
  { id: 4, text: "Qual foi a lição mais difícil que a vida já te ensinou?", category: "Vida & Maturidade" },
  { id: 5, text: "Você se sente mais sábio ou apenas mais cansado do que há 10 anos?", category: "Vida & Maturidade" },
  { id: 6, text: "O que significa amadurecer para você?", category: "Vida & Maturidade" },
  { id: 7, text: "Qual foi a melhor decisão que você já tomou na vida?", category: "Vida & Maturidade" },
  { id: 8, text: "Se sua vida fosse um livro, qual seria o título do capítulo atual?", category: "Vida & Maturidade" },
  { id: 9, text: "O que você deixou de fazer por medo e hoje se arrepende?", category: "Vida & Maturidade" },
  { id: 10, text: "Qual conquista dos seus 30 anos te dá mais orgulho?", category: "Vida & Maturidade" },

  // Relacionamentos (11-20)
  { id: 11, text: "O que você valoriza mais em uma amizade hoje do que quando era jovem?", category: "Relacionamentos" },
  { id: 12, text: "Qual é o ingrediente mais importante para um relacionamento duradouro?", category: "Relacionamentos" },
  { id: 13, text: "Você sente que tem amigos verdadeiros ou apenas conhecidos?", category: "Relacionamentos" },
  { id: 14, text: "O que você faria diferente no seu primeiro grande relacionamento?", category: "Relacionamentos" },
  { id: 15, text: "Quando foi a última vez que você se abriu completamente com alguém?", category: "Relacionamentos" },
  { id: 16, text: "Qual é a coisa mais bonita que alguém já fez por você?", category: "Relacionamentos" },
  { id: 17, text: "Você se considera uma pessoa fácil ou difícil de conviver?", category: "Relacionamentos" },
  { id: 18, text: "Qual foi a maior lição que um relacionamento te ensinou?", category: "Relacionamentos" },
  { id: 19, text: "O que você precisa em um parceiro que antes achava desnecessário?", category: "Relacionamentos" },
  { id: 20, text: "Perdoar ficou mais fácil ou mais difícil com o tempo?", category: "Relacionamentos" },

  // Carreira & Finanças (21-30)
  { id: 21, text: "Você trabalha para viver ou vive para trabalhar?", category: "Carreira & Finanças" },
  { id: 22, text: "Se dinheiro não fosse problema, o que você faria da vida?", category: "Carreira & Finanças" },
  { id: 23, text: "Qual foi o maior risco profissional que você já correu?", category: "Carreira & Finanças" },
  { id: 24, text: "Você se sente realizado profissionalmente? Por quê?", category: "Carreira & Finanças" },
  { id: 25, text: "O que dinheiro pode comprar que realmente te faz feliz?", category: "Carreira & Finanças" },
  { id: 26, text: "Se pudesse mudar de carreira agora, para qual área iria?", category: "Carreira & Finanças" },
  { id: 27, text: "Qual foi o pior emprego que você já teve e o que ele te ensinou?", category: "Carreira & Finanças" },
  { id: 28, text: "Você está onde imaginava estar profissionalmente aos 40?", category: "Carreira & Finanças" },
  { id: 29, text: "Qual é o melhor investimento que você já fez em si mesmo?", category: "Carreira & Finanças" },
  { id: 30, text: "O que significa sucesso para você hoje?", category: "Carreira & Finanças" },

  // Saúde & Bem-Estar (31-40)
  { id: 31, text: "O que mudou na sua relação com o seu corpo nos últimos 10 anos?", category: "Saúde & Bem-Estar" },
  { id: 32, text: "Qual hábito saudável você gostaria de ter começado mais cedo?", category: "Saúde & Bem-Estar" },
  { id: 33, text: "O que te tira o sono à noite?", category: "Saúde & Bem-Estar" },
  { id: 34, text: "Você cuida da sua saúde mental tanto quanto da física?", category: "Saúde & Bem-Estar" },
  { id: 35, text: "Qual é o seu maior vício e como ele afeta sua vida?", category: "Saúde & Bem-Estar" },
  { id: 36, text: "Se pudesse eliminar um hábito da sua vida, qual seria?", category: "Saúde & Bem-Estar" },
  { id: 37, text: "O que te dá energia e o que te drena?", category: "Saúde & Bem-Estar" },
  { id: 38, text: "Quando foi a última vez que você se sentiu verdadeiramente descansado?", category: "Saúde & Bem-Estar" },
  { id: 39, text: "Você já fez terapia? O que pensa sobre isso?", category: "Saúde & Bem-Estar" },
  { id: 40, text: "O que significa estar bem para você?", category: "Saúde & Bem-Estar" },

  // Autoconhecimento (41-50)
  { id: 41, text: "Qual é o seu maior defeito e o que você faz para lidar com ele?", category: "Autoconhecimento" },
  { id: 42, text: "O que te faz chorar sem explicação?", category: "Autoconhecimento" },
  { id: 43, text: "Qual é a sua maior qualidade que as pessoas não percebem?", category: "Autoconhecimento" },
  { id: 44, text: "Você é a mesma pessoa que era há 10 anos? O que mudou?", category: "Autoconhecimento" },
  { id: 45, text: "O que te irrita profundamente e por quê?", category: "Autoconhecimento" },
  { id: 46, text: "Qual é o maior medo que você ainda não superou?", category: "Autoconhecimento" },
  { id: 47, text: "Você se gosta de verdade? Se sim, desde quando?", category: "Autoconhecimento" },
  { id: 48, text: "O que as pessoas pensam de você que não é verdade?", category: "Autoconhecimento" },
  { id: 49, text: "Qual foi o momento em que você se sentiu mais orgulhoso de si?", category: "Autoconhecimento" },
  { id: 50, text: "Se pudesse mudar uma coisa em si mesmo, o que seria?", category: "Autoconhecimento" },

  // Família (51-60)
  { id: 51, text: "O que seus pais te ensinaram que você leva para a vida?", category: "Família" },
  { id: 52, text: "Qual é a memória mais bonita da sua infância?", category: "Família" },
  { id: 53, text: "O que você gostaria de ter dito a um familiar que já se foi?", category: "Família" },
  { id: 54, text: "Qual é o maior desafio de ser pai/mãe ou de não ser?", category: "Família" },
  { id: 55, text: "Que tradição familiar você faz questão de manter viva?", category: "Família" },
  { id: 56, text: "O que você herdou dos seus pais que gostaria de mudar?", category: "Família" },
  { id: 57, text: "Qual foi o sacrifício mais difícil que você fez pela sua família?", category: "Família" },
  { id: 58, text: "Se pudesse ter um jantar com qualquer parente já falecido, quem seria?", category: "Família" },
  { id: 59, text: "O que sua família pensa de você que te surpreende?", category: "Família" },
  { id: 60, text: "Qual ensinamento você quer passar para a próxima geração?", category: "Família" },

  // Sonhos & Propósito (61-70)
  { id: 61, text: "Qual sonho de infância você ainda quer realizar?", category: "Sonhos & Propósito" },
  { id: 62, text: "O que te faz levantar da cama todo dia?", category: "Sonhos & Propósito" },
  { id: 63, text: "Você já encontrou o seu propósito de vida?", category: "Sonhos & Propósito" },
  { id: 64, text: "Qual é o próximo grande sonho que você quer conquistar?", category: "Sonhos & Propósito" },
  { id: 65, text: "Se tivesse certeza de que não ia falhar, o que você tentaria?", category: "Sonhos & Propósito" },
  { id: 66, text: "O que te faz sentir vivo de verdade?", category: "Sonhos & Propósito" },
  { id: 67, text: "Qual é a causa que mais importa para você no mundo?", category: "Sonhos & Propósito" },
  { id: 68, text: "Você sente que está vivendo ou apenas sobrevivendo?", category: "Sonhos & Propósito" },
  { id: 69, text: "Qual projeto pessoal você adia há anos?", category: "Sonhos & Propósito" },
  { id: 70, text: "Se pudesse recomeçar do zero, o que faria diferente?", category: "Sonhos & Propósito" },

  // Reflexões Profundas (71-80)
  { id: 71, text: "Você acredita que as pessoas podem realmente mudar?", category: "Reflexões Profundas" },
  { id: 72, text: "O que é mais importante: ser feliz ou ter razão?", category: "Reflexões Profundas" },
  { id: 73, text: "Você tem medo de envelhecer? Por quê?", category: "Reflexões Profundas" },
  { id: 74, text: "O que é o amor para você nesta fase da vida?", category: "Reflexões Profundas" },
  { id: 75, text: "Você acredita que tudo acontece por uma razão?", category: "Reflexões Profundas" },
  { id: 76, text: "Qual é a pergunta que você mais tem medo de responder?", category: "Reflexões Profundas" },
  { id: 77, text: "O que te faz ter esperança na humanidade?", category: "Reflexões Profundas" },
  { id: 78, text: "Se pudesse saber a resposta de uma pergunta sobre o universo, qual seria?", category: "Reflexões Profundas" },
  { id: 79, text: "Você se sente grato pela vida que tem? Por quê?", category: "Reflexões Profundas" },
  { id: 80, text: "O que significa liberdade para quem tem 40 anos?", category: "Reflexões Profundas" },

  // Tempo & Prioridades (81-90)
  { id: 81, text: "Se tivesse apenas um ano de vida, o que faria diferente?", category: "Tempo & Prioridades" },
  { id: 82, text: "O que você parou de fazer que deveria voltar a fazer?", category: "Tempo & Prioridades" },
  { id: 83, text: "Qual é a coisa mais importante na sua vida agora?", category: "Tempo & Prioridades" },
  { id: 84, text: "Você sente que usa bem o seu tempo?", category: "Tempo & Prioridades" },
  { id: 85, text: "O que você precisa dizer 'não' com mais frequência?", category: "Tempo & Prioridades" },
  { id: 86, text: "Qual atividade te faz perder a noção do tempo?", category: "Tempo & Prioridades" },
  { id: 87, text: "Se pudesse congelar um momento da sua vida, qual seria?", category: "Tempo & Prioridades" },
  { id: 88, text: "O que você sacrificou por falta de tempo e se arrepende?", category: "Tempo & Prioridades" },
  { id: 89, text: "Quantos domingos você acha que ainda tem pela frente?", category: "Tempo & Prioridades" },
  { id: 90, text: "O que te rouba tempo e não te devolve nada?", category: "Tempo & Prioridades" },

  // Legado & Futuro (91-100)
  { id: 91, text: "Como você quer ser lembrado?", category: "Legado & Futuro" },
  { id: 92, text: "Qual é a marca que você quer deixar no mundo?", category: "Legado & Futuro" },
  { id: 93, text: "O que você diria ao seu eu de 60 anos?", category: "Legado & Futuro" },
  { id: 94, text: "Que história sua você gostaria que fosse contada?", category: "Legado & Futuro" },
  { id: 95, text: "O que te assusta sobre os próximos 20 anos?", category: "Legado & Futuro" },
  { id: 96, text: "Qual é a lição de vida mais importante que você aprendeu?", category: "Legado & Futuro" },
  { id: 97, text: "O que você quer construir que dure mais do que você?", category: "Legado & Futuro" },
  { id: 98, text: "Se escrevesse uma carta para o futuro, o que diria?", category: "Legado & Futuro" },
  { id: 99, text: "O que falta para você se sentir completo?", category: "Legado & Futuro" },
  { id: 100, text: "Se esta fosse a sua última pergunta a responder, qual seria a sua resposta para a vida?", category: "Legado & Futuro" },
]
