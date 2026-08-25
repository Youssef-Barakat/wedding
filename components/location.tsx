import { CalendarPlus, Navigation } from 'lucide-react'

const MAP_URL = 'https://maps.app.goo.gl/5sm39Y39XCJHHPXh8'
const CALENDAR_URL =
  'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Joe+%26+Mai%27s+Wedding&dates=20260918T150000Z/20260918T210000Z&location=Etoile+Garden%2C+King+Mariout%2C+Alexandria&details=Friday%2C+18+September+2026+at+6%3A00+PM+at+Etoile+Garden%2C+King+Mariout%2C+Alexandria.'

export function Location() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-20 text-center sm:py-28">
      <p className="text-xs font-light uppercase tracking-[0.4em] text-accent-foreground">
        Finding us
      </p>
      <h2 className="font-serif text-4xl font-light leading-tight text-balance sm:text-5xl">
        Etoile Garden
      </h2>
      <p className="max-w-md text-pretty text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
        King Mariout, Alexandria. The gates open at half past five — follow the
        lights through the garden and you will find us.
      </p>

      <div className="mt-2 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <a
          href={MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 text-[0.7rem] font-normal uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <Navigation aria-hidden="true" className="size-4" strokeWidth={1.5} />
          Open in maps
        </a>
        <a
          href={CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 border border-accent px-8 py-4 text-[0.7rem] font-normal uppercase tracking-[0.3em] text-accent-foreground transition-colors hover:bg-accent/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <CalendarPlus aria-hidden="true" className="size-4" strokeWidth={1.5} />
          Save the date
        </a>
      </div>
    </section>
  )
}
