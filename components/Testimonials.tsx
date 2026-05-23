'use client';

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    image: '/images/letter-jakko.png',
    alt: 'Рекомендательное письмо от ТОО "Жакко Караганда"',
    company: 'ТОО "Жакко Караганда"',
  },
  {
    id: 2,
    image: '/images/letter-aragtuz.png',
    alt: 'Рекомендательное письмо от АО "Аралтұз"',
    company: 'АО "Аралтұз"',
  },
  {
    id: 3,
    image: '/images/letter-pano.png',
    alt: 'Рекомендательное письмо от ТОО "Pomo Design Center"',
    company: 'ТОО "Pomo Design Center"',
  },
  {
    id: 4,
    image: '/images/letter-olimp.png',
    alt: 'Рекомендательное письмо от ТОО "Olimp Medicus"',
    company: 'ТОО "Olimp Medicus"',
  },
  {
    id: 5,
    image: '/images/letter-freedom.png',
    alt: 'Рекомендательное письмо от ТОО "Freedom Drive"',
    company: 'ТОО "Freedom Drive"',
  },
  {
    id: 6,
    image: '/images/letter-prisma.png',
    alt: 'Рекомендательное письмо от ТОО "Призма Оверсис"',
    company: 'ТОО "Призма Оверсис"',
  },
];

export function Testimonials() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="testimonials">
        <div className="testimonials__container">
          <div className="testimonials__header">
            <span className="testimonials__number">/08</span>
            <h2 className="testimonials__title">Рекомендации наших партнёров</h2>
          </div>

          <div className="testimonials__grid">
            {testimonials.map((item) => (
              <div key={item.id} className="testimonials__item">
                <button
                  className="testimonials__image-wrapper"
                  onClick={() => setSelectedImage(item.image)}
                  aria-label={`Открыть письмо от ${item.company}`}
                  type="button"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={400}
                    height={500}
                    className="testimonials__image"
                    quality={85}
                  />
                  <div className="testimonials__zoom-hint">Нажмите для увеличения</div>
                </button>
                <p className="testimonials__company">{item.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="testimonials__modal"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Увеличенное изображение письма"
        >
          <button
            className="testimonials__modal-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Закрыть"
            type="button"
          >
            ✕
          </button>
          <div className="testimonials__modal-content">
            <Image
              src={selectedImage}
              alt="Письмо в полном размере"
              width={1000}
              height={1250}
              quality={95}
              className="testimonials__modal-image"
            />
          </div>
        </div>
      )}
    </>
  );
}
