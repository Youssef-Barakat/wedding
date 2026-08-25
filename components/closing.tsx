export function Closing() {
  return (
    <footer className="border-t border-border bg-secondary/60 py-20 sm:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 px-6 text-center">
        <p className="font-serif text-2xl font-light italic leading-relaxed text-pretty sm:text-3xl">
          {'“If this invitation reached you, it is because our day would feel unfinished without you in it.”'}
        </p>
        <p className="max-w-md text-pretty text-sm font-light leading-relaxed text-muted-foreground">
          We are not asking for gifts — only for your presence, your voice in the
          crowd, and your feet on the dance floor.
        </p>
        <div className="flex items-center gap-4">
          <span aria-hidden="true" className="h-px w-10 bg-accent" />
          <p className="font-serif text-lg font-light tracking-[0.2em]">
            Joe &amp; Mai
          </p>
          <span aria-hidden="true" className="h-px w-10 bg-accent" />
        </div>
      </div>
    </footer>
  )
}
