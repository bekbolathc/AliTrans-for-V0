"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavDropdown, type NavGroup } from "@/components/NavDropdown";

const SERVICES = [
  { href: "/zhd-dostavka-iz-kitaya", label: "ЖД из Китая" },
  { href: "/avia-dostavka-iz-kitaya", label: "Авиа из Китая" },
  { href: "/avto-dostavka-iz-kitaya", label: "Авто из Китая" },
  { href: "/konteynernye-perevozki-iz-kitaya", label: "Контейнерные" },
  { href: "/morskaya-dostavka-iz-kitaya", label: "Морская доставка" },
  { href: "/sbornye-gruzy-iz-kitaya", label: "Сборные грузы" },
  { href: "/rastamozhka-gruzov", label: "Растаможка" },
  { href: "/ved-pod-klyuch", label: "ВЭД под ключ" },
];

const DIRECTIONS = [
  { href: "/mezhdunarodnye-gruzoperevozki", label: "🌍 Все направления" },
  { href: "/#services", label: "🇨🇳 Китай → Казахстан" },
  { href: "/dostavka-iz-kitaya-v-almaty", label: "🏙️ Из Китая в Алматы" },
  { href: "/dostavka-iz-kitaya-v-astanu", label: "🏙️ Из Китая в Астану" },
  { href: "/dostavka-iz-korei", label: "🇰🇷 Корея → Казахстан" },
  { href: "/dostavka-iz-turcii", label: "🇹🇷 Турция → Казахстан" },
  { href: "/dostavka-iz-evropy", label: "🇪🇺 Европа → Казахстан" },
  { href: "/gruzoperevozki-iz-kitaya-v-rossiyu", label: "🇷🇺 Китай → Россия" },
];

// Типы грузов сгруппированы по категориям — таксономия под расширение.
// Новые страницы грузов (шины, спецтехника, стройматериалы и т.д.)
// добавляются в свою категорию. Плоский список для мобильного меню
// выводится из категорий автоматически (CARGO_TYPES ниже).
const CARGO_CATEGORIES: NavGroup[] = [
  {
    title: "Потребительские товары",
    items: [
      { href: "/tekstil-i-odezhda", label: "Текстиль и одежда" },
      { href: "/kosmetika-i-krasota", label: "Косметика" },
      { href: "/tovary-dlya-marketpleysov", label: "Для маркетплейсов" },
    ],
  },
  {
    title: "Электроника и IT",
    items: [{ href: "/elektronika-iz-kitaya", label: "Электроника" }],
  },
  {
    title: "Автотовары",
    items: [
      { href: "/avtozapchasti-iz-kitaya", label: "Автозапчасти" },
      { href: "/shiny-iz-kitaya", label: "Шины" },
    ],
  },
  {
    title: "Оборудование и техника",
    items: [
      { href: "/oborudovanie-i-mashiny", label: "Оборудование и машины" },
      { href: "/promyshlennoe-oborudovanie-iz-kitaya", label: "Промышленное оборудование" },
      { href: "/spetstehnika-iz-kitaya", label: "Спецтехника" },
    ],
  },
  {
    title: "Стройка и ремонт",
    items: [{ href: "/stroymaterialy-iz-kitaya", label: "Стройматериалы" }],
  },
  {
    title: "Особые грузы",
    items: [
      { href: "/negabaritnye-gruzy", label: "Негабаритные грузы" },
      { href: "/opasnye-gruzy", label: "Опасные грузы ADR" },
    ],
  },
];

// Плоский список — для мобильного меню (там секции и так сворачиваются).
const CARGO_TYPES = CARGO_CATEGORIES.flatMap((c) => c.items);

const MOBILE_SECTIONS = [
  { id: "uslugi", title: "Услуги", items: SERVICES },
  { id: "napravleniya", title: "Направления", items: DIRECTIONS },
  { id: "gruzy", title: "Типы грузов", items: CARGO_TYPES },
  {
    id: "kompaniya",
    title: "Компания",
    items: [
      { href: "/o-kompanii", label: "О компании" },
      { href: "/keysy", label: "Кейсы" },
      { href: "/otzyvy", label: "Отзывы" },
      { href: "/blog", label: "Блог" },
    ],
  },
];

export function Header() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>("uslugi");

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return () => { document.body.style.overflow = ""; };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  // Страницы без блока #quiz-cta (блог, отзывы, кейсы и т.п.) — ведём на /kontakty,
  // иначе клик по якорю ничего не делает.
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    closeMenu();
    if (isHomepage) return;
    if (!document.getElementById("quiz-cta")) {
      e.preventDefault();
      window.location.href = "/kontakty";
    }
  };

  return (
    <>
      <header className={`header${stuck ? " is-stuck" : ""}`} id="header">
        <div className="container header__row">
          <Link className="logo" href="/" aria-label="Ali Trans Group">
            <Image
              src="/logo.png"
              alt="Ali Trans Group логотип"
              className="logo__image"
              width={180}
              height={100}
              priority
              sizes="(max-width: 768px) 60px, 80px"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="nav" aria-label="Основная навигация">
            <NavDropdown label="Услуги" items={SERVICES} onItemClick={closeMenu} />
            <NavDropdown label="Направления" items={DIRECTIONS} onItemClick={closeMenu} />
            <NavDropdown label="Типы грузов" groups={CARGO_CATEGORIES} onItemClick={closeMenu} />
            <Link href="/o-kompanii" onClick={closeMenu}>О компании</Link>
            <Link href="/blog" onClick={closeMenu}>Блог</Link>
            <Link href="/kontakty" onClick={closeMenu}>Контакты</Link>
          </nav>

          <div className="header__cta">
            <a className="phone" href="tel:+77718000209">
              <span className="phone__label">Алматы</span>
              <span className="phone__num">+7 771 800 02 09</span>
            </a>
            <a className="btn btn--gold" href={isHomepage ? "#quiz" : "#quiz-cta"} onClick={handleCtaClick}>
              Заявка <span aria-hidden="true">→</span>
            </a>
          </div>

          <button
            className="burger"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay — outside <header> to avoid backdrop-filter stacking context */}
      {open && (
        <div className="mobile-nav" role="dialog" aria-label="Навигация">
          <div className="mobile-nav__sections">
            {MOBILE_SECTIONS.map((section) => (
              <div key={section.id} className="mobile-nav__section">
                <button
                  className={`mobile-nav__section-btn${expanded === section.id ? " is-expanded" : ""}`}
                  onClick={() => setExpanded(expanded === section.id ? null : section.id)}
                  aria-expanded={expanded === section.id}
                >
                  {section.title}
                  <span className="mobile-nav__caret" aria-hidden="true">
                    {expanded === section.id ? "▴" : "▾"}
                  </span>
                </button>
                {expanded === section.id && (
                  <div className="mobile-nav__items">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="mobile-nav__item"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link href="/kontakty" className="mobile-nav__direct" onClick={closeMenu}>
              Контакты
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mobile-nav__footer">
            <a
              className="btn btn--gold btn--full"
              href={isHomepage ? "#quiz" : "#quiz-cta"}
              onClick={handleCtaClick}
            >
              Рассчитать стоимость →
            </a>
            <a
              className="mobile-nav__wa"
              href="https://wa.me/77718000209"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
