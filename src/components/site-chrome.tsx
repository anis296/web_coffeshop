import { Link } from "@tanstack/react-router";
import { Coffee, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { to: "/about" as const, label: "О нас" },
  { to: "/addresses" as const, label: "Наши адреса" },
  { to: "/news" as const, label: "Новости" },
  { to: "/offers" as const, label: "Акции" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="На главную">
          <span className="grid size-9 place-items-center rounded-full bg-secondary text-secondary-foreground"><Coffee size={18} /></span>
          <span className="font-display text-base sm:text-lg">С теплом и Уютом</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Основная навигация">
          {links.map((link) => <Link key={link.to} to={link.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>{link.label}</Link>)}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild><Button variant="ghost" size="icon" aria-label="Открыть меню"><Menu /></Button></SheetTrigger>
            <SheetContent className="bg-background">
              <SheetTitle className="font-display text-left text-2xl">С теплом и Уютом</SheetTitle>
              <nav className="mt-12 flex flex-col gap-6">
                {links.map((link) => <SheetClose asChild key={link.to}><Link to={link.to} className="font-display text-3xl">{link.label}</Link></SheetClose>)}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-fir text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div><p className="font-display text-2xl">С теплом и Уютом</p><p className="mt-3 max-w-sm text-sm opacity-70">Кофе, который превращает зимний день в маленький праздник.</p></div>
        <div><p className="text-xs font-semibold uppercase opacity-50">Разделы</p><div className="mt-4 flex flex-col gap-2 text-sm">{links.map((link) => <Link key={link.to} to={link.to} className="opacity-75 hover:opacity-100">{link.label}</Link>)}</div></div>
        <div><p className="text-xs font-semibold uppercase opacity-50">Мы открыты</p><p className="mt-4 text-sm opacity-75">Ежедневно, 08:00–22:00</p><p className="mt-2 text-sm opacity-75">+7 (000) 000-00-00</p></div>
      </div>
      <div className="border-t border-secondary-foreground/10 px-5 py-5 text-center text-xs opacity-50">© 2026 «С теплом и Уютом»</div>
    </footer>
  );
}