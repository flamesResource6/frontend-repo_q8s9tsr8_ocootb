import { useMemo } from 'react'
import { Bookmark, Calendar, CheckCircle2, Clock, LayoutDashboard, Medal, TrendingUp, User } from 'lucide-react'

function Card({ children, className = '' }){
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/5 p-5 text-white/90 ${className}`}>
      {children}
    </div>
  )
}

export default function Dashboard(){
  const profile = {
    name: 'Student Name',
    college: 'Tech University',
    branch: 'CSE',
    skills: ['JavaScript', 'SQL', 'C Basics', 'React'],
  }

  const applications = [
    { title: 'Frontend Intern @ NovaLabs', status: 'Applied' },
    { title: 'Data Intern @ PixelData', status: 'Review' },
    { title: 'Automation Intern @ RoboCore', status: 'Accepted' },
  ]

  const saved = [
    'Remote JS Intern @ Orbit',
    'SQL Trainee @ DataNest',
  ]

  const workshops = [
    { title: 'Git & Open Source 101', date: 'Dec 20' },
    { title: 'System Design Basics', date: 'Jan 05' },
  ]

  const progress = useMemo(()=> ({ skills: 70, events: 40, projects: 55 }), [])

  const statusColor = s => s === 'Accepted' ? 'text-emerald-400' : s === 'Review' ? 'text-amber-300' : 'text-cyan-300'

  return (
    <section className="relative pt-24 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0B1020] via-[#0A0F1F] to-black"/>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-2 text-white/60"><LayoutDashboard className="text-cyan-300"/> Student Dashboard</div>
        <div className="grid lg:grid-cols-4 gap-6">
          <Card className="lg:col-span-1">
            <div className="flex items-center gap-4">
              <div className="size-14 rounded-xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 ring-2 ring-white/20"/>
              <div>
                <h3 className="text-white font-semibold">{profile.name}</h3>
                <p className="text-white/60 text-sm">{profile.college} • {profile.branch}</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-white/60 mb-2">Skills</p>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((s,i)=> (
                  <span key={i} className="px-2 py-1 rounded-lg bg-black/30 border border-white/10 text-xs">{s}</span>
                ))}
              </div>
            </div>
          </Card>

          <Card className="lg:col-span-2">
            <div className="flex items-center justify-between">
              <h4 className="text-white font-semibold">Ongoing Applications</h4>
              <Clock className="text-white/50"/>
            </div>
            <div className="mt-4 space-y-3">
              {applications.map((a,i)=> (
                <div key={i} className="flex items-center justify-between rounded-xl bg-black/30 border border-white/10 p-3">
                  <span>{a.title}</span>
                  <span className={`text-sm ${statusColor(a.status)}`}>{a.status}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h4 className="text-white font-semibold">Saved Internships</h4>
            <div className="mt-3 space-y-2">
              {saved.map((s,i)=> (
                <div key={i} className="flex items-center gap-2">
                  <Bookmark className="text-cyan-300"/>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="lg:col-span-3">
            <div className="flex items-center justify-between">
              <h4 className="text-white font-semibold">Upcoming Workshops</h4>
              <Calendar className="text-white/50"/>
            </div>
            <div className="mt-3 grid sm:grid-cols-2 gap-3">
              {workshops.map((w,i)=> (
                <div key={i} className="rounded-xl bg-black/30 border border-white/10 p-3">
                  <p className="font-medium">{w.title}</p>
                  <p className="text-sm text-white/60">{w.date}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h4 className="text-white font-semibold">Certificates</h4>
            <div className="mt-3 text-white/60 text-sm">Add completed bootcamps and issued certificates.</div>
          </Card>

          <Card>
            <h4 className="text-white font-semibold">Progress Tracker</h4>
            <div className="mt-3 space-y-3">
              {[{label:'Skills',v:progress.skills},{label:'Events',v:progress.events},{label:'Projects',v:progress.projects}].map((p,i)=> (
                <div key={i}>
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span>{p.label}</span>
                    <span>{p.v}%</span>
                  </div>
                  <div className="mt-1 h-2 rounded-lg bg-white/10">
                    <div style={{width: `${p.v}%`}} className="h-full rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500"/>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
