import {
  ShieldCheck,
  Map,
  BarChart3,
  Brain,
} from "lucide-react"
import { motion } from "framer-motion"

export function Benefits() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Prevenção inteligente",
      description:
        "Identifique riscos antes que se agravem e tome decisões mais assertivas.",
    },

    {
      icon: Map,
      title: "Mapeamento escolar",
      description:
        "Visualize indicadores e padrões através de mapas e dados estratégicos.",
    },

    {
      icon: BarChart3,
      title: "Indicadores em tempo real",
      description:
        "Acompanhe informações importantes para apoiar ações preventivas.",
    },

    {
      icon: Brain,
      title: "Tomada de decisão",
      description:
        "Transforme dados em ações concretas dentro do ambiente escolar.",
    },
  ]

  return (
    <section 
    id="benefits"
    className="bg-[#f5e4d3] text-[#2b130d] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <span className="text-orange-500 uppercase tracking-[0.3em] text-sm font-bold">
            Benefícios
          </span>

          <h2 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mt-6">
  Inteligência preventiva para escolas
</h2>

          <p className="text-[#6f5b53] text-xl mt-10 leading-relaxed">
            Dados, prevenção e indicadores para apoiar decisões mais estratégicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-7 mt-20">

          {items.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
  key={index}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  viewport={{ once: true }}
  className="bg-white border border-[#e5d7ca] rounded-[30px] p-7 md:p-8 grid md:grid-cols-[64px_170px_1fr] gap-6 items-center min-h-[150px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:border-[#ff6a00]/40 hover:shadow-[0_15px_40px_rgba(255,106,0,0.08)] transition-all"
>
  <div className="w-14 h-14 rounded-2xl bg-[#ff6a00]/15 flex items-center justify-center">
    <Icon className="text-[#ff6a00]" size={28} />
  </div>

  <h3 className="text-2xl font-extrabold leading-tight">
    {item.title}
  </h3>

  <p className="text-[#d2b8ae] text-lg leading-relaxed">
    {item.description}
  </p>
</motion.div>
            )
          })}

        </div>
      </div>
    </section>
  )
}