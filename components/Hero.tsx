"use client";

import { useEffect, useState } from "react";

function LiveClock() {
  const [t, setT] = useState("--:--:-- UTC+5");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const local = new Date(d.getTime() + (d.getTimezoneOffset() + 300) * 60000);
      const hh = String(local.getHours()).padStart(2, "0");
      const mm = String(local.getMinutes()).padStart(2, "0");
      const ss = String(local.getSeconds()).padStart(2, "0");
      setT(`${hh}:${mm}:${ss} UTC+5`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <div className="mono panel__time">{t}</div>;
}

import { useCountUp } from "@/lib/useCountUp";

function Count({ target }: { target: number }) {
  const { ref, value } = useCountUp(target);
  return <span ref={ref} className="count">{value}</span>;
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid"></div>
        <div className="hero__glow"></div>
      </div>

      <div className="container hero__inner">
        <div className="hero__left">
          <div className="kicker">
            <span className="kicker__dot"></span>
            <span className="mono">B2B · CHINA → KZ · СБОРНЫЕ ОТ 100 КГ</span>
          </div>

          <h1 className="hero__title">
            Доставка грузов <br />из Китая в Казахстан<br />
            <span className="hero__title-accent">— для бизнеса от 100 кг.</span>
          </h1>

          <p className="hero__lead">
            Авиа, ЖД, авто и мультимодальная логистика. Договор, полный пакет документов и страховка груза 0,2%.
            Свои склады консолидации в Иу, Гуанчжоу, Урумчи и Хоргосе.
          </p>

          <ul className="hero__bullets">
            <li><span className="bullet-num mono">01</span><span>Цена <b>от $120</b> за м³</span></li>
            <li><span className="bullet-num mono">02</span><span>Срок <b>от 2 дней</b>, без преувеличений</span></li>
            <li><span className="bullet-num mono">03</span><span>Минимум <b>100 кг / 1 м³</b></span></li>
            <li><span className="bullet-num mono">04</span><span>Полный пакет документов для бухгалтерии</span></li>
          </ul>

          <div className="hero__actions">
            <a className="btn btn--gold btn--lg" href="#quiz">
              Рассчитать стоимость за 15 минут
              <span aria-hidden="true" className="btn__arrow">→</span>
            </a>
            <a className="btn btn--ghost btn--lg" href="https://wa.me/77718000209" target="_blank" rel="noopener">
              <span className="wa-ico" aria-hidden="true">✆</span> WhatsApp
            </a>
          </div>

          <div className="hero__proof">
            <span className="mono">↳</span> Уже <b>2 000+</b> довольных клиентов <span className="dot-sep">·</span>{" "}
            <b>18 лет</b> на рынке международной логистики
          </div>
        </div>

        <aside className="hero__panel" aria-label="Живая статистика" style={{ contentVisibility: 'auto' }}>
          <div className="panel" style={{ contain: 'layout style paint' }}>
            <div className="panel__head">
              <div className="panel__title">
                <span className="led"></span>
                <span className="mono">LIVE · ОПЕРАЦИОННЫЙ ЦЕНТР · АЛМАТЫ</span>
              </div>
              <LiveClock />
            </div>

            <div className="panel__map" role="img" aria-label="Карта маршрутов из Китая в Казахстан" style={{ willChange: 'contents' }}>
              <svg viewBox="0 0 480 280" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id="dotgrid" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.8" fill="rgba(217,164,65,0.18)" />
                  </pattern>
                  <linearGradient id="route" x1="0" x2="1">
                    <stop offset="0" stopColor="#D9A441" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#D9A441" stopOpacity="1" />
                    <stop offset="1" stopColor="#D9A441" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <rect width="480" height="280" fill="url(#dotgrid)" />
                <path d="M380 200 Q300 60 120 90" stroke="url(#route)" strokeWidth="1.4" fill="none" strokeDasharray="3 4" />
                <path d="M400 170 Q260 130 100 140" stroke="url(#route)" strokeWidth="1.4" fill="none" strokeDasharray="3 4" />
                <path d="M410 220 Q320 220 160 200" stroke="url(#route)" strokeWidth="1.4" fill="none" strokeDasharray="3 4" />
                <g>
                  <circle cx="380" cy="200" r="3" fill="#D9A441" />
                  <circle cx="380" cy="200" r="9" fill="none" stroke="#D9A441" strokeOpacity="0.4" />
                  <text x="388" y="204" fill="#E8E1CF" fontFamily="JetBrains Mono" fontSize="9">Гуанчжоу</text>
                </g>
                <g>
                  <circle cx="400" cy="170" r="3" fill="#D9A441" />
                  <circle cx="400" cy="170" r="9" fill="none" stroke="#D9A441" strokeOpacity="0.4" />
                  <text x="408" y="174" fill="#E8E1CF" fontFamily="JetBrains Mono" fontSize="9">Шанхай</text>
                </g>
                <g>
                  <circle cx="410" cy="220" r="3" fill="#D9A441" />
                  <text x="418" y="224" fill="#E8E1CF" fontFamily="JetBrains Mono" fontSize="9">Иу</text>
                </g>
                <g>
                  <circle cx="320" cy="120" r="3" fill="#D9A441" />
                  <text x="296" y="112" fill="#E8E1CF" fontFamily="JetBrains Mono" fontSize="9">Урумчи</text>
                </g>
                <g>
                  <circle cx="160" cy="200" r="3" fill="#FFFFFF" />
                  <circle cx="160" cy="200" r="9" fill="none" stroke="#FFFFFF" strokeOpacity="0.45" />
                  <text x="100" y="218" fill="#FFFFFF" fontFamily="JetBrains Mono" fontSize="9">Алматы</text>
                </g>
                <g>
                  <circle cx="120" cy="90" r="3" fill="#FFFFFF" />
                  <text x="60" y="86" fill="#FFFFFF" fontFamily="JetBrains Mono" fontSize="9">Астана</text>
                </g>
                <g>
                  <circle cx="100" cy="140" r="3" fill="#FFFFFF" />
                  <text x="40" y="158" fill="#FFFFFF" fontFamily="JetBrains Mono" fontSize="9">Актобе</text>
                </g>
              </svg>
            </div>

            <div className="panel__stats">
              <div>
                <div className="mono panel__label">в работе сейчас</div>
                <div className="panel__big"><Count target={47} /> <span className="panel__unit">грузов</span></div>
              </div>
              <div>
                <div className="mono panel__label">в этом месяце</div>
                <div className="panel__big"><Count target={312} /> <span className="panel__unit">тонн</span></div>
              </div>
              <div>
                <div className="mono panel__label">средний срок</div>
                <div className="panel__big">11<span className="panel__unit">дней</span></div>
              </div>
            </div>

            <ul className="panel__feed" aria-label="Лента событий">
              <li><span className="mono tag tag--ok">DELIVERED</span> Гуанчжоу → Алматы · 1 240 кг · ТОО Olimp Medicus</li>
              <li><span className="mono tag tag--rail">RAIL</span> Иу → Шымкент · 4×40HQ · Хоргос</li>
              <li><span className="mono tag tag--air">AIR</span> Шанхай → Астана · 380 кг · образцы</li>
              <li><span className="mono tag tag--road">ROAD</span> Урумчи → Караганда · 2,1 т · мебель</li>
            </ul>
          </div>

          <div className="hero__plate mono">AXG · KZ-CN OPS — 24 / 7</div>
        </aside>
      </div>
    </section>
  );
}
