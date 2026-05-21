"use client";

import { useEffect, useState } from "react";

export function Header() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${stuck ? " is-stuck" : ""}`} id="header">
      <div className="container header__row">
        <a className="logo" href="#" aria-label="Ali Trans Group">
          <span className="logo__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path
                d="M5 5 H27 V9 L19 16 L27 23 V27 H5 V23 L13 16 L5 9 Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <circle cx="16" cy="16" r="1.5" fill="currentColor" />
            </svg>
          </span>
          <span className="logo__text">
            <strong>Ali Trans</strong>
            <span className="logo__sub">Group · AXG</span>
          </span>
        </a>

        <nav className="nav" aria-label="Основная навигация" style={open ? mobileNavStyle : undefined}>
          <a href="#services" onClick={() => setOpen(false)}>Услуги</a>
          <a href="#pricing" onClick={() => setOpen(false)}>Цены</a>
          <a href="#about" onClick={() => setOpen(false)}>О компании</a>
          <a href="#cases" onClick={() => setOpen(false)}>Кейсы</a>
          <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
          <a href="#contacts" onClick={() => setOpen(false)}>Контакты</a>
        </nav>

        <div className="header__cta">
          <a className="phone" href="tel:+77718000209">
            <span className="phone__label">Алматы</span>
            <span className="phone__num">+7 771 800 02 09</span>
          </a>
          <a className="btn btn--gold" href="#quiz">
            Заявка <span aria-hidden="true">→</span>
          </a>
        </div>

        <button className="burger" aria-label="Меню" onClick={() => setOpen(!open)}>
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
