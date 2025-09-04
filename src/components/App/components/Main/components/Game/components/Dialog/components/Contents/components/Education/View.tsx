import useGetData from '@/hooks/useGetData';
import useEducationStore from '@/stores/useEducationStore';
import type { EducationData } from '@/types';

import css from './View.module.scss';
import { EDUCATION_IMGS } from '@/constants/education';

const Education = () => {
  const education = useEducationStore((state) => state.education);
  const updateEducation = useEducationStore((state) => state.updateEducation);

  const { loading } = useGetData<EducationData>({
    collectionName: 'education',
    onCompleted: (data) => {
      updateEducation(data[0]);
    },
    skip: !!education,
  });

  if (loading) return 'loading...';

  if (!education) return 'no data';
  const { name, point, prefix, time, title } = education;

  return (
    <>
      <h2>Education</h2>
      <div className={css.container}>
        <img
          src={EDUCATION_IMGS[prefix]}
          alt={name}
          width={150}
          height={150}
          className={css.logo}
        />

        <div className={css.info}>
          <b className={css.time}>{time}</b>
          <h3>{name}</h3>
          <p>
            <i>{title}</i>
          </p>

          <b>GPA: {point}</b>
        </div>
      </div>
    </>
  );
};

export default Education;
