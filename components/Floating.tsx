"use client";

import { useEffect, useState } from "react";

export function Floating() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp Button */}
      <a
        className="fab fab-wa"
        href="https://wa.me/77718000209?text=Здравствуйте,%20хочу%20уточнить%20по%20доставке%20из%20Китая"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path
            d="M16 4a12 12 0 0 0-10.4 18l-1.6 6 6.2-1.6A12 12 0 1 0 16 4Zm6.6 17c-.3.8-1.6 1.5-2.3 1.6-.6.1-1.4.1-2.2-.1-.5-.2-1.2-.4-2-.7-3.6-1.5-5.9-5-6-5.2-.2-.2-1.4-1.9-1.4-3.6 0-1.7.9-2.6 1.2-2.9.3-.3.7-.4 1-.4h.7c.2 0 .5 0 .8.6.3.7.9 2.4 1 2.5.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.4.4-.6.6-.2.2-.4.4-.2.7.2.4 1 1.6 2.2 2.6 1.5 1.3 2.7 1.7 3.1 1.9.4.2.7.1.9-.1.2-.2.9-1 1.2-1.4.2-.4.5-.3.8-.2.3.1 2.1 1 2.4 1.2.3.2.6.2.7.4.1.2.1 1-.2 1.9Z"
            fill="currentColor"
          />
        </svg>
      </a>

      {/* Phone Call Button */}
      <a
        className="fab fab-phone"
        href="tel:+77718000209"
        aria-label="Позвонить"
        title="Позвонить"
      >
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path
            d="M5 8c0-2.2 1.8-4 4-4h3l2.3 2.3c.4.4.6.9.6 1.4v7.8c0 1.1-.9 2-2 2h-2l-1.7 1.7c.5 1.3 1.4 2.5 2.5 3.5l1.7-1.7h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H9c-2.2 0-4-1.8-4-4V8Z"
            fill="currentColor"
          />
        </svg>
      </a>

      {/* Instagram Button */}
      <a
        className="fab fab-ig"
        href="https://instagram.com/alitrans.kz"
        target="_blank"
        rel="noopener"
        aria-label="Instagram"
        title="Instagram"
      >
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect x="6" y="6" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="16" cy="16" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="23" cy="9" r="1" fill="currentColor" />
        </svg>
      </a>

      {/* Scroll to Top Button */}
      <button
        className={`fab fab-top${show ? " is-visible" : ""}`}
        aria-label="Наверх"
        title="Наверх"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </>
  );
}
