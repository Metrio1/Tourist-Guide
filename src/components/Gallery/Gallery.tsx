import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { places } from '../../data/places';
import { useInView } from '../../hooks/useInView';
import Lightbox from './Lightbox';
import styles from './Gallery.module.scss';

interface GalleryImage {
  src: string;
  alt: string;
}

function buildGalleryImages(): GalleryImage[] {
  return places.flatMap((place) =>
    place.images.map((src, index) => ({
      src,
      alt: `${place.title} — фото ${index + 1}`,
    })),
  );
}

function getPageCount(container: HTMLDivElement): number {
  const { scrollWidth, clientWidth } = container;
  if (scrollWidth <= clientWidth) return 1;
  return Math.ceil(scrollWidth / clientWidth);
}

function getActivePage(container: HTMLDivElement, pageCount: number): number {
  const { scrollLeft, scrollWidth, clientWidth } = container;
  const maxScroll = scrollWidth - clientWidth;
  if (maxScroll <= 0 || pageCount <= 1) return 0;
  return Math.round((scrollLeft / maxScroll) * (pageCount - 1));
}

export default function Gallery() {
  const { ref, isInView } = useInView<HTMLElement>();
  const carouselRef = useRef<HTMLDivElement>(null);
  const images = useMemo(() => buildGalleryImages(), []);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [pageCount, setPageCount] = useState(1);
  const [activePage, setActivePage] = useState(0);

  const updateScrollState = useCallback(() => {
    const container = carouselRef.current;
    if (!container) return;

    const count = getPageCount(container);
    setPageCount(count);
    setActivePage(getActivePage(container, count));
  }, []);

  useEffect(() => {
    updateScrollState();
    window.addEventListener('resize', updateScrollState);
    return () => window.removeEventListener('resize', updateScrollState);
  }, [updateScrollState, images.length]);

  const scrollByPage = (direction: -1 | 1) => {
    const container = carouselRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction * container.clientWidth * 0.85,
      behavior: 'smooth',
    });
  };

  const scrollToPage = (page: number) => {
    const container = carouselRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const targetLeft = pageCount <= 1 ? 0 : (maxScroll / (pageCount - 1)) * page;

    container.scrollTo({ left: targetLeft, behavior: 'smooth' });
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = () => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + images.length) % images.length,
    );
  };

  const showNext = () => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % images.length,
    );
  };

  return (
    <section ref={ref} className={styles.section} aria-label="Галерея">
      <h2 className={`${styles.title} ${isInView ? styles.inView : ''}`}>
        Челябинская область в кадре
      </h2>

      <div className={styles.carouselWrapper}>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => scrollByPage(-1)}
          aria-label="Прокрутить галерею влево"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 18L8 12L14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div
          ref={carouselRef}
          className={`${styles.carousel} ${isInView ? styles.inView : ''}`}
          role="list"
          onScroll={updateScrollState}
        >
          {images.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              className={styles.thumbnail}
              onClick={() => openLightbox(index)}
              aria-label={`Открыть изображение ${image.alt}`}
              role="listitem"
            >
              <img
                className={styles.thumbnailImage}
                src={image.src}
                alt={image.alt}
                onError={(e) => {
                  e.currentTarget.src = '/images/fallback.jpg';
                }}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          className={styles.arrow}
          onClick={() => scrollByPage(1)}
          aria-label="Прокрутить галерею вправо"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 18L16 12L10 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {pageCount > 1 && (
        <div className={styles.indicators} role="tablist" aria-label="Страницы галереи">
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              className={`${styles.indicator} ${index === activePage ? styles.indicatorActive : ''}`}
              onClick={() => scrollToPage(index)}
              aria-label={`Перейти к странице ${index + 1}`}
              aria-selected={index === activePage}
            />
          ))}
        </div>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={showNext}
          onPrev={showPrev}
        />
      )}
    </section>
  );
}
