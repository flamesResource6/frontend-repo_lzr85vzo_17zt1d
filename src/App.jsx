import { useEffect, useMemo, useState } from 'react'
import HeaderBar from './components/HeaderBar'
import HabitCard from './components/HabitCard'
import AddHabitSheet from './components/AddHabitSheet'

function App() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [habits, setHabits] = useState([])
  const [loading, setLoading] = useState(true)

  const loadHabits = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${baseUrl}/habits`)
      const data = await res.json()
      setHabits(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadHabits()
  }, [])

  const addHabit = async (payload) => {
    const res = await fetch(`${baseUrl}/habits`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    if (res.ok) {
      await loadHabits()
    }
  }

  const checkin = async (habitId) => {
    const today = new Date().toISOString().slice(0,10)
    await fetch(`${baseUrl}/habits/${habitId}/checkins`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date: today, value: 1 })
    })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <HeaderBar />

      <main className="mx-auto max-w-2xl px-5 pb-28 pt-6">
        {/* Hero */}
        <div className="mb-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Track better habits</h2>
            <p className="text-slate-300/70 mt-1">A sleek, iOS-style dark experience with soft glass and vibrant accents.</p>
          </div>
        </div>

        {loading ? (
          <div className="text-slate-400">Loading…</div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {habits.length === 0 ? (
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 text-slate-300/80">
                No habits yet. Tap + to add your first habit.
              </div>
            ) : (
              habits.map((h) => (
                <HabitCard key={h.id} habit={h} onCheckin={checkin} />
              ))
            )}
          </div>
        )}
      </main>

      <AddHabitSheet onAdd={addHabit} />
    </div>
  )
}

export default App
