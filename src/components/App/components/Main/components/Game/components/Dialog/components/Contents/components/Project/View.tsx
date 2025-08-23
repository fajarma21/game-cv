import { DATA } from '@/constants/data';

import Detail from './components/Detail';
import { useState } from 'react';
import css from './View.module.scss';
import { useIntersect } from 'fajarma-react-lib';

const Project = () => {
  const [activeItem, setActiveItem] = useState(DATA.project[0]);

  const { ref: topRef, intersecting: topIntersecting } = useIntersect({
    callback: () => console.log(),
  });
  const { ref: botRef, intersecting: botIntersecting } = useIntersect({
    callback: () => console.log(),
  });

  return (
    <div>
      <h2>Project</h2>
      <div className={css.container}>
        <div className={css.left}>
          <div className={css.thumbnailContainer}>
            {!topIntersecting && <div className={css.shadow} data-type="top" />}
            <div ref={topRef} />
            {DATA.project.map((item) => {
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
