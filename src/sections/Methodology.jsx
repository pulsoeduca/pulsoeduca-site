export function Methodology() {
  const rows = [
    ["01", "SCEG", "Convivência e Equidade"],
    ["02", "SCAE", "Cultura Alimentar Escolar"],
    ["03", "SECR", "Exposição a Conteúdos de Risco"],
    ["04", "SLMD", "Letramento e Mediação Digital"],
    ["05", "SCPI", "Cultura e Práticas Institucionais"],
    ["06", "SGD", "Gestão e Diretrizes"],
  ]

  const scale = [
    ["0–3,9", "Crítico", "bg-[#2b130d] text-white"],
    ["4–5,9", "Alerta", "bg-[#f7b44c] text-[#2b130d]"],
    ["6–7,4", "Em desenv.", "bg-[#fff4e8] text-[#2b130d]"],
    ["7,5–8,9", "Consolidado", "bg-[#ff6a00] text-white"],
    ["9–10", "Referência", "bg-[#d83a00] text-white"],
  ]

  return (
   <section 
   id="metodologia"
   className="bg-[#f5e4d3] text-[#2b130d] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        <div>
          <span className="text-[#ff6a00] uppercase tracking-[0.25em] text-sm font-bold">
            Metodologia ISEAM
          </span>

          <h2 className="text-5xl md:text-6xl font-black leading-[1.08] tracking-tight mt-6 max-w-[560px]">
            Um índice. Seis dimensões. Uma escala que escola entende.
          </h2>

          <p className="text-[#6f5b53] text-xl leading-relaxed mt-8 max-w-[620px]">
            O ISEAM traduz a vida escolar em uma nota de 0 a 10.
            Não para ranquear, mas para mostrar <strong className="text-[#2b130d]">onde olhar</strong> e
            acompanhar a evolução ao longo do tempo.
          </p>

          <div className="mt-10 flex overflow-hidden rounded-[28px] border border-[#e3d3c4] max-w-[520px]">
            {scale.map(([range, label, style]) => (
              <div
                key={range}
                className={`${style} flex-1 min-h-20 px-3 py-4 flex flex-col items-center justify-center text-center`}
              >
                <span className="text-sm font-black">
                  {range}
                </span>

                <span className="text-xs font-bold mt-3">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-y-20 -right-24 w-[70%] bg-[#fde5d1]"></div>

          <div className="relative overflow-hidden rounded-[36px] bg-white border border-[#dfd1c4] shadow-xl">
            <div className="bg-[#2b130d] text-white px-8 py-6 flex items-center justify-between">
              <span className="uppercase tracking-[0.18em] text-sm font-bold">
                Matriz ISEAM
              </span>

              <span className="text-sm text-white/70 font-bold">
                6 eixos avaliados
              </span>
            </div>

            <div>
              {rows.map(([number, code, title]) => (
                <div
                  key={number}
                  className="grid grid-cols-[60px_80px_1fr] items-center px-8 py-6 border-b border-[#e8ddd2] last:border-b-0"
                >
                  <span className="text-[#ff6a00] font-black text-sm">
                    {number}
                  </span>

                  <span className="font-black text-[#6f5b53] text-sm">
                    {code}
                  </span>

                  <span className="text-lg text-[#2b130d]">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}