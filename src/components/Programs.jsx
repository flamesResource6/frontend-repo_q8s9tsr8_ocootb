import { BookOpen, Code2, MonitorSmartphone, Briefcase } from 'lucide-react'

export default function Programs(){
  const items = [
    {icon: Briefcase, title: 'Paid Internships', desc: 'High-quality, verified roles across startups and enterprises.'},
    {icon: MonitorSmartphone, title: 'Remote Internships', desc: 'Work from anywhere with real teams and mentors.'},
    {icon: Code2, title: 'Technical Training', desc: 'Hands-on curriculum aligned to industry expectations.'},
    {icon: BookOpen, title: 'Bootcamps', desc: 'JavaScript, SQL, C Programming basics, and more.'},
  ]
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-semibold text-white mb-8 text-center">Programs & Internship Categories</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i)=> (
            <div key={i} className="group rounded-2xl bg-white/5 border border-white/10 p-6 text-white/90 hover:bg-white/[0.07] transition relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-cyan-500/10 blur-2xl group-hover:bg-fuchsia-500/10 transition"/>
              <it.icon className="text-cyan-300"/>
              <p className="mt-3 font-semibold text-white">{it.title}</p>
              <p className="text-sm text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
