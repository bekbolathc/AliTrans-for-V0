export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__col footer__col--brand">
            <a className="logo logo--light" href="/">
              <span className="logo__mark" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none">
                  <path d="M5 5 H27 V9 L19 16 L27 23 V27 H5 V23 L13 16 L5 9 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  <circle cx="16" cy="16" r="1.5" fill="currentColor" />
                </svg>
              </span>
              <span className="logo__text">
                <strong>Ali Trans</strong>
                <span className="logo__sub">Group · AXG</span>
              </span>
            </a>
            <p>B2B-логистика из Китая в Казахстан с 2007 года. Авиа, ЖД, авто. Свои склады в Иу, Гуанчжоу, Урумчи, Хоргосе.</p>
            <div className="footer__social">
              <a href="https://instagram.com/alitrans.kz" target="_blank" rel="noopener"><span className="mono">IG</span> @alitrans.kz</a>
              <a href="https://wa.me/77718000209" target="_blank" rel="noopener"><span className="mono">WA</span> +7 771 800 02 09</a>
            </div>
          </div>

          <div className="footer__col">
            <div className="mono footer__label">НАВИГАЦИЯ</div>
            <a href="#services">Услуги</a>
            <a href="#pricing">Цены</a>
            <a href="#about">О компании</a>
            <a href="#cases">Кейсы</a>
            <a href="#faq">FAQ</a>
            <a href="#contacts">Контакты</a>
          </div>

          <div className="footer__col">
            <div className="mono footer__label">УСЛУГИ</div>
            <a href="#services">Авиа доставка</a>
            <a href="#services">ЖД доставка</a>
            <a href="#services">Авто доставка</a>
            <a href="#services">Сборные грузы</a>
            <a href="#services">Растаможка</a>
            <a href="#services">Страхование</a>
          </div>

          <div className="footer__col">
            <div className="mono footer__label">КОНТАКТЫ</div>
            <p>г. Алматы, ул. Тимирязева 42, К23<br />БЦ «Asia Most», офис 210</p>
            <a className="footer__phone" href="tel:+77718000209">+7 (771) 800 02 09</a>
            <a href="mailto:sales@alitrans.kz">sales@alitrans.kz</a>
            <p className="mono footer__hours">ПН–ПТ · 09:00 – 18:00</p>
          </div>
        </div>

        <div className="footer__bottom">
          <div>© 2026 ТОО «Ali Trans Group» · все права защищены</div>
          <div className="mono">БИН · 191040009895</div>
          <div className="footer__legal">
            <a href="/privacy-policy">Политика конфиденциальности</a>
            <a href="/terms">Договор-оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
