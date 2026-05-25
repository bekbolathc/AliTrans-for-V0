'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    image: '/images/letter-eko-shina.png',
    alt: 'Рекомендательное письмо от ТОО "ЭКО Шина"',
    company: 'ТОО "ЭКО Шина"',
  },
  {
    id: 2,
    image: '/images/letter-aziashintorg.png',
    alt: 'Рекомендательное письмо от ТОО "АзияШинТорг"',
    company: 'ТОО "АзияШинТорг"',
  },
  {
    id: 3,
    image: '/images/letter-prisma.png',
    alt: 'Благодарственное письмо от PRISMA',
    company: 'PRISMA',
  },
  {
    id: 4,
    image: '/images/letter-almatherm.png',
    alt: 'Рекомендательное письмо от ИШ "Байтелов Б.Ж."',
    company: 'Алматерм',
  },
  {
    id: 5,
    image: '/images/letter-unit.png',
    alt: 'Рекомендательное письмо от ТОО "UNIT-CO.KZ"',
    company: 'UNIT-CO.KZ',
  },
  {
    id: 6,
    image: '/images/letter-ashk.png',
    alt: 'Рекомендательное письмо от ТОО "АШК"',
    company: 'ТОО "АШК"',
  },
];

export function Testimonials() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const SLIDE_INTERVAL = 5000; // 5 seconds

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    resetAutoPlay();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    resetAutoPlay();
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    resetAutoPlay();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  const resetAutoPlay = () => {
    setIsAutoPlay(false);
    if (autoPlayTimer.current) {
      clearTimeout(autoPlayTimer.current);
    }
    autoPlayTimer.current = setTimeout(() => {
      setIsAutoPlay(true);
    }, 5000);
  };

  const handleMouseEnter = () => {
    setIsAutoPlay(false);
    if (autoPlayTimer.current) {
      clearTimeout(autoPlayTimer.current);
    }
  };

  const handleMouseLeave = () => {
    setIsAutoPlay(true);
  };

  useEffect(() => {
    if (!isAutoPlay) return;

    autoPlayTimer.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, SLIDE_INTERVAL);

    return () => {
      if (autoPlayTimer.current) {
        clearTimeout(autoPlayTimer.current);
      }
    };
  }, [isAutoPlay]);

  return (
    <>
      <section className="testimonials">
        <div className="testimonials__container">
          <div className="testimonials__header">
            <span className="testimonials__number">/06</span>
            <h2 className="testimonials__title">Рекомендации наших партнёров</h2>
          </div>

          <div
            className="testimonials__slider"
            ref={sliderRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onKeyDown={handleKeyDown}
            role="region"
            aria-label="Слайдер рекомендаций партнёров"
            tabIndex={0}
          >
            <button
              className="testimonials__arrow testimonials__arrow--prev"
              onClick={handlePrev}
              aria-label="Предыдущее письмо"
              type="button"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div 
              className="testimonials__track"
              style={{
                transform: `translateX(calc(-${currentIndex} * (33.333% + clamp(13px, 2vw, 24px))))`,
              }}
            >
              {testimonials.map((item, index) => (
                <div
                  key={item.id}
                  className={`testimonials__item ${index === currentIndex ? 'testimonials__item--active' : ''}`}
                >
                  <button
                    className="testimonials__image-wrapper"
                    onClick={() => {
                      setSelectedImage(item.image);
                      resetAutoPlay();
                    }}
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

            <div className="testimonials__dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonials__dot ${index === currentIndex ? 'testimonials__dot--active' : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Перейти к письму ${index + 1} из ${testimonials.length}`}
                  aria-current={index === currentIndex ? 'true' : 'false'}
                  type="button"
                />
              ))}
            </div>

            <button
              className="testimonials__arrow testimonials__arrow--next"
              onClick={handleNext}
              aria-label="Следующее письмо"
              type="button"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
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
