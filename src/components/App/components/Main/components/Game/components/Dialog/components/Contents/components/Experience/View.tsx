import { useEffect, useState, type CSSProperties } from 'react';

import useExperienceStore from '@/stores/useExperienceStore';
import useGetData from '@/hooks/useGetData';
import type { ExperienceData } from '@/types';
import convertFSDate from '@/helpers/convertFSDate';
import LoaderIcon from '@/components/LoaderIcon';
import NoData from '@/components/NoData';

import css from './View.module.scss';

const Experience = () => {
  const [opened, setOpened] = useState<number[]>([]);

  const experience = useExperienceStore((state) => state.experience);
  const updateExperience = useExperienceStore(
    (state) => state.updateExperience
  );

  const { loading } = useGetData<ExperienceData>({
    collectionName: 'experience',
    onCompleted: (data) => {
      updateExperience(data);
    },
    skip: !!experience,
  });

  useEffect(() => {
    if (experience) setOpened([experience[0].id]);
  }, [experience]);

  const toggleOpen = (id: number) => {
    setOpened((prev) => {
      if (prev.includes(id)) return prev.filter((item) => item !== id);
      return [...prev, id];
    });
  };

  if (loading) return <LoaderIcon />;

  return (
    <div className={css.wrapper}>
      <h2>Experience</h2>
      {experience ? (
        <div>
          {experience.map(({ id, company, jobs, start, end, title }, index) => (
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
                    <p className={css.date}>
                      {convertFSDate(start)} - {convertFSDate(end)}
                    </p>
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
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default Experience;
