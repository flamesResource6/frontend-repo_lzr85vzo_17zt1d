import { Calendar, Settings } from 'lucide-react'

export default function HeaderBar() {
  return (
    <div className="sticky top-0 z-10 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-2xl px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-b from-blue-500/40 to-blue-500/20 border border-white/20 flex items-center justify-center">
            <Calendar className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-xs text-slate-400">Today</p>
            <h1 className="text-white font-semibold leading-tight tracking-tight">Habits</h1>
          </div>
        </div>

        <button className="h-9 w-9 rounded-xl border border-white/10 bg-slate-800/60 text-slate-200 flex items-center justify-center">
          <Settings className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
