import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function AddHabitSheet({ onAdd }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [color, setColor] = useState('#60a5fa')

  const submit = async (e) => {
    e.preventDefault()
    if (!name.trim()) return
    await onAdd({ name, color })
    setName('')
    setOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6">
      <button
        onClick={() => setOpen(true)}
        className="h-14 w-14 rounded-2xl bg-slate-800 text-white shadow-lg border border-white/10 flex items-center justify-center hover:scale-[1.02] active:scale-[0.98] transition-all"
      >
        <Plus className="h-6 w-6" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4">
          <div className="w-full max-w-md rounded-3xl bg-slate-900 border border-white/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-lg font-semibold">New Habit</h3>
              <button className="text-slate-400" onClick={() => setOpen(false)}>Close</button>
            </div>

            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block text-slate-300 text-sm mb-2">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Drink Water"
                  className="w-full rounded-xl bg-slate-800 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm mb-2">Accent Color</label>
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="h-10 w-full rounded-xl bg-slate-800 border border-white/10 p-1"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 text-white py-3 font-medium"
              >
                Add Habit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
