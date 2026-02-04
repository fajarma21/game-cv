import { useState } from 'react';
import {
  FaChevronDown,
  FaChevronUp,
  FaCube,
  FaGithub,
  FaLink,
  FaLinkSlash,
} from 'react-icons/fa6';
import { FMProjectCard, useIntersect } from 'fajarma-react-lib';

import Carousel from './components/Carousel';
import css from './View.module.scss';
import type { CardProps } from './View.types';

const Card = ({ data, isMobile }: CardProps) => {
  const { images, title, videos } = data;

  const [visible, setVisible] = useState(false);

  const { ref } = useIntersect<HTMLDivElement>(setVisible);

  return (
    <div ref={ref} className={css.cardModifier}>
      <FMProjectCard
        {...data}
        icon={{
          collapse: <FaChevronUp />,
          expand: <FaChevronDown />,
          link: <FaLink />,
          noLink: <FaLinkSlash />,
          repo: <FaGithub />,
          stacks: <FaCube />,
        }}
        isMobile={isMobile}
        previewComp={<Carousel images={images} title={title} videos={videos} />}
        visible={visible}
      />
    </div>
  );
};

export default Card;
