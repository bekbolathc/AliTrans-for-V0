'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    image: '/images/letters/letter-jakko.png',
    alt: 'Рекомендательное письмо от ТОО "Жакко Караганда"',
    company: 'ТОО "Жакко Караганда"',
  },
  {
    id: 2,
    image: '/images/letters/letter-eko-shina.png',
    alt: 'Рекомендательное письмо от ТОО "ЭКО Шина"',
    company: 'ТОО "ЭКО Шина"',
  },
  {
    id: 3,
    image: '/images/letters/letter-freedom-drive.png',
    alt: 'Рекомендательное письмо от ТОО "Freedom Drive"',
    company: 'ТОО "Freedom Drive"',
  },
  {
    id: 4,
    image: '/images/letters/letter-araltuz.png',
    alt: 'Рекомендательное письмо от АО "Аралтұз"',
    company: 'АО "Аралтұз"',
  },
  {
    id: 5,
    image: '/images/letters/letter-olimp-medicus.png',
    alt: 'Благодарственное письмо от ТОО "Olimp Medicus"',
    company: 'ТОО "Olimp Medicus"',
  },
  {
    id: 6,
    image: '/images/letters/letter-tashmetov.png',
    alt: 'Рекомендательное письмо от ИП "Ташметов Б.С."',
    company: 'ИП "Ташметов Б.С."',
  },
  {
    id: 7,
    image: '/images/letters/letter-ashk.png',
    alt: 'Рекомендательное письмо от ТОО "АШК"',
    company: 'ТОО "АШК"',
  },
  {
    id: 8,
    image: '/images/letters/letter-nikol-baby.png',
    alt: 'Благодарственное письмо от ТОО "Nikol Baby"',
    company: 'ТОО "Nikol Baby"',
  },
  {
    id: 9,
    image: '/images/letters/letter-prisma-overseas.png',
    alt: 'Рекомендательное письмо от ТОО "Призма Оверсис"',
    company: 'ТОО "Призма Оверсис"',
  },
  {
    id: 10,
    image: '/images/letters/letter-aziashintorg.png',
    alt: 'Рекомендательное письмо от ТОО "АзияШинТорг"',
    company: 'ТОО "АзияШинТорг"',
  },
  {
    id: 11,
    image: '/images/letters/letter-prisma-cert.png',
    alt: 'Благодарственное письмо от PRISMA',
    company: 'PRISMA',
  },
  {
    id: 12,
    image: '/images/letters/letter-almatherm.png',
    alt: 'Рекомендательное письмо от Алматерм',
    company: 'Алматерм',
  },
  {
    id: 13,
    image: '/images/letters/letter-pomo.png',
    alt: 'Рекомендательное письмо от ТОО "Pomo Design Center"',
    company: 'ТОО "Pomo Design Center"',
  },
  {
    id: 14,
    image: '/images/letters/letter-unit.png',
    alt: 'Рекомендательное письмо от ТОО "UNIT-CO.KZ"',
    company: 'ТОО "UNIT-CO.KZ"',
  },
  {
    id: 15,
    image: '/images/letters/letter-shinimpex.png',
    alt: 'Благодарственное письмо от ТОО "Шинимпекс"',
    company: 'ТОО "Шинимпекс"',
  },
];

export function Testimonials() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);
  const autoPlayTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const SLIDE_INTERVAL = 5000;

  // Responsive visible count
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 640) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(Math.min(index * visibleCount, maxIndex));
    pauseAutoPlay();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
      pauseAutoPlay();
    } else if (e.key === 'ArrowRight') {
      handleNext();
      pauseAutoPlay();
    }
  };

  const pauseAutoPlay = () => {
    setIsAutoPlay(false);
    if (autoPlayTimer.current) {
      clearTimeout(autoPlayTimer.current);
    }
    if (resumeTimer.current) {
      clearTimeout(resumeTimer.current);
    }
    resumeTimer.current = setTimeout(() => {
      setIsAutoPlay(true);
    }, 5000);
  };

  const handleMouseEnter = () => {
    setIsAutoPlay(false);
    if (autoPlayTimer.current) {
      clearTimeout(autoPlayTimer.current);
    }
    if (resumeTimer.current) {
      clearTimeout(resumeTimer.current);
    }
  };

  const handleMouseLeave = () => {
    resumeTimer.current = setTimeout(() => {
      setIsAutoPlay(true);
    }, 5000);
  };

  useEffect(() => {
    if (!isAutoPlay || selectedImage) return;

    autoPlayTimer.current = setTimeout(() => {
      handleNext();
    }, SLIDE_INTERVAL);

    return () => {
      if (autoPlayTimer.current) {
        clearTimeout(autoPlayTimer.current);
      }
    };
  }, [isAutoPlay, currentIndex, selectedImage, handleNext]);

  // Calculate dots
  const totalDots = Math.ceil(testimonials.length / visibleCount);
  const activeDot = Math.min(Math.floor(currentIndex / visibleCount), totalDots - 1);

  // Calculate item width percentage
  const itemWidth = 100 / visibleCount;

  if (testimonials.length === 0) return null;

  return (
    <>
      <section className="testimonials" id="testimonials">
        <div className="testimonials__container">
          <div className="testimonials__header">
            <span className="testimonials__number">/06</span>
            <h2 className="testimonials__title">Нас рекомендуют</h2>
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
              onClick={() => {
                handlePrev();
                pauseAutoPlay();
              }}
              aria-label="Предыдущее письмо"
              type="button"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className="testimonials__track-wrapper">
              <div 
                className="testimonials__track"
                style={{
                  transform: `translateX(-${currentIndex * itemWidth}%)`,
                }}
              >
                {testimonials.map((item) => (
                  <div
                    key={item.id}
                    className="testimonials__item"
                    style={{ flex: `0 0 ${itemWidth}%` }}
                  >
                    <button
                      className="testimonials__image-wrapper"
                      onClick={() => {
                        setSelectedImage(item.image);
                        pauseAutoPlay();
                      }}
                      aria-label={`Открыть письмо от ${item.company}`}
                      type="button"
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="testimonials__image"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </button>
                    <p className="testimonials__company">{item.company}</p>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="testimonials__arrow testimonials__arrow--next"
              onClick={() => {
                handleNext();
                pauseAutoPlay();
              }}
              aria-label="Следующее письмо"
              type="button"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          <div className="testimonials__dots">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                className={`testimonials__dot ${index === activeDot ? 'testimonials__dot--active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Перейти к слайду ${index + 1} из ${totalDots}`}
                aria-current={index === activeDot ? 'true' : 'false'}
                type="button"
              />
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
          <div className="testimonials__modal-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Письмо в полном размере"
              width={800}
              height={1100}
              quality={95}
              className="testimonials__modal-image"
            />
          </div>
        </div>
      )}
    </>
  );
}
