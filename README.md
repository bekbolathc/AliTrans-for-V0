# Ali Trans Group — лендинг на Next.js 15

Премиальный B2B-лендинг для логистической компании Ali Trans Group (доставка грузов из Китая в Казахстан).
Готов к деплою на Vercel и редактированию в **v0**.

---

## 🚀 Быстрый старт

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

---

## 📦 Импорт в v0 (vercel.com/v0)

### Способ 1 — через GitHub (рекомендуемый)

1. Создайте новый репозиторий на [github.com](https://github.com/new)
2. Загрузите содержимое папки `nextjs-app/`:
   ```bash
   cd nextjs-app
   git init
   git add .
   git commit -m "init: alitrans landing"
   git branch -M main
   git remote add origin git@github.com:<your-user>/alitrans-website.git
   git push -u origin main
   ```
3. Откройте [v0.dev](https://v0.dev)
4. Нажмите **New Project → Import from GitHub** и выберите репозиторий
5. v0 запустит dev-сервер и откроет редактор

### Способ 2 — через Vercel CLI

```bash
npm i -g vercel
cd nextjs-app
vercel
# следуйте инструкциям, проект задеплоится автоматически
```

После деплоя файлы будут доступны для редактирования в v0 через интеграцию с проектом.

### Способ 3 — drag & drop

В v0 поддерживается перетаскивание архива проекта. Запакуйте папку `nextjs-app/` в `.zip` и перетащите её в окно v0.

---

## 🛠 Стек

- **Next.js 15** (App Router)
- **React 18**
- **TypeScript 5**
- **Tailwind CSS 3** (для будущих утилит, основная стилизация — кастомный CSS с дизайн-токенами)
- Custom CSS с design-tokens (см. `app/globals.css`)
- Fonts: Manrope + JetBrains Mono (Google Fonts)

---

## 📁 Структура

```
nextjs-app/
├── app/
│   ├── layout.tsx          ← root layout + шрифты + метаданные
│   ├── page.tsx            ← главная страница, собирает все секции
│   └── globals.css         ← все стили, design tokens, responsive
├── components/
│   ├── Header.tsx          ← sticky шапка + мобильное меню
│   ├── ScrollProgress.tsx  ← полоса прокрутки
│   ├── Hero.tsx            ← первый экран + live-панель
│   ├── TrustBar.tsx        ← полоса доверия с count-up
│   ├── ForWhom.tsx         ← блок "Кому подходит / Не подходит"
│   ├── Quiz.tsx            ← 6-шаговый квиз-калькулятор
│   ├── Services.tsx        ← Авиа / ЖД / Авто
│   ├── Why.tsx             ← 6 причин выбрать ATG
│   ├── Cases.tsx           ← 5 кейсов клиентов
│   ├── Pricing.tsx         ← таблица тарифов
│   ├── HowWork.tsx         ← 5 шагов процесса
│   ├── Geography.tsx       ← география Китай → KZ
│   ├── Founders.tsx        ← основатели + хронология
│   ├── Reviews.tsx         ← отзывы + видео + лента логотипов
│   ├── FAQ.tsx             ← 10 вопросов (accordion)
│   ├── CTA.tsx             ← финальный CTA + менеджер
│   ├── Footer.tsx          ← подвал
│   └── Floating.tsx        ← плавающий WhatsApp + кнопка "наверх"
├── lib/
│   └── useCountUp.ts       ← хук анимации чисел при появлении
└── ...
```

---

## ✏️ Что отредактировать перед запуском

| Файл | Что заменить |
| --- | --- |
| `components/Founders.tsx` | TODO: фото основателей (плейсхолдер `PORTRAIT · TODO 800×1000`) |
| `components/CTA.tsx` | TODO: фото менеджера, реальное имя |
| `components/Cases.tsx` | TODO: уточнить цифры по 2 кейсам и собрать цитаты |
| `components/Reviews.tsx` | TODO: добавить видеоотзывы (заглушки 16:9) и реальные имена |
| `app/layout.tsx` | вставить ID Google Tag Manager, GA4, Яндекс.Метрики |

---

## 🎨 Дизайн-токены

Цвета и шрифты вынесены в CSS-переменные в `app/globals.css`:

```css
--navy-900: #08152F;
--navy-800: #0B1B3A;
--gold:     #D9A441;
--paper:    #F5F2EB;
--emerald:  #0E8B6C;
--ff:       'Manrope';
--ff-mono:  'JetBrains Mono';
```

Дублируются в `tailwind.config.ts` для Tailwind-утилит.

---

## 📈 Что добавить далее (рекомендации)

- [ ] API-роут `app/api/lead/route.ts` для приёма заявок из квиза → отправка в Telegram-бот / email
- [ ] Страницы `/thanks/`, `/privacy/`, `/offer/`, `/404`
- [ ] JSON-LD Schema.org (Organization, LocalBusiness, FAQPage, Service)
- [ ] `app/sitemap.ts` и `app/robots.ts` (Next.js нативно)
- [ ] Cookie-banner (GDPR)
- [ ] Google Tag Manager (через `next/script`)
- [ ] Реальные фотографии основателей, менеджера, складов
- [ ] Подключить домен `alitrans.kz` на Vercel

---

## 📞 Один номер по всему сайту

**+7 (771) 800 02 09** — единый номер для звонков и WhatsApp.
При замене — обновите везде: `Header.tsx`, `Hero.tsx`, `CTA.tsx`, `Footer.tsx`, `Floating.tsx`.
