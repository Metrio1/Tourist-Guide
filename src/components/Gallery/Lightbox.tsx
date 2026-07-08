import { useEffect } from 'react';
import styles from './Lightbox.module.scss';

export interface LightboxImage {
  src: string;
  alt: string;
}

export interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const image = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={styles.overlay}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Просмотр изображения"
    >
      <button
        type="button"
        className={styles.close}
        onClick={onClose}
        aria-label="Закрыть просмотр"
      >
        ×
      </button>

      <button
        type="button"
        className={styles.nav}
        onClick={onPrev}
        aria-label="Предыдущее изображение"
      >
        ‹
      </button>

      <div
        className={styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={currentIndex}
          className={styles.image}
          src={image.src}
          alt={image.alt}
          onError={(e) => {
            e.currentTarget.src = '/images/fallback.jpg';
          }}
        />
      </div>

      <button
        type="button"
        className={`${styles.nav} ${styles.navNext}`}
        onClick={onNext}
        aria-label="Следующее изображение"
      >
        ›
      </button>
    </div>
  );
}
