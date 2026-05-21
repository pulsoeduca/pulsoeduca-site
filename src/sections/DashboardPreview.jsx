export function DashboardPreview() {
  const items = [
    "Tensões de convivência que ninguém comenta abertamente",

    "Estudantes que não comem ou comem escondido",

    "Discursos polarizadores chegando pela internet",

    "Famílias e gestores em narrativas paralelas",
  ]

  return (
    <section className="bg-[#2b0d05] text-white py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        <div>
          <span className="text-[#ff6a00] uppercase tracking-[0.25em] text-sm font-bold">
            O ponto cego
          </span>

          <h2 className="text-5xl md:text-5xl font-black leading-[1.05] tracking-tight mt-8 max-w-[650px]">

            A escola que parece bem por fora{" "}

            <span className="text-[#ff6a00]">
              raramente está
            </span>{" "}

            por dentro.
          </h2>

          <p className="text-[#d2b8ae] text-1xl leading-relaxed mt-10 max-w-[650px]">
            Gestores escolares operam no ritmo da urgência.
            O que aparece é o visível: notas, frequência,
            reclamações. Mas o que realmente adoece o
            ambiente — convívio, alimentação, vínculos e
            cultura — segue abaixo da linha d'água até virar crise.
          </p>
        </div>

        <div className="flex flex-col gap-5">

          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#3a160d] border border-[#5a2b20] rounded-[32px] px-4 py-4 flex items-center gap-5"
            >

              <div className="w-10 h-10 rounded-full bg-[#ff6a00] flex items-center justify-center text-sm font-black flex-shrink-0">
                {String(index + 1).padStart(2, "0")}
              </div>

              <p className="text-lg leading-relaxed text-[#fff7f2] font-medium">
                {item}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}