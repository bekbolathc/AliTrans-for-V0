"use client";

import { useState, useMemo } from "react";

export type CaseEntry = {
  id: string;
  mediaVariant: "a" | "b" | "c" | "d" | "e";
  transport: "air" | "rail" | "road" | "lcl";
  industry: "marketplace" | "production" | "retail" | "medtech" | "fmcg" | "equipment";
  route: { from: string; to: string };
  tagline: string;
  client: string;
  title: string;
  task: string;
  solve: string;
  results: string[];
  quote?: { text: string; cite: string };
};

const TRANSPORT_FILTERS: { key: CaseEntry["transport"] | "all"; label: string }[] = [
  { key: "all", label: "Все" },
  { key: "air", label: "Авиа" },
  { key: "rail", label: "ЖД" },
  { key: "road", label: "Авто" },
  { key: "lcl", label: "Сборные" },
];

const INDUSTRY_FILTERS: { key: CaseEntry["industry"] | "all"; label: string }[] = [
  { key: "all", label: "Все отрасли" },
  { key: "marketplace", label: "Маркетплейс" },
  { key: "production", label: "Производство" },
  { key: "retail", label: "Ритейл" },
  { key: "medtech", label: "Медтехника" },
  { key: "fmcg", label: "FMCG" },
  { key: "equipment", label: "Оборудование" },
];

export function CasesGallery({ items }: { items: CaseEntry[] }) {
  const [transport, setTransport] = useState<CaseEntry["transport"] | "all">("all");
  const [industry, setIndustry] = useState<CaseEntry["industry"] | "all">("all");

  const filtered = useMemo(
    () =>
      items.filter((c) => {
        if (transport !== "all" && c.transport !== transport) return false;
        if (industry !== "all" && c.industry !== industry) return false;
        return true;
      }),
    [items, transport, industry]
  );

  return (
    <>
      <div className="cases-filter">
        <div className="cases-filter__group" role="radiogroup" aria-label="Способ доставки">
          {TRANSPORT_FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              className={`cases-filter__chip mono${transport === f.key ? " is-active" : ""}`}
              aria-pressed={transport === f.key}
              onClick={() => setTransport(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="cases-filter__group" role="radiogroup" aria-label="Отрасль">
          {INDUSTRY_FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              className={`cases-filter__chip mono${industry === f.key ? " is-active" : ""}`}
              aria-pressed={industry === f.key}
              onClick={() => setIndustry(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="cases__grid">
        {filtered.length === 0 ? (
          <p className="cases__empty">
            Под фильтр пока нет кейсов. Сбросьте фильтры или напишите нам в WhatsApp.
          </p>
        ) : (
          filtered.map((c) => (
            <article key={c.id} className="cs">
              <div className={`cs__media cs__media--${c.mediaVariant}`} aria-hidden="true">
                <div className="cs__route mono">
                  <span>{c.route.from}</span>
                  <span className="cs__arrow">→</span>
                  <span>{c.route.to}</span>
                </div>
                <div className="cs__tagline mono">{c.tagline}</div>
              </div>
              <div className="cs__body">
                <div className="cs__client mono">{c.client}</div>
                <h3 className="cs__title">{c.title}</h3>
                <p className="cs__task">
                  <b>Задача —</b> {c.task}
                </p>
                <p className="cs__solve">
                  <b>Решение —</b> {c.solve}
                </p>
                <ul className="cs__result">
                  {c.results.map((r, j) => (
                    <li key={j}>{r}</li>
                  ))}
                </ul>
                {c.quote && (
                  <blockquote>
                    «{c.quote.text}»
                    <cite>— {c.quote.cite}</cite>
                  </blockquote>
                )}
              </div>
            </article>
          ))
        )}
      </div>
    </>
  );
}
