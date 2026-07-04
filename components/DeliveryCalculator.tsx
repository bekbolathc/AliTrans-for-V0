"use client";

import { useState, useMemo } from "react";

type Method = {
  label: string;
  ratePerKg: number;
  ratePerM3: number;
  minDays: number;
  maxDays: number;
  minKg: number;
};

export type DeliveryCalcConfig = {
  origin: string;
  methods: Method[];
};

export const KOREA_CONFIG: DeliveryCalcConfig = {
  origin: "Кореи",
  methods: [
    { label: "Авиа · сборный", ratePerKg: 7, ratePerM3: 1200, minDays: 3, maxDays: 7, minKg: 100 },
    { label: "Морской экспресс", ratePerKg: 2.5, ratePerM3: 350, minDays: 18, maxDays: 25, minKg: 100 },
  ],
};

export const TURKEY_CONFIG: DeliveryCalcConfig = {
  origin: "Турции",
  methods: [
    { label: "Авто · фура/сборный", ratePerKg: 1.8, ratePerM3: 280, minDays: 12, maxDays: 18, minKg: 100 },
    { label: "Авиа · срочный", ratePerKg: 6, ratePerM3: 1000, minDays: 4, maxDays: 7, minKg: 50 },
  ],
};

export const EUROPE_CONFIG: DeliveryCalcConfig = {
  origin: "Европы",
  methods: [
    { label: "Авто · фура/сборный", ratePerKg: 2.2, ratePerM3: 320, minDays: 15, maxDays: 25, minKg: 100 },
    { label: "Авиа · срочный", ratePerKg: 8, ratePerM3: 1400, minDays: 4, maxDays: 7, minKg: 50 },
  ],
};

function fmt(n: number): string {
  return n.toLocaleString("ru-RU", { maximumFractionDigits: 0 });
}

export function DeliveryCalculator({ config }: { config: DeliveryCalcConfig }) {
  const [weight, setWeight] = useState("");
  const [volume, setVolume] = useState("");
  const [methodIdx, setMethodIdx] = useState(0);

  const numWeight = parseFloat(weight.replace(/\s/g, "").replace(",", "."));
  const numVolume = parseFloat(volume.replace(/\s/g, "").replace(",", "."));
  const hasWeight = !isNaN(numWeight) && numWeight > 0;
  const hasVolume = !isNaN(numVolume) && numVolume > 0;
  const isValid = hasWeight || hasVolume;

  const result = useMemo(() => {
    if (!isValid) return null;
    const m = config.methods[methodIdx];
    const costByWeight = hasWeight ? numWeight * m.ratePerKg : 0;
    const costByVolume = hasVolume ? numVolume * m.ratePerM3 : 0;
    const cost = Math.max(costByWeight, costByVolume);
    const basis = costByVolume >= costByWeight ? "объём" : "вес";
    return { cost, basis, minDays: m.minDays, maxDays: m.maxDays, method: m };
  }, [numWeight, numVolume, methodIdx, isValid, hasWeight, hasVolume, config.methods]);

  return (
    <section className="calc" id="calculator">
      <div className="container">
        <header className="section-head">
          <div className="mono section-head__num">/03.1 · КАЛЬКУЛЯТОР</div>
          <h2 className="section-head__title">
            Калькулятор стоимости доставки из {config.origin}
          </h2>
          <p className="section-head__lead">
            Ориентировочный расчёт стоимости доставки в Казахстан.
            Точную цену логист пришлёт за 15 минут.
          </p>
        </header>

        <div className="calc__body">
          <div className="calc__form">
            <label className="calc__field">
              <span className="calc__label mono">СПОСОБ ДОСТАВКИ</span>
              <select
                value={methodIdx}
                onChange={(e) => setMethodIdx(Number(e.target.value))}
              >
                {config.methods.map((m, i) => (
                  <option key={i} value={i}>
                    {m.label} · {m.minDays}–{m.maxDays} дн
                  </option>
                ))}
              </select>
            </label>

            <label className="calc__field">
              <span className="calc__label mono">ВЕС ГРУЗА (КГ)</span>
              <input
                type="text"
                inputMode="decimal"
                placeholder="500"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </label>

            <label className="calc__field">
              <span className="calc__label mono">ОБЪЁМ ГРУЗА (М³)</span>
              <input
                type="text"
                inputMode="decimal"
                placeholder="2.5"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
              />
            </label>
          </div>

          {result ? (
            <div className="calc__result">
              <div className="calc__row">
                <span>Способ</span>
                <span className="mono">{result.method.label}</span>
              </div>
              <div className="calc__row">
                <span>Расчёт по</span>
                <span className="mono">{result.basis}</span>
              </div>
              <div className="calc__row">
                <span>Срок доставки</span>
                <span className="mono">{result.minDays}–{result.maxDays} дней</span>
              </div>
              <div className="calc__row calc__row--total">
                <span>Ориентировочно</span>
                <span className="mono">от ${fmt(result.cost)}</span>
              </div>
              <p className="calc__note mono">
                * Стоимость зависит от характера груза, упаковки и
                актуальных тарифов. Включает доставку до Алматы.
              </p>
              <a className="btn btn--gold" href="#quiz-cta">
                Точный расчёт — оставить заявку →
              </a>
            </div>
          ) : (
            <div className="calc__result calc__result--empty">
              <p>Укажите вес или объём груза для расчёта</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
