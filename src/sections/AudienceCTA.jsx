export function AudienceCTA() {
  return (
    <section className="bg-[#f5efe8] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[42px] bg-[#ff6a00] px-10 md:px-16 py-16 md:py-10">

          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:22px_22px]" />

         
          <div className="relative max-w-[820px]">
            <span className="text-white uppercase tracking-[0.35em] text-sm font-bold">
              Para quem é
            </span>

            <h2 className="text-white text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mt-4 max-w-[720px]">
              Escolas que querem sair do reativo.
            </h2>

            <p className="text-white text-xl leading-relaxed mt-8 max-w-[850px]">
              Trabalhamos com gestores, mantenedores e coordenações pedagógicas
              que entendem que prevenção custa menos (financeira, reputacional
              e humanamente) do que apagar incêndios.
            </p>

            <div className="flex flex-wrap gap-5 mt-8">
              {[
                "Educação Infantil",
                "Fundamental I e II",
                "Ensino Médio",
              ].map((item) => (
                <div
                  key={item}
                  className="px-8 py-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white font-bold text-lg"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}