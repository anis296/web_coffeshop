type PageHeroProps = { eyebrow: string; title: string; description: string };

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-muted/50">
      <div className="page-hero-glow" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 py-14 sm:py-20 lg:px-8 lg:py-28">
        <p className="animate-gentle-rise text-xs font-semibold uppercase text-primary">{eyebrow}</p>
        <h1 className="animate-gentle-rise animation-delay-100 mt-5 max-w-4xl overflow-wrap-anywhere font-display text-4xl leading-tight sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="animate-gentle-rise animation-delay-200 mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-7 sm:text-lg sm:leading-8">{description}</p>
      </div>
    </section>
  );
}