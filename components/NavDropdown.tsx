"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export type NavItem = { href: string; label: string };

export function NavDropdown({
  label,
  items,
  onItemClick,
}: {
  label: string;
  items: NavItem[];
  onItemClick?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
      >
        {label}
        <span aria-hidden="true" className="nav-dropdown__caret">▾</span>
      </button>

      <div className="nav-dropdown__menu" role="menu">
        {items.map((item) => (
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
