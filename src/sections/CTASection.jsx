import { Mail, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section 
      id="contato"
      className="bg-[#f8f1ea] py-28">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-[#2b130d] text-5xl md:text-7xl font-black leading-[1.05] tracking-tight max-w-4xl mx-auto">
          Vamos sentir o pulso da sua escola?
        </h2>

        <p className="text-[#6f5b53] text-xl leading-relaxed mt-10 max-w-3xl mx-auto">
          Conte um pouco do contexto e marcamos uma conversa de 30 minutos com a gestão.
          Sem compromisso. Só escuta e clareza sobre o próximo passo.
        </p>

        <div className="mt-14 flex justify-center">
  <a
    href="https://wa.me/5511941768637?text=Olá,%20quero%20conhecer%20a%20Pulso%20Educa"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center bg-[#ff6a00] hover:bg-[#ff7d26] transition-all text-white h-16 px-20 rounded-full font-black text-xl shadow-[0_15px_40px_rgba(255,106,0,0.25)] hover:scale-[1.02]"
  >
    Agendar conversa   
  </a>
</div>

 

      </div>
    </section>
  )
}