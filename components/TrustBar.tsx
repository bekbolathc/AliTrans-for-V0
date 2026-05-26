"use client";

import { useCountUp } from "@/lib/useCountUp";

function Stat({ target, label, suffix = "", isLast = false }: { target: number; label: React.ReactNode; suffix?: string; isLast?: boolean }) {
  const { ref, value } = useCountUp(target);
  return (
    <div className={`stat ${isLast ? 'stat--last' : ''}`}>
      <div className="stat__num">
        <span ref={ref}>{value}</span>{suffix}
      </div>
      <div className="stat__label">{label}</div>
    </div>
  );
}

export function TrustBar() {
  return (
    <section className="trustbar">
      <div className="trustbar__grid">
        <Stat target={18} label={<>лет<br />на рынке</>} />
        <Stat target={2000} suffix="+" label={<>клиентов<br />с 2007 года</>} />
        <Stat target={20500} label={<>тонн груза<br />перевезли</>} />
        <Stat target={4} label={<>собственных<br />складов в Китае</>} />
        <Stat target={30} suffix="+" label={<>городов KZ<br />для доставки</>} isLast />
      </div>
    </section>
  );
}
