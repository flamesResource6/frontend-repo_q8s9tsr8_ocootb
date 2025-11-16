import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0B1020] via-[#0A0F1F] to-black"/>

      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[conic-gradient(at_top_left,_#06b6d4_20%,#8b5cf6_40%,#22d3ee_60%,#a78bfa_80%,#06b6d4_100%)] opacity-20 blur-3xl rounded-full pointer-events-none"/>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 mb-6">
              <span className="inline-block size-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Futuristic Internship Platform
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              InternHub45 — Powering Future Innovators
            </h1>
            <p className="mt-5 text-white/70 text-lg max-w-xl">
              Kickstart your tech journey with real industry-ready opportunities.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link to="/dashboard" className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-medium shadow-[0_0_35px_rgba(34,211,238,0.35)] hover:translate-y-[-1px] active:translate-y-[0px] transition inline-flex items-center gap-2">
                Explore Internships
                <ArrowRight className="size-4"/>
              </Link>
              <Link to="/contact" className="px-5 py-3 rounded-xl bg-white/10 text-white/90 border border-white/15 hover:bg-white/15 transition">
                Join Community
              </Link>
            </div>
          </div>
          <div className="relative h-[420px] lg:h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"/>
          </div>
        </div>
      </div>
    </section>
  )
}
