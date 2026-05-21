import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import logoCompleto from "@/assets/logo-completo.png"
import logomenino from "@/assets/logo-menino.png"

export function Hero() {
 return (
  <>
    <Navbar />

   <section 
   id="inicio"
   className="relative bg-[#f5efe8] pt-30 pb-42 overflow-hidden">
   

<div className="max-w-7xl mx-auto px-6 pt-10 md:pt-16 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-orange-500 uppercase tracking-[0.3em] text-sm">
            Prevenção inteligente
          </span>

         <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-5xl md:text-6xl font-black leading-[0.95] tracking-tight mt-6 text-[#2b130d] max-w-[620px]"
>
  O que sua escola{" "}

  <span className="text-[#ff6a00]">
    ainda não
  </span>{" "}

  consegue ver, a gente revela.
</motion.h1>

          <p className="mt-8 text-xl text-[#6f5b53] max-w-2xl leading-relaxed">
            O Pulso Educa ajuda instituições de ensino a tornar a cultura escolar mais saudável e segura através de prevenção multidimensional baseada em dados.
          </p>

          <div className="flex gap-4 mt-10">
            <a
  href="https://wa.me/5511941768637?text=Olá,%20quero%20conhecer%20a%20Pulso%20Educa"
  target="_blank"
  rel="noreferrer"
  className="bg-[#ff6a00] hover:bg-[#ff7d26] transition-colors text-white px-8 py-4 rounded-full font-bold"
>
  Quero um diagnóstico
</a>

            <button className="border border-[#d9cfc5] bg-white hover:bg-[#f7f2ed] transition-all text-[#2b130d] px-8 py-4 rounded-full font-bold">
              Conhecer a jornada
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center min-h-[520px]">

          <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-3xl rounded-full"></div>

          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src={logomenino}
            alt="Logo menino"
            className="relative w-72 lg:w-[420px] drop-shadow-2xl rounded-[40px]"
          />
          <div className="absolute bottom-0 right-8 bg-[#f7f4f1] rounded-[28px] px-6 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.12)] max-w-[240px]">

  <span className="text-[#ff6a00] uppercase tracking-[0.18em] text-xs font-bold">
    Convivência
  </span>

  <p className="text-[#2b130d] text-1xl font-semibold leading-snug mt-1">
    O centro do nosso diagnóstico
  </p>

</div>

        </div>

      </div>
    </section>
  </>
)
}