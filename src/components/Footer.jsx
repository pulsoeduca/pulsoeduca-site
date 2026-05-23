import logoCompleto from "@/assets/logo-completo.png"

export function Footer() {
  return (
    <footer
       id="contato"
      className="bg-[#2b0d05] text-white py-28"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <img
          src={logoCompleto}
          alt="Pulso Educa"
          className="w-[220px] mx-auto"
        />

        <p className="text-white/70 text-xl leading-relaxed mt-10 max-w-3xl mx-auto">
          Inteligência preventiva para escolas que desejam
          ambientes mais seguros, saudáveis e preparados para
          os desafios contemporâneos.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10 mt-14">

          <a
            href="https://wa.me/5511941768637"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#ff6a00] transition-colors font-semibold"
          >
            WhatsApp
          </a>

          <a
            href="mailto:pulsoeduca@gmail.com"
            className="hover:text-[#ff6a00] transition-colors font-semibold"
          >
            pulsoeduca@gmail.com
          </a>

        </div>

        <div className="w-full h-px bg-white/10 mt-16"></div>

        <p className="text-white/40 text-sm mt-10 tracking-wide">
          © 2026 Pulso Educa. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  )
}