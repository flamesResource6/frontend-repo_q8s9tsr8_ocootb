import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 shadow-[0_0_20px_rgba(56,189,248,0.6)]" />
            <span className="text-white font-semibold tracking-wide">InternHub45</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={({isActive}) => `text-sm ${isActive? 'text-cyan-300':'text-white/80 hover:text-white'} transition`}>Home</NavLink>
            <NavLink to="/dashboard" className={({isActive}) => `text-sm ${isActive? 'text-cyan-300':'text-white/80 hover:text-white'} transition`}>Dashboard</NavLink>
            <NavLink to="/team" className={({isActive}) => `text-sm ${isActive? 'text-cyan-300':'text-white/80 hover:text-white'} transition`}>Team</NavLink>
            <NavLink to="/contact" className={({isActive}) => `text-sm ${isActive? 'text-cyan-300':'text-white/80 hover:text-white'} transition`}>Contact</NavLink>
            <Link to="/dashboard" className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white text-sm font-medium shadow-[0_0_30px_rgba(168,85,247,0.35)] hover:scale-[1.02] active:scale-[0.99] transition">Explore Internships</Link>
          </nav>
          <button className="md:hidden text-white" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu">
            {open? <X/>: <Menu/>}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/40 backdrop-blur">
          <div className="px-4 py-4 space-y-3">
            <NavLink onClick={()=>setOpen(false)} to="/" className="block text-white/90">Home</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/dashboard" className="block text-white/90">Dashboard</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/team" className="block text-white/90">Team</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/contact" className="block text-white/90">Contact</NavLink>
            <Link onClick={()=>setOpen(false)} to="/dashboard" className="inline-block mt-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white text-sm font-medium">Explore Internships</Link>
          </div>
        </div>
      )}
    </header>
  )
}
