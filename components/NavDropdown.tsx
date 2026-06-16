"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const SERVICE_ITEMS = [
  { href: "/avia-dostavka-iz-kitaya", label: "Авиа доставка" },
  { href: "/zhd-dostavka-iz-kitaya", label: "ЖД доставка" },
  { href: "/avto-dostavka-iz-kitaya", label: "Авто доставка" },
  { href: "/sbornye-gruzy-iz-kitaya", label: "Сборные грузы" },
  { href: "/rastamozhka-gruzov", label: "Растаможка" },
  { href: "/ved-pod-klyuch", label: "ВЭД под ключ" },
];

export function NavDropdown({ onItemClick }: { onItemClick?: () => void }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Закрытие по клику снаружи и Escape — используем click, не mousedown,
  // чтобы trigger.onClick успел переключить open до закрытия.
  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div
      className={`nav-dropdown${open ? " is-open" : ""}`}
      ref={containerRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="nav-dropdown__trigger"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Раскрыть список услуг"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
      >
        Услуги
        <span aria-hidden="true" className="nav-dropdown__caret">
          ▾
        </span>
      </button>

      {/* Меню всегда в DOM — управляем через CSS-класс is-open. */}
      <div className="nav-dropdown__menu" role="menu">
        {SERVICE_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-dropdown__item"
            role="menuitem"
            tabIndex={open ? 0 : -1}
            onClick={() => {
              setOpen(false);
              onItemClick?.();
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
