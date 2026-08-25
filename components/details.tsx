import Image from 'next/image'
import { CalendarDays, Clock, MapPin } from 'lucide-react'

const items = [
  {
    icon: CalendarDays,
    label: 'The day',
    value: 'Friday, 18 September 2026',
  },
  {
    icon: Clock,
    label: 'The hour',
    value: '6:00 in the evening',
  },
  {
    icon: MapPin,
    label: 'The place',
    value: 'Etoile Garden, King Mariout, Alexandria',
  },
]

export function Details() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-28">
      <div className="relative mx-auto w-full max-w-md">
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-x-3 translate-y-3 border border-accent/60 sm:translate-x-5 sm:translate-y-5"
        />
        <Image
          src="/images/joe-mai-sofa.jpeg"
          alt="Joe and Mai sitting together, smiling at each other"
          width={855}
          height={1282}
          sizes="(min-width: 768px) 28rem, 90vw"
          className="relative h-auto w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-light uppercase tracking-[0.4em] text-accent-foreground">
            The invitation
          </p>
          <h2 className="font-serif text-4xl font-light leading-tight text-balance sm:text-5xl">
            We are getting married, and we would love you there.
          </h2>
          <p className="max-w-prose text-pretty text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
            After the vows there will be dinner under the trees, music, and far
            too much dancing. Come as you are — just come.
          </p>
        </div>

        <dl className="flex flex-col divide-y divide-border border-y border-border">
          {items.map((item) => (
            <div key={item.label} className="flex items-start gap-4 py-5">
              <item.icon
                aria-hidden="true"
                className="mt-1 size-5 shrink-0 text-primary"
                strokeWidth={1.25}
              />
              <div className="flex flex-col gap-1">
                <dt className="text-[0.65rem] font-light uppercase tracking-[0.3em] text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="font-serif text-xl font-normal leading-snug sm:text-2xl">
                  {item.value}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
