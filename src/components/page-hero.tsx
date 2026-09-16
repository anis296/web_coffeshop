type PageHeroProps = { eyebrow: string; title: string; description: string; image?: string; imageAlt?: string };

export function PageHero({ eyebrow, title, description, image, imageAlt = "Атмосфера кофейни" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-muted/50">
      <div className="page-hero-glow" aria-hidden="true" />
      <div className={`relative mx-auto max-w-7xl px-5 py-14 sm:py-20 lg:px-8 ${image ? "lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,.85fr)] lg:items-center lg:gap-14 lg:py-20" : "lg:py-28"}`}>
        <div>
          <p className="animate-gentle-rise text-xs font-semibold uppercase text-primary">{eyebrow}</p>
          <h1 className="animate-gentle-rise animation-delay-100 mt-5 max-w-4xl overflow-wrap-anywhere font-display text-4xl leading-tight sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="animate-gentle-rise animation-delay-200 mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-7 sm:text-lg sm:leading-8">{description}</p>
        </div>
        {image && <div className="animate-gentle-rise animation-delay-200 mt-10 overflow-hidden lg:mt-0"><img src={image} alt={imageAlt} width={912} height={1104} className="aspect-[5/4] w-full object-cover transition-transform duration-700 hover:scale-[1.03] lg:aspect-[4/5]" /></div>}
      </div>
    </section>
  );
}