"use client";

import { useState, useMemo } from "react";

const CATEGORIES = [
  { label: "Электроника", duty: 0 },
  { label: "Одежда и текстиль", duty: 10 },
  { label: "Автозапчасти", duty: 7.5 },
  { label: "Оборудование и станки", duty: 0 },
  { label: "Косметика", duty: 6.5 },
  { label: "Продукты питания", duty: 12 },
  { label: "Стройматериалы", duty: 8 },
  { label: "Бытовая техника", duty: 7 },
  { label: "Игрушки и товары для детей", duty: 10 },
  { label: "Мебель и интерьер", duty: 10 },
  { label: "Химия и сырьё", duty: 5 },
  { label: "Другое", duty: 7.5 },
] as const;

const NDS_RATE = 12;

function customsFee(valueUsd: number): number {
  if (valueUsd <= 1_000) return 20;
  if (valueUsd <= 10_000) return 55;
  if (valueUsd <= 100_000) return 90;
  return 145;
}

function fmt(n: number): string {
  return n.toLocaleString("ru-RU", { maximumFractionDigits: 0 });
}

export function CustomsCalculator() {
  const [value, setValue] = useState("");
  const [catIdx, setCatIdx] = useState(0);

  const numVal = parseFloat(value.replace(/\s/g, "").replace(",", "."));
  const isValid = !isNaN(numVal) && numVal > 0;

  const result = useMemo(() => {
    if (!isValid) return null;
    const cat = CATEGORIES[catIdx];
    const duty = numVal * (cat.duty / 100);
    const nds = (numVal + duty) * (NDS_RATE / 100);
    const fee = customsFee(numVal);
    const total = duty + nds + fee;
    return { duty, nds, fee, total, dutyRate: cat.duty };
  }, [numVal, catIdx, isValid]);

  return (
    <section className="calc" id="calculator">
      <div className="container">
        <header className="section-head">
          <div className="mono section-head__num">/03.1 · КАЛЬКУЛЯТОР</div>
          <h2 className="section-head__title">
            Калькулятор стоимости растаможки
          </h2>
          <p className="section-head__lead">
            Ориентировочный расчёт пошлин и НДС при импорте товаров из Китая в
            Казахстан по ставкам ЕАЭС.
          </p>
        </header>

        <div className="calc__body">
          <div className="calc__form">
            <label className="calc__field">
              <span className="calc__label mono">СТОИМОСТЬ ТОВАРА (USD)</span>
              <input
                type="text"
                inputMode="decimal"
                placeholder="10 000"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </label>

            <label className="calc__field">
              <span className="calc__label mono">КАТЕГОРИЯ ТОВАРА</span>
              <select
                value={catIdx}
                onChange={(e) => setCatIdx(Number(e.target.value))}
              >
                {CATEGORIES.map((c, i) => (
                  <option key={i} value={i}>
                    {c.label} — {c.duty}%
                  </option>
                ))}
              </select>
            </label>
          </div>

          {result ? (
            <div className="calc__result">
              <div className="calc__row">
                <span>Таможенная пошлина ({result.dutyRate}%)</span>
                <span className="mono">${fmt(result.duty)}</span>
              </div>
              <div className="calc__row">
                <span>НДС ({NDS_RATE}%)</span>
                <span className="mono">${fmt(result.nds)}</span>
              </div>
              <div className="calc__row">
                <span>Таможенный сбор</span>
                <span className="mono">${fmt(result.fee)}</span>
              </div>
              <div className="calc__row calc__row--total">
                <span>Итого платежи</span>
                <span className="mono">${fmt(result.total)}</span>
              </div>
              <p className="calc__note mono">
                * Расчёт ориентировочный. Точная сумма зависит от кода ТН ВЭД,
                страны происхождения и актуальных ставок.
              </p>
              <a className="btn btn--gold" href="#quiz-cta">
                Точный расчёт — оставить заявку →
              </a>
            </div>
          ) : (
            <div className="calc__result calc__result--empty">
              <p>Введите стоимость товара для расчёта</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
