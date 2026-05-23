export function Geography() {
  return (
    <section className="geo">
      <div className="container">
        <header className="section-head">
          <div className="mono section-head__num">/09 · ГЕОГРАФИЯ</div>
          <h2 className="section-head__title">Доставляем из 30+ городов Китая в любую точку Казахстана</h2>
        </header>

        <div className="geo__grid">
          <div className="geo__col">
            <div className="mono geo__label">↳ ОТКУДА · КИТАЙ</div>
            <div className="geo__hubs">
              <div className="geo__hub-title">Склады консолидации</div>
              <div className="geo__chips geo__chips--hub">
                {["Иу", "Гуанчжоу", "Урумчи", "Хоргос"].map((c) => <span key={c}>{c}</span>)}
              </div>
            </div>
            <div className="geo__hubs">
              <div className="geo__hub-title">Города отправки</div>
              <div className="geo__chips">
                {["Шанхай", "Шэньчжэнь", "Пекин", "Чэнду", "Чунцин", "Ханчжоу", "Нинбо", "Фошань", "Сямынь", "Куньмин", "Сиань", "Сучжоу", "Тяньцзинь"].map((c) => <span key={c}>{c}</span>)}
                <span className="geo__more mono">и ещё 15+</span>
              </div>
            </div>
          </div>

          <div className="geo__col">
            <div className="mono geo__label">↳ КУДА · КАЗАХСТАН</div>
            <div className="geo__hubs">
              <div className="geo__hub-title">Основные направления</div>
              <div className="geo__chips geo__chips--main">
                {["Алматы", "Астана", "Шымкент", "Актау", "Актобе", "Караганда"].map((c) => <span key={c}>{c}</span>)}
              </div>
            </div>
            <div className="geo__hubs">
              <div className="geo__hub-title">И все остальные города</div>
              <div className="geo__chips">
                {["Атырау", "Усть-Каменогорск", "Павлодар", "Тараз", "Семей", "Костанай", "Туркестан", "Кызылорда", "Петропавловск"].map((c) => <span key={c}>{c}</span>)}
                <span className="geo__more mono">и все обл. центры</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
