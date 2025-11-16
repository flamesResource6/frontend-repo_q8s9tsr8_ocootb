import { CheckCircle, ShieldCheck, Users, GraduationCap, Briefcase, Laptop, Rocket } from 'lucide-react'

export function About(){
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/2 to-transparent pointer-events-none"/>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl p-1 bg-gradient-to-br from-cyan-500/40 via-fuchsia-500/40 to-indigo-500/40">
            <div className="rounded-2xl bg-[#0C1224]/80 border border-white/10 p-8">
              <h3 className="text-2xl font-semibold text-white mb-3">About InternHub45</h3>
              <p className="text-white/70 leading-relaxed">
                Built for ambitious learners who feel lost in the tech jungle. We simplify your path
to real-world experience with verified internships, hands-on training, and a community that
believes in your potential.
              </p>
              <ul className="mt-6 space-y-3 text-white/80">
                <li className="flex items-center gap-3"><CheckCircle className="text-cyan-400"/> Participation at NIT Rourkela Innovision</li>
                <li className="flex items-center gap-3"><CheckCircle className="text-cyan-400"/> Robotics representation at Silicon</li>
                <li className="flex items-center gap-3"><CheckCircle className="text-cyan-400"/> Multiple bootcamps completed</li>
              </ul>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {icon: Briefcase, title: 'Paid Internships'},
              {icon: Laptop, title: 'Remote Internships'},
              {icon: Rocket, title: 'Technical Training'},
              {icon: GraduationCap, title: 'Bootcamps & Workshops'},
            ].map((it, i)=> (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] hover:shadow-[0_0_40px_rgba(56,189,248,0.2)] transition">
                <it.icon className="text-cyan-300"/>
                <p className="mt-3 font-medium">{it.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhyUs(){
  const items = [
    {icon: ShieldCheck, title: 'Verified opportunities'},
    {icon: Rocket, title: 'Skill-oriented guidance'},
    {icon: Users, title: 'Career mentorship'},
    {icon: GraduationCap, title: 'Community support'},
  ]
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-2xl font-semibold text-white mb-10">Why Choose Us</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it,i)=> (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 hover:bg-white/[0.07] transition">
              <it.icon className="text-cyan-300"/>
              <p className="mt-3 font-medium">{it.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
