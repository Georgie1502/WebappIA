import NavLogo from '../molecules/NavLogo'

const links = ['Privacy Protocol', 'Temporal Terms', 'Quantum Safety']

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/8 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 text-center">
        <NavLogo />

        <nav className="flex flex-wrap justify-center gap-6">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="font-grotesk text-xs text-on-muted hover:text-gold transition-colors tracking-wider uppercase"
            >
              {l}
            </a>
          ))}
        </nav>

        <p className="font-grotesk text-[10px] text-on-muted tracking-widest">
          © 2124 TimeTravel Agency. All dimensions reserved.
        </p>
      </div>
    </footer>
  )
}
