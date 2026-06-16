"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavDropdown } from "@/components/NavDropdown";

export function Header() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
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

        <nav className="nav" aria-label="Основная навигация" style={open ? mobileNavStyle : undefined}>
          <NavDropdown onItemClick={closeMenu} />
          <Link href="/keysy" onClick={closeMenu}>
            Кейсы
          </Link>
          <Link href="/o-kompanii" onClick={closeMenu}>
            О компании
          </Link>
          <Link href="/kontakty" onClick={closeMenu}>
            Контакты
          </Link>
        </nav>

        <div className="header__cta">
          <a className="phone" href="tel:+77718000209">
            <span className="phone__label">Алматы</span>
            <span className="phone__num">+7 771 800 02 09</span>
          </a>
          <a className="btn btn--gold" href={isHomepage ? "#quiz" : "#quiz-cta"}>
            Заявка <span aria-hidden="true">→</span>
          </a>
        </div>

        <button
          className="burger"
          aria-label="Меню"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

const mobileNavStyle: React.CSSProperties = {
  display: "flex",
  position: "fixed",
  inset: "64px 0 0 0",
  background: "rgba(11,27,58,0.96)",
  backdropFilter: "blur(10px)",
  flexDirection: "column",
  padding: "32px",
  fontSize: "20px",
  gap: "20px",
  zIndex: 99,
};
