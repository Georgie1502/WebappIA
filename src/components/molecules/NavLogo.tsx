import { Link } from 'react-router-dom'

export default function NavLogo() {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <img
        src="/photos/logo.png"
        alt="TimeTravel Logo"
        className="h-10 w-10 object-contain"
      />
      <span className="font-playfair text-sm font-bold tracking-widest text-on-surface uppercase">
        TimeTravel Agency
      </span>
    </Link>
  )
}
