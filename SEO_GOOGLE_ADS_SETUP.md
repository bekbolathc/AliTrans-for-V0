# Ali Trans Group — SEO & Google Ads Setup Guide

Этот документ содержит инструкции по настройке Google Analytics, Google Ads и SEO оптимизации для запуска кампаний.

## ✅ Выполненные улучшения

### SEO Оптимизация
- ✅ JSON-LD Schema Markup (Organization, LocalBusiness)
- ✅ Meta теги и Open Graph
- ✅ Мобильная оптимизация
- ✅ Semantic HTML разметка
- ✅ Favicon поддержка
- ✅ robots.txt и sitemap.xml (нужно создать)
- ✅ SVG иконки вместо emoji

### Google Ads Готовность
- ✅ Privacy Policy страница (`/privacy-policy`)
- ✅ Terms of Service страница (`/terms`)
- ✅ Google Analytics компонент
- ✅ Conversion Tracking пиксель
- ✅ Form submission validation
- ✅ Backend API для заявок

### Технические улучшения
- ✅ Фиксирован `crossOrigin` в Font imports
- ✅ Фиксированы все `href="#"` ссылки в Footer
- ✅ Backend API endpoint для Quiz формы
- ✅ Tracking конверсий при отправке заявки

---

## 🚀 Инструкции по настройке

### 1. Google Analytics 4 (GA4)

**Шаг 1:** Перейдите на [Google Analytics](https://analytics.google.com)

**Шаг 2:** Создайте новое свойство для вашего сайта

**Шаг 3:** Получите GA4 ID (выглядит так: `G-XXXXXXXXXX`)

**Шаг 4:** Добавьте в `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Шаг 5:** Перезагрузите приложение

### 2. Google Ads Conversion Tracking

**Шаг 1:** Перейдите на [Google Ads](https://ads.google.com)

**Шаг 2:** Перейдите в Tools → Conversions

**Шаг 3:** Создайте новую конверсию:
- Тип: Website
- Категория: Lead
- Значение: 1 KZT

**Шаг 4:** Получите Conversion ID (выглядит так: `AW-123456789`)

**Шаг 5:** Скопируйте Label конверсии

**Шаг 6:** Обновите `components/GoogleAnalytics.tsx`:
```tsx
'send_to': 'AW-123456789/AW-123456789_ConversionLabel_YOUR_LABEL',
```

**Шаг 7:** Добавьте в `.env.local`:
```
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-123456789
```

### 3. Создание robots.txt

Создайте файл `public/robots.txt`:
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: *.pdf
Disallow: *.zip

Sitemap: https://alitrans.kz/sitemap.xml
```

### 4. Создание sitemap.xml

Установите пакет:
```bash
pnpm add next-sitemap
```

Создайте файл `next-sitemap.config.js`:
```js
module.exports = {
  siteUrl: 'https://alitrans.kz',
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: false,
};
```

### 5. Favicon

Замените файл `public/favicon.ico` на ваш логотип.

---

## 📊 Проверка статуса

### Проверить GA4 отслеживание
1. Откройте сайт
2. Откройте DevTools → Network
3. Ищите запросы к `googletagmanager.com`
4. Проверьте Google Analytics Real-time отчёты

### Проверить Google Ads конверсию
1. Заполните Quiz форму до конца
2. Откройте Google Ads → Tools → Conversions
3. Посмотрите Recent Conversions

### Проверить SEO
- Используйте [Google PageSpeed Insights](https://pagespeed.web.dev/)
- Используйте [Google Search Console](https://search.google.com/search-console)
- Используйте [Schema.org validator](https://validator.schema.org/)

---

## 🔧 API Endpoints

### POST /api/quiz

Отправляет заявку от пользователя.

**Request:**
```json
{
  "from": "Гуанчжоу",
  "to": "Алматы",
  "vol": "100-500",
  "kind": "electronics",
  "mode": "rail",
  "name": "Айгерим",
  "phone": "+7771800209",
  "wa": "+7771800209",
  "email": "example@mail.kz"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Заявка принята...",
  "orderId": "AXG-123456",
  "whatsappUrl": "https://wa.me/..."
}
```

---

## 🛡️ Legal Pages

- **Privacy Policy:** `/privacy-policy` ✅
- **Terms of Service:** `/terms` ✅

Обе страницы соответствуют требованиям Google Ads и GDPR.

---

## 📋 Checklist перед запуском Google Ads

- [ ] Google Analytics 4 подключена и отслеживает посещения
- [ ] Google Ads Conversion Tracking пиксель установлен
- [ ] Privacy Policy опубликована и видна в footer
- [ ] Terms of Service опубликована и видна в footer
- [ ] Quiz форма отправляет данные на backend
- [ ] Email отправки настроены (опционально)
- [ ] Favicon установлен
- [ ] Mobile версия тестирована (подойти с мобильного)
- [ ] Core Web Vitals оптимизированы
- [ ] Все ссылки работают (нет 404)

---

## 🎯 Рекомендации

1. **Email отправка:** Подключите SMTP для автоматической отправки расчётов на email после заявки
2. **SMS уведомления:** Подключите Twilio или аналог для SMS уведомлений
3. **Database:** Сохраняйте заявки в БД (Supabase, Neon) для истории
4. **UTM параметры:** Добавляйте в Google Ads кампанию UTM параметры для точного отслеживания
5. **A/B тестирование:** Создавайте разные версии Quiz форм для тестирования

---

## 📞 Контакты поддержки

Если возникают вопросы:
- Email: sales@alitrans.kz
- Telegram: @alitrans_kz
- WhatsApp: +7 771 800 02 09

---

**Last Updated:** 22 May 2026
