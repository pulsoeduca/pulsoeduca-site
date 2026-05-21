import logo from "@/assets/logo-menino.png"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
    const [open, setOpen] = useState(false)
  return (
<header className="fixed top-0 left-0 w-full border-b border-[#e8ddd2] bg-[#f5efe8]/80 backdrop-blur-xl z-50">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

     <div className="flex items-center gap-3">
  <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
    <img
      src={logo}
      alt="Pulso Educa"
      className="w-full h-full object-cover"
    />
  </div>

  <span className="text-[#2b130d] font-extrabold tracking-tight text-xl">
    Pulso{" "}
    <span className="text-[#ff6a00]">
      Educa
    </span>{" "}
  </span>
</div>

      <nav className="hidden md:flex gap-8 text-[#6f5b53] font-medium">

  <a
    href="#inicio"
    className="hover:text-[#ff6a00] transition-colors"
  >
    Início
  </a>

  <a
    href="#metodologia"
    className="hover:text-[#ff6a00] transition-colors"
  >
    Metodologia
  </a>

  <a
    href="#selo"
    className="hover:text-[#ff6a00] transition-colors"
  >
    Selo
  </a>

  <a
    href="#contato"
    className="hover:text-[#ff6a00] transition-colors"
  >
    Contato
  </a>

</nav>

     <a
  href="https://wa.me/5511941768637?text=Olá,%20quero%20conhecer%20a%20Pulso%20Educa"
  target="_blank"
  rel="noreferrer"
  className="hidden md:block bg-[#ff6a00] hover:bg-[#ff7d26] transition-colors text-white px-4 py-2 rounded-full text-sm font-semibold tracking-tight"
>
  Agendar Diagnóstico
</a>

      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>

    {open && (
      <div className="md:hidden border-t border-zinc-800 bg-black px-6 py-6 flex flex-col gap-6 text-zinc-300">

        <a href="#inicio" onClick={() => setOpen(false)}>
          Início
        </a>
        
        <a href="#metodologia" onClick={() => setOpen(false)}>
          Metodologia
        </a>

        <a href="#selo" onClick={() => setOpen(false)}>
  Selo
</a>

       
        <a href="#contato" onClick={() => setOpen(false)}>
          Contato
        </a>

        <a
  href="https://wa.me/5511941768637?text=Olá,%20quero%20conhecer%20a%20Pulso%20Educa"
  target="_blank"
  rel="noreferrer"
  className="bg-orange-500 text-white py-3 rounded-xl font-medium text-center"
>
  Agendar diagnóstico
</a>

      </div>
    )}
  </header>
)
}