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
      {/* Phone Call Button - First */}
      <a
        className="fab fab-phone"
        href="tel:+77718000209"
        aria-label="Позвонить"
        title="Позвонить"
      >
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M16.9963 7.68583C17.7228 7.68583 18.3922 8.07985 18.7449 8.71509L21.1913 13.1219C21.5116 13.6989 21.5267 14.3968 21.2315 14.9871L18.8747 19.7008C18.8747 19.7008 19.5577 23.2122 22.4161 26.0706C25.2746 28.929 28.7742 29.6002 28.7742 29.6002L33.4871 27.2438C34.0778 26.9484 34.7762 26.9637 35.3534 27.2846L39.7727 29.7416C40.4074 30.0945 40.8009 30.7635 40.8009 31.4896L40.8009 36.5631C40.8009 39.1468 38.401 41.0129 35.953 40.1868C30.925 38.4903 23.1203 35.2601 18.1735 30.3132C13.2267 25.3664 9.99643 17.5617 8.29989 12.5338C7.47387 10.0857 9.33996 7.68583 11.9236 7.68583L16.9963 7.68583Z" fill="white" stroke="none" strokeWidth="0" strokeLinejoin="round"/>
        </svg>
      </a>

      {/* WhatsApp Button - Second */}
      <a
        className="fab fab-wa"
        href="https://wa.me/77718000209?text=Здравствуйте,%20хочу%20уточнить%20по%20доставке%20из%20Китая"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <svg viewBox="0 0 100 100" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M50 3C23.431 3 2 24.431 2 51c0 8.992 2.584 17.374 7.041 24.459L3.956 97.584l23.708-6.265C34.368 96.038 41.909 99 50 99c26.569 0 48-21.431 48-48S76.569 3 50 3zm0 4.5c23.456 0 42.5 19.044 42.5 42.5S73.456 92.5 50 92.5c-7.648 0-14.805-2.019-21.001-5.544l-2.914-1.62-3.041.804-8.438 2.23 2.221-8.438.804-3.041-1.62-2.914C17.019 64.805 15 57.648 15 50 15 26.544 34.044 7.5 50 7.5z" />
          <path d="M36.375 26.25c-1.367 0-3.375.543-5.344 2.512-1.969 1.969-5.542 5.41-5.542 13.198 0 7.787 5.669 15.3 6.458 16.399.789 1.099 10.65 17.109 25.806 23.968 12.746 5.82 15.31 4.668 18.084 4.383 2.773-.285 8.951-3.67 10.196-7.209 1.245-3.539 1.245-6.574.873-7.209-.372-.635-1.245-.953-2.597-1.531-1.352-.578-8.004-3.953-9.251-4.387-1.246-.434-2.156-.543-3.053.543-.897 1.086-3.472 4.387-4.252 5.291-.78.904-1.559 1.013-2.91.542-1.351-.47-5.691-2.099-10.835-6.685-4.01-3.568-6.717-7.979-7.496-9.331-.78-1.352-.083-2.083.586-2.759.602-.601 1.352-1.569 2.028-2.349.677-.781 1.013-1.351.675-2.256-.338-.904-1.013-2.258-1.586-3.472-.573-1.214-1.575-1.825-2.924-2.11-1.35-.285-2.882-.423-4.426-.423-1.544 0-3.166.195-4.837.968z" fill="white"/>
        </svg>
      </a>

      {/* Instagram Button - Third */}
      <a
        className="fab fab-ig"
        href="https://instagram.com/alitrans.kz"
        target="_blank"
        rel="noopener"
        aria-label="Instagram"
        title="Instagram"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
          <path d="M9 2c-3.9 0-7 3.1-7 7v12c0 3.9 3.1 7 7 7h12c3.9 0 7-3.1 7-7V9c0-3.9-3.1-7-7-7H9zm0 2h12c2.8 0 5 2.2 5 5v12c0 2.8-2.2 5-5 5H9c-2.8 0-5-2.2-5-5V9c0-2.8 2.2-5 5-5zm6 4c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm5.5-1c.8 0 1.5.7 1.5 1.5S21.3 11 20.5 11 19 10.3 19 9.5 19.7 8 20.5 8z" />
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
