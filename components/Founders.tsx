export function Founders() {
  return (
    <section className="founders" id="about">
      <div className="container">
        <header className="section-head">
          <div className="mono section-head__num">/10 · ЛЮДИ</div>
          <h2 className="section-head__title">Семейный бизнес с 2007 года</h2>
          <p className="section-head__lead">
            Мы строим логистику так, как делали бы её для своего бизнеса. Это не call-центр, это люди, с которыми вы общаетесь напрямую.
          </p>
        </header>

        <div className="founders__grid">
          <article className="founder">
            <div className="founder__photo" aria-hidden="true">
              <div className="founder__photo-inner">
                <div className="mono founder__photo-lbl">PORTRAIT · TODO · 800×1000</div>
                <div className="founder__photo-init">ТН</div>
              </div>
            </div>
            <div className="founder__body">
              <div className="mono founder__role">СООСНОВАТЕЛЬ · 18 ЛЕТ В ЛОГИСТИКЕ</div>
              <h3 className="founder__name">Талгат Нурекеев</h3>
              <blockquote className="founder__quote">
                «Логистика — это про надёжность. Каждая задержка — это срыв бизнеса клиента.
                Поэтому мы строим процессы так, как делали бы для себя.»
              </blockquote>
              <a className="founder__ig" href="https://instagram.com/talgat.atg" target="_blank" rel="noopener">
                <span className="mono">↳ INSTAGRAM</span> @talgat.atg
              </a>
            </div>
          </article>

          <article className="founder founder--reverse">
            <div className="founder__photo" aria-hidden="true">
              <div className="founder__photo-inner">
                <div className="mono founder__photo-lbl">PORTRAIT · TODO · 800×1000</div>
                <div className="founder__photo-init">КУ</div>
              </div>
            </div>
            <div className="founder__body">
              <div className="mono founder__role">СООСНОВАТЕЛЬ · 16 ЛЕТ В ЛОГИСТИКЕ</div>
              <h3 className="founder__name">Карлыгаш Умарова</h3>
              <blockquote className="founder__quote">
                «Для нас Ali Trans — это семейное дело. Мы лично знаем многих клиентов и переживаем за каждый груз.»
              </blockquote>
              <a className="founder__ig" href="https://instagram.com/karlygash_umarova_" target="_blank" rel="noopener">
                <span className="mono">↳ INSTAGRAM</span> @karlygash_umarova_
              </a>
            </div>
          </article>
        </div>

        <div className="founders__story">
          <div className="mono founders__story-label">↳ КОРОТКАЯ ХРОНИКА</div>
          <div className="timeline">
            <div className="tl"><div className="mono tl__y">2007</div><div className="tl__t">Первые отправки из Гуанчжоу. Команда из трёх человек.</div></div>
            <div className="tl"><div className="mono tl__y">2012</div><div className="tl__t">Открыли собственный склад в Иу — центре оптовой торговли.</div></div>
            <div className="tl"><div className="mono tl__y">2017</div><div className="tl__t">Запустили ЖД-маршрут через Хоргос. Контейнеры под ключ.</div></div>
            <div className="tl"><div className="mono tl__y">2021</div><div className="tl__t">Четыре склада в Китае. Партнёрство с крупными производителями.</div></div>
            <div className="tl"><div className="mono tl__y">2025</div><div className="tl__t">2 000+ клиентов, 20 500 тонн груза, 30+ городов KZ.</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
