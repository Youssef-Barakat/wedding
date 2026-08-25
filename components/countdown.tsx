'use client'

import { useEffect, useState } from 'react'

// Friday, 18 September 2026, 6:00 PM — Egypt (UTC+3 during summer time)
const TARGET = new Date('2026-09-18T18:00:00+03:00').getTime()

function diff() {
  const ms = Math.max(TARGET - Date.now(), 0)
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  }
}

export function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof diff> | null>(null)

  useEffect(() => {
    setTime(diff())
    const id = setInterval(() => setTime(diff()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'Days', value: time?.days },
    { label: 'Hours', value: time?.hours },
    { label: 'Minutes', value: time?.minutes },
    { label: 'Seconds', value: time?.seconds },
  ]

  return (
    <section className="bg-primary py-14 text-primary-foreground sm:py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6">
        <p className="text-xs font-light uppercase tracking-[0.4em] text-primary-foreground/75">
          Counting the days
        </p>
        <dl className="grid w-full max-w-xl grid-cols-4 gap-2 sm:gap-6">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="flex flex-col items-center gap-2 border-l border-primary-foreground/20 first:border-l-0 sm:gap-3"
            >
              <dd
                className="font-serif text-4xl font-light tabular-nums sm:text-6xl"
                suppressHydrationWarning
              >
                {unit.value === undefined
                  ? '—'
                  : String(unit.value).padStart(2, '0')}
              </dd>
              <dt className="text-[0.6rem] font-light uppercase tracking-[0.25em] text-primary-foreground/70 sm:text-xs">
                {unit.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
