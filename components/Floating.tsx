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
      <a
        className="fab-wa"
        href="https://wa.me/77718000209?text=Здравствуйте,%20хочу%20уточнить%20по%20доставке%20из%20Китая"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path
            d="M16 4a12 12 0 0 0-10.4 18l-1.6 6 6.2-1.6A12 12 0 1 0 16 4Zm6.6 17c-.3.8-1.6 1.5-2.3 1.6-.6.1-1.4.1-2.2-.1-.5-.2-1.2-.4-2-.7-3.6-1.5-5.9-5-6-5.2-.2-.2-1.4-1.9-1.4-3.6 0-1.7.9-2.6 1.2-2.9.3-.3.7-.4 1-.4h.7c.2 0 .5 0 .8.6.3.7.9 2.4 1 2.5.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.4.4-.6.6-.2.2-.4.4-.2.7.2.4 1 1.6 2.2 2.6 1.5 1.3 2.7 1.7 3.1 1.9.4.2.7.1.9-.1.2-.2.9-1 1.2-1.4.2-.4.5-.3.8-.2.3.1 2.1 1 2.4 1.2.3.2.6.2.7.4.1.2.1 1-.2 1.9Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <button
        className={`fab-top${show ? " is-visible" : ""}`}
        aria-label="Наверх"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </>
  );
}
