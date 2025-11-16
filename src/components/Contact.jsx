import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact(){
  return (
    <section className="relative pt-28 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-transparent via-white/[0.03] to-transparent"/>
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <form className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 space-y-4">
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Your name"/>
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="you@example.com"/>
            </div>
            <div>
              <label className="text-sm text-white/70">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="How can we help?"/>
            </div>
            <button type="button" className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-medium">Send Message</button>
          </form>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 space-y-4">
            <div className="flex items-center gap-3"><Mail className="text-cyan-300"/> hello@internhub45.com</div>
            <div className="flex items-center gap-3"><Phone className="text-cyan-300"/> +91 90000 00000</div>
            <div className="flex items-start gap-3"><MapPin className="text-cyan-300 mt-1"/> Virtual-first, IST timezone. Mon–Fri, 10am–6pm.</div>
            <div className="rounded-xl overflow-hidden h-48 bg-black/30 border border-white/10 flex items-center justify-center text-white/50 text-sm">Interactive map</div>
          </div>
        </div>
      </div>
    </section>
  )
}
