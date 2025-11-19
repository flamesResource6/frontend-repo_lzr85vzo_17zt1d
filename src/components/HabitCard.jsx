import { useState } from 'react'
import { Check, Flame, Plus, Settings } from 'lucide-react'

export default function HabitCard({ habit, onCheckin }) {
  const [loading, setLoading] = useState(false)
  const handleCheck = async () => {
    if (loading) return
    setLoading(true)
    await onCheckin(habit.id)
    setLoading(false)
  }

  return (
    <button
      onClick={handleCheck}
      className="relative w-full overflow-hidden rounded-2xl p-5 text-left transition-all bg-slate-800/60 hover:bg-slate-800 border border-white/10 shadow-[inset_0_-40px_80px_rgba(255,255,255,0.03)]"
      style={{
        WebkitTapHighlightColor: 'transparent'
      }}
    >
      <div className="flex items-center gap-4">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-xl" style={{background: `linear-gradient(180deg, ${habit.color}44, ${habit.color}22)`}}>
          <Flame className="h-6 w-6" style={{color: habit.color}} />
          <div className="absolute inset-0 rounded-xl ring-1 ring-white/10"/>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="text-white text-lg font-medium tracking-tight">{habit.name}</p>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full" style={{backgroundColor: habit.color}}/>
            </div>
          </div>
          <p className="text-slate-300/70 text-sm">Goal: {habit.goal}/day</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-300/70 text-sm">
          <Check className="h-4 w-4" /> Tap to check in
        </div>
        <div className="text-slate-200/80 text-xs">iOS-style glass with soft glow</div>
      </div>
      <div className="absolute inset-0 pointer-events-none" style={{boxShadow: `inset 0 1px 0 0 rgba(255,255,255,0.08), 0 10px 30px -10px ${habit.color}55`}}/>
    </button>
  )
}
