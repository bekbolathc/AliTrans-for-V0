import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__col footer__col--brand">
            <Link className="logo logo--light" href="/" aria-label="Ali Trans Group">
              <Image
                src="/logo.png"
                alt="Ali Trans Group логотип"
                className="logo__image"
                width={108}
                height={60}
                style={{ height: "60px", width: "auto" }}
              />
            </Link>
            <p>
              B2B-логистика из Китая в Казахстан с 2007 года. Авиа, ЖД, авто. Свои склады в
              Иу, Гуанчжоу, Урумчи, Хоргосе.
            </p>
            <div className="footer__social">
              <a href="https://instagram.com/alitrans.kz" target="_blank" rel="noopener noreferrer">
                <span className="mono">IG</span> @alitrans.kz
              </a>
              <a href="https://wa.me/77718000209" target="_blank" rel="noopener noreferrer">
                <span className="mono">WA</span> +7 771 800 02 09
              </a>
            </div>
          </div>

          <div className="footer__col">
            <div className="mono footer__label">НАВИГАЦИЯ</div>
            <Link href="/keysy">Кейсы</Link>
            <Link href="/o-kompanii">О компании</Link>
            <Link href="/kontakty">Контакты</Link>
            <Link href="/privacy-policy">Политика конфиденциальности</Link>
            <Link href="/terms">Договор-оферта</Link>
          </div>

          <div className="footer__col">
            <div className="mono footer__label">УСЛУГИ</div>
            <Link href="/avia-dostavka-iz-kitaya">Авиа доставка</Link>
            <Link href="/zhd-dostavka-iz-kitaya">ЖД доставка</Link>
            <Link href="/avto-dostavka-iz-kitaya">Авто доставка</Link>
            <Link href="/sbornye-gruzy-iz-kitaya">Сборные грузы</Link>
            <Link href="/rastamozhka-gruzov">Растаможка</Link>
            <Link href="/ved-pod-klyuch">ВЭД под ключ</Link>
          </div>

          <div className="footer__col">
            <div className="mono footer__label">КОНТАКТЫ</div>
            <p>
              г. Алматы, ул. Тимирязева 42, К23
              <br />
              БЦ «Asia Most», офис 210
            </p>
            <a className="footer__phone" href="tel:+77718000209">
              +7 (771) 800 02 09
            </a>
            <a href="mailto:sales@alitrans.kz">sales@alitrans.kz</a>
            <p className="mono footer__hours">ПН–ПТ · 09:00 – 18:00</p>
          </div>
        </div>

        <div className="footer__bottom">
          <div>© 2026 ТОО «Ali Trans Group» · все права защищены</div>
          <div className="mono">БИН · 191040009895</div>
          <div className="footer__legal">
            <Link href="/privacy-policy">Политика конфиденциальности</Link>
            <Link href="/terms">Договор-оферта</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
