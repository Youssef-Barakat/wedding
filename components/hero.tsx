import Image from 'next/image'

export function Hero() {
  return (
    <header className="relative isolate flex min-h-svh flex-col items-center justify-end overflow-hidden">
      <Image
        src="/images/joe-mai-walking.jpeg"
        alt="Joe and Mai walking hand in hand, smiling"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[50%_30%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-foreground/50 via-foreground/25 to-foreground/85"
      />

      <div className="flex w-full max-w-3xl flex-col items-center gap-6 px-6 pb-16 text-center text-primary-foreground sm:pb-24">
        <p className="animate-rise text-xs font-light uppercase tracking-[0.5em] text-shadow-soft sm:text-sm">
          Together with our families
        </p>

        <h1 className="animate-rise font-serif text-6xl font-light leading-[0.95] text-balance text-shadow-soft [animation-delay:150ms] sm:text-8xl">
          Joe
          <span className="mx-3 align-middle text-4xl font-light italic sm:mx-5 sm:text-5xl">
            &amp;
          </span>
          Mai
        </h1>

        <div className="animate-rise flex items-center gap-4 text-shadow-soft [animation-delay:300ms]">
          <span className="h-px w-10 bg-primary-foreground/60 sm:w-16" />
          <p className="text-sm font-light uppercase tracking-[0.35em] sm:text-base">
            18 . 09 . 2026
          </p>
          <span className="h-px w-10 bg-primary-foreground/60 sm:w-16" />
        </div>

        <p className="animate-rise max-w-md text-pretty text-sm font-light leading-relaxed text-primary-foreground/85 text-shadow-soft [animation-delay:450ms]">
          Etoile Garden — King Mariout, Alexandria
        </p>
      </div>
    </header>
  )
}
