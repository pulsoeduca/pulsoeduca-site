export function Journey() {
  const cards = [
    {
      number: "01",
      tag: "Diagnóstico",
      title: "Diagnóstico preventivo ISEAM",
      description:
        "Mapeamos seis dimensões da vida escolar através da utilização combinada de questionários, rodas, etnografia e entrevistas. Entregamos um índice de 0 a 10 e um relatório que dá visibilidade ao invisível.",
      bullets: [
        "Coleta qualitativa e quantitativa",
        "Índice ISEAM (0–10)",
        "Relatório com cenas, falas e recomendações",
      ],
      featured: true,
    },
    {
      number: "02",
      tag: "Planejamento",
      title: "Planejamento estratégico bianual",
      description:
        "A partir do diagnóstico, desenhamos um plano anual ou bianual orientado pela visão de longo prazo da escola. Priorizamos, organizamos e cronogramamos frentes de transformação com governança clara.",
      bullets: [
        "Visão de 5 anos traduzida em ação",
        "OKRs e indicadores próprios",
        "Ritmo de acompanhamento trimestral",
      ],
    },
    {
      number: "03",
      tag: "Implementação",
      title: "Oficinas e atividades autorais",
      description:
        "Oficinas, formações e experiências autorais ou em parceria com empresas para sustentar a transição cultural. De rodas reflexivas para meninos a visitas a hortas urbanas, tudo conectado ao planejamento da escola",
      bullets: [
        "Rodas reflexivas e formações docentes",
        "Visitas guiadas e parceiros",
        "Curadoria de programas com parceiros",
      ],
    },
  ]

  return (
    <section className="bg-[#f5efe8] text-[#2b130d] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-[#ff6a00] uppercase tracking-[0.25em] text-sm font-extrabold">
          A jornada
        </span>

        <h2 className="text-5xl md:text-5x1 font-black leading-[1.05] tracking-tight mt-6 max-w-2xl">
          Três passos para uma escola{" "}
          <span className="text-[#ff6a00]">
            mais segura e saudável.
          </span>
        </h2>

        <p className="text-[#6f5b53] text-xl leading-relaxed mt-8 max-w-4xl">
          Você pode começar pelo diagnóstico, contratar a jornada completa ou
          entrar direto em oficinas pontuais. Funciona em qualquer ordem, e
          melhor ainda em sequência.
        </p>

        <div className="grid lg:grid-cols-3 gap-6 mt-14">
          {cards.map((card) => (
            <div
              key={card.number}
              className={
                card.featured
                  ? "rounded-[36px] bg-[#ff6a00] text-white p-8 shadow-xl"
                  : "rounded-[36px] bg-white border border-[#ded1c6] text-[#2b130d] p-8 shadow-sm"
              }
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={
                    card.featured
                      ? "text-5xl font-black text-white/40"
                      : "text-5xl font-black text-[#ff6a00]/25"
                  }
                >
                  {card.number}
                </span>

                <span
                  className={
                    card.featured
                      ? "bg-white text-[#ff6a00] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.18em]"
                      : "bg-[#ffe2c7] text-[#ff6a00] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.18em]"
                  }
                >
                  {card.tag}
                </span>
              </div>

              <h3 className="text-2xl font-black leading-tight mt-8">
                {card.title}
              </h3>

              <p
                className={
                  card.featured
                    ? "mt-6 leading-relaxed text-white/90"
                    : "mt-6 leading-relaxed text-[#6f5b53]"
                }
              >
                {card.description}
              </p>

              <ul className="mt-8 space-y-3">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 leading-relaxed">
                    <span
                      className={
                        card.featured
                          ? "text-white font-black"
                          : "text-[#ff6a00] font-black"
                      }
                    >
                      •
                    </span>
                    <span className="font-semibold">
  {bullet}
</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}