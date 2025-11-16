import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="relative border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 text-white/80">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500" />
              <span className="text-white font-semibold">InternHub45</span>
            </div>
            <p className="text-sm text-white/60">Powering Future Innovators.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
              <li><Link to="/team" className="hover:text-white">Team</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>Paid Internships</li>
              <li>Remote Internships</li>
              <li>Training</li>
              <li>Bootcamps</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <p className="text-sm">Email: hello@internhub45.com</p>
            <div className="mt-3 flex items-center gap-3 text-white/70">
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/15"><Twitter className="size-4"/></a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/15"><Linkedin className="size-4"/></a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/15"><Instagram className="size-4"/></a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/15"><Facebook className="size-4"/></a>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-white/50 text-sm">© {new Date().getFullYear()} InternHub45</div>
      </div>
    </footer>
  )
}
