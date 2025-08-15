import { DATA } from '@/constants/data';

import { useState } from 'react';
import css from './View.module.scss';

const Project = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <div>
      <h2>Project</h2>
      <div className={css.container}>
        <div>
          {DATA.project.map(({ id, title, image }) => (
            <button
              key={id}
              type="button"
              className={css.thumbnail}
              data-active={activeId === id || undefined}
              onClick={() => setActiveId(id)}
            >
              <div className={css.imgContainer}>
                <img src={image} alt={title} />
              </div>

              <div className={css.titleContainer}>
                <h4>{title}</h4>
              </div>
            </button>
          ))}
        </div>
        <div className={css.highlight}>highligth</div>
      </div>
    </div>
  );
};

export default Project;
