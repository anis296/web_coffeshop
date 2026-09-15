import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/coffee-winter-hero.jpg";
import drinksImage from "@/assets/seasonal-drinks.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "С теплом и Уютом — зимняя кофейня" },
    { name: "description", content: "Авторский кофе, зимнее меню и место, где всегда тепло." },
    { property: "og:title", content: "С теплом и Уютом — зимняя кофейня" },
    { property: "og:description", content: "Авторский кофе, зимнее меню и место, где всегда тепло." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <>
    <section className="relative min-h-[calc(100svh-4.5rem)] overflow-hidden bg-fir">
      <img src={heroImage} alt="Чашка горячего кофе у заснеженного окна кофейни" width={1600} height={1200} className="absolute inset-0 h-full w-full object-cover opacity-75" />
      <div className="absolute inset-0 bg-gradient-to-r from-fir/95 via-fir/55 to-transparent" />
      <div className="snow" aria-hidden="true">{Array.from({ length: 18 }).map((_, i) => <i key={i} />)}</div>
      <div className="relative mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-7xl items-end px-5 pb-16 pt-28 lg:px-8 lg:pb-20">
        <div className="max-w-3xl animate-gentle-rise text-secondary-foreground">
          <p className="text-xs font-semibold uppercase opacity-75">Кофейня • зимний сезон</p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-7xl lg:text-8xl">С теплом<br />и Уютом</h1>
          <p className="mt-6 max-w-xl text-base leading-7 opacity-80 sm:text-lg">Место, где мороз остаётся за дверью, а внутри пахнет свежей выпечкой, хвоей и только что смолотым кофе.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Button asChild variant="warm" size="roomy"><Link to="/offers">Зимнее меню <ArrowRight /></Link></Button><Button asChild variant="winter" size="roomy"><Link to="/addresses"><MapPin /> Найти кофейню</Link></Button></div>
        </div>
      </div>
    </section>
    <section className="bg-background"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
      <div><p className="text-xs font-semibold uppercase text-primary">Наш характер</p><h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">Тишина снега.<br />Тепло в каждой чашке.</h2></div>
      <div className="self-end"><p className="max-w-xl text-lg leading-8 text-muted-foreground">Мы варим знакомую классику и придумываем сезонные сочетания. Выбираем зерно небольших обжарок, печём сами и помним любимый заказ постоянных гостей.</p><Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">Наша история <ArrowRight size={16} /></Link></div>
    </div></section>
    <section className="bg-wine text-accent-foreground"><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-20">
      <img src={drinksImage} alt="Три сезонных зимних напитка" loading="lazy" width={1408} height={1008} className="aspect-[7/5] w-full object-cover" />
      <div><p className="text-xs font-semibold uppercase opacity-65">Только этой зимой</p><h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">Клюква, апельсин<br />и пряный шоколад</h2><p className="mt-6 max-w-lg leading-7 opacity-75">Попробуйте три напитка сезона — каждый создан для долгих разговоров и медленных снежных вечеров.</p><Button asChild variant="warm" size="roomy" className="mt-8"><Link to="/offers">Смотреть акции <ArrowRight /></Link></Button></div>
    </div></section>
    <section className="bg-background"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="flex items-end justify-between"><div><p className="text-xs font-semibold uppercase text-primary">Свежие истории</p><h2 className="mt-4 font-display text-4xl">Новости кофейни</h2></div><Link to="/news" className="hidden items-center gap-2 text-sm font-semibold sm:flex">Все новости <ArrowRight size={16}/></Link></div><div className="mt-10 grid gap-px bg-border md:grid-cols-3">{["Новое зерно из Эфиопии","Вечера винила по пятницам","Зимняя выпечка уже на витрине"].map((title,i)=><article key={title} className="bg-background p-7"><p className="text-xs text-muted-foreground">{["12 февраля","7 февраля","29 января"][i]}</p><h3 className="mt-5 font-display text-2xl leading-snug">{title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">Загляните к нам за новыми вкусами и тихими зимними вечерами.</p></article>)}</div></div></section>
  </>;
}
