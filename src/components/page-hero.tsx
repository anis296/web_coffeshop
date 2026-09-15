type PageHeroProps = { eyebrow: string; title: string; description: string };

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="text-xs font-semibold uppercase text-primary">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p>
      </div>
    </section>
  );
}