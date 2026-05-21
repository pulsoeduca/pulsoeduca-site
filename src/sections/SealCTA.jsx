import selo from "@/assets/selo.png"

export function SealCTA() {
  return (
    <section 
     id="selo"
     className="bg-[#f8f1ea] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="overflow-hidden rounded-[42px] border border-[#e5d7ca] bg-white shadow-xl grid lg:grid-cols-[0.8fr_1.4fr]">

          <div className="bg-[#ff6a00] flex items-center justify-center p-16 relative overflow-hidden">

            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:22px_22px]" />

            <img
            src={selo}
            alt="Selo Pulso Educa"
            className="relative w-52 md:w-64 rounded-[28px] shadow-[0_25px_60px_rgba(0,0,0,0.28)]"
/>      

              </div>

          <div className="bg-[#f7f4f1] p-12 md:p-16 flex flex-col justify-center">

            <span className="text-[#ff6a00] uppercase tracking-[0.25em] text-sm font-bold">
              Selo Pulso Educa
            </span>

            <h2 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mt-6 text-[#2b130d] max-w-[620px]">
              Um selo que comunica cuidado às famílias.
            </h2>

            <div className="space-y-8 mt-10 text-[#6f5b53] text-xl leading-relaxed">

              <p>
                Escolas que atingem nota ISEAM acima de 7,5 recebem o Selo
                Pulso Educa, um reconhecimento público do compromisso com
                um ambiente escolar mais seguro, saudável e bem cuidado.
              </p>

              <p>
                Mais do que um diagnóstico interno, o selo é uma ferramenta
                de reputação e atração: fortalece a imagem institucional,
                gera confiança junto às famílias e se torna um diferencial
                concreto na captação e retenção de alunos.
              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-x-10 gap-y-5 mt-12">

              {[
                "Reconhecimento público do compromisso da escola",

                "Diferencial competitivo na captação de novos alunos",

                "Confiança e tranquilidade para as famílias",

                "Reforço da reputação institucional",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="text-[#ff6a00] text-xl font-black">
                    •
                  </span>

                  <span className="font-semibold text-[#2b130d] leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <p className="mt-12 text-sm italic text-[#8a756b]">
              Concedido às escolas que alcançam nota ISEAM igual ou superior a 7,5.
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}