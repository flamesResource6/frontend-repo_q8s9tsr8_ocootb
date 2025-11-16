import { Mail, Linkedin, Twitter } from 'lucide-react'

function Member({ name, role, img, bio, email, linkedin, twitter }){
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 hover:shadow-[0_0_50px_rgba(168,85,247,0.2)] transition">
      <div className="flex items-center gap-4">
        <img src={img} alt={name} className="w-16 h-16 rounded-xl object-cover ring-1 ring-white/20"/>
        <div>
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-white/60 text-sm">{role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-white/70 leading-relaxed">{bio}</p>
      <div className="mt-4 flex items-center gap-3">
        {email && <a href={`mailto:${email}`} className="p-2 rounded-lg bg-white/10 border border-white/10 hover:bg-white/15"><Mail className="size-4"/></a>}
        {linkedin && <a href={linkedin} target="_blank" className="p-2 rounded-lg bg-white/10 border border-white/10 hover:bg-white/15" rel="noreferrer"><Linkedin className="size-4"/></a>}
        {twitter && <a href={twitter} target="_blank" className="p-2 rounded-lg bg-white/10 border border-white/10 hover:bg-white/15" rel="noreferrer"><Twitter className="size-4"/></a>}
      </div>
    </div>
  )
}

export default function Team(){
  return (
    <section className="relative pt-28 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-transparent via-white/[0.03] to-transparent"/>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Leadership</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Member
            name="Binayak"
            role="Founder & Vision Lead"
            img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop"
            bio="Driving InternHub45 with a mission to empower learners through verified opportunities and a supportive tech community."
            email="binayak@internhub45.com"
            linkedin="#"
            twitter="#"
          />
          <Member
            name="CRO"
            role="Chief Relations Officer"
            img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
            bio="Building partnerships, unlocking collaborations, and bringing impactful programs to our community."
            email="cro@internhub45.com"
            linkedin="#"
            twitter="#"
          />
        </div>
      </div>
    </section>
  )
}
