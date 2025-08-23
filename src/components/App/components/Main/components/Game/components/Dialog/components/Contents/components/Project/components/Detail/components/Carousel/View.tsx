import css from './View.module.scss';
import type { CarouselProps } from './View.types';

const Carousel = ({ images, title }: CarouselProps) => {
  return (
    <div className={css.carousel}>
      {images.map((item, index) => (
        <a key={`image-${index}`} href={item} target="_blank">
          <img src={item} alt={`${title}-${index}`} height={200} />
        </a>
      ))}
    </div>
  );
};

export default Carousel;
