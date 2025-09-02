import { useState, type CSSProperties } from 'react';

import { DATA } from '@/constants/data';

import css from './View.module.scss';

const Experience = () => {
  const [opened, setOpened] = useState([DATA.experience[0].id]);

  const toggleOpen = (id: number) => {
    setOpened((prev) => {
      if (prev.includes(id)) return prev.filter((item) => item !== id);
      return [...prev, id];
    });
  };

  return (
    <div className={css.wrapper}>
      <h2>Experience</h2>
      <div>
        {DATA.experience.map(({ id, company, jobs, time, title }, index) => (
          <div
            key={`exp-${index}`}
            style={{ '--delay': `${(index + 1) * 100}ms` } as CSSProperties}
            className={css.container}
            data-active={opened.includes(id) || undefined}
          >
            <div className={css.row}>
              <div className={css.left}>
                <button
                  type="button"
                  className={css.dot}
                  onClick={() => toggleOpen(id)}
                />
              </div>
              <div className={css.right}>
                <button
                  type="button"
                  className={css.headBtn}
                  onClick={() => toggleOpen(id)}
                >
                  <p className={css.date}>{time}</p>
                  <h3>{company}</h3>
                  <p className={css.title}>{title}</p>
                </button>
              </div>
            </div>
            <div className={css.row}>
              <div className={css.left} />
              <div className={css.right}>
                <ul className={css.desc}>
                  {jobs.map((item, index) => (
                    <li key={`job-${index}`}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
