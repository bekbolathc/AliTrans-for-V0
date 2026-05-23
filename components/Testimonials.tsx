'use client';

import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    image: '/images/letter-jakko.png',
    alt: 'Рекомендательное письмо от JAKKO Караганды',
    company: 'JAKKO Караганды',
  },
  {
    id: 2,
    image: '/images/letter-aragtuz.png',
    alt: 'Рекомендательное письмо от АРАГТУЗ',
    company: 'АРАГТУЗ',
  },
  {
    id: 3,
    image: '/images/letter-pano.png',
    alt: 'Рекомендательное письмо от РАНО Design Center',
    company: 'РАНО Design Center',
  },
  {
    id: 4,
    image: '/images/letter-olimp.png',
    alt: 'Рекомендательное письмо от Olimp Medicus',
    company: 'Olimp Medicus',
  },
  {
    id: 5,
    image: '/images/letter-freedom.png',
    alt: 'Рекомендательное письмо от Freedom Drive',
    company: 'Freedom Drive',
  },
  {
    id: 6,
    image: '/images/letter-prisma.png',
    alt: 'Рекомендательное письмо от ПРИЗМА Overseas',
    company: 'ПРИЗМА Overseas',
  },
];

export function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <span className="testimonials__number">/08</span>
          <h2 className="testimonials__title">Рекомендации наших партнёров</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonials__item">
              <div className="testimonials__image-wrapper">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={400}
                  height={500}
                  className="testimonials__image"
                  quality={85}
                />
              </div>
              <p className="testimonials__company">{item.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
