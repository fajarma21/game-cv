import { useState, type CSSProperties } from 'react';
import { useIntersect } from 'fajarma-react-lib';

import { DATA } from '@/constants/data';

import Detail from './components/Detail';
import { HIDE } from './View.constants';
import css from './View.module.scss';

const PROJECT = DATA.project.filter((item) => !HIDE.includes(item.id));

const Project = () => {
  const [activeItem, setActiveItem] = useState(PROJECT[0]);
  const [topIntersecting, setTopIntersecting] = useState(false);
  const [botIntersecting, setBotIntersecting] = useState(false);

  const { ref: topRef } = useIntersect<HTMLDivElement>((value) =>
    setTopIntersecting(value)
  );
  const { ref: botRef } = useIntersect<HTMLDivElement>((value) =>
    setBotIntersecting(value)
  );

  return (
    <div>
      <h2>Project</h2>
      <div
        className={css.container}
        style={{ '--ColH': '440px' } as CSSProperties}
      >
        <div className={css.left}>
          <div className={css.thumbnailContainer}>
            {!topIntersecting && <div className={css.shadow} data-type="top" />}
            <div ref={topRef} />
            {PROJECT.map((item) => {
              const { id, icon, title, images } = item;
              return (
                <button
                  key={id}
                  type="button"
                  className={css.thumbnail}
                  data-active={activeItem.id === id || undefined}
                  onClick={() => setActiveItem(item)}
                >
                  <div className={css.imgContainer}>
                    <img src={icon || images[0]} alt={title} />
                  </div>

                  <div className={css.titleContainer}>
                    <h4>{title}</h4>
                  </div>
                </button>
              );
            })}
            {!botIntersecting && <div className={css.shadow} data-type="bot" />}
            <div ref={botRef} />
          </div>
        </div>
        <Detail key={activeItem.id} data={activeItem} />
      </div>
    </div>
  );
};

export default Project;
