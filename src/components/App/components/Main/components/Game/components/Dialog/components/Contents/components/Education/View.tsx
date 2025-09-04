import useGetData from '@/hooks/useGetData';
import useEducationStore from '@/stores/useEducationStore';
import type { EducationData } from '@/types';
import { EDUCATION_IMGS } from '@/constants/education';
import LoaderIcon from '@/components/LoaderIcon';
import NoData from '@/components/NoData';

import css from './View.module.scss';

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

  if (loading) return <LoaderIcon />;

  return (
    <>
      <h2>Education</h2>
      {education ? (
        <div className={css.container}>
          <img
            src={EDUCATION_IMGS[education.prefix]}
            alt={education.name}
            width={150}
            height={150}
            className={css.logo}
          />

          <div className={css.info}>
            <b className={css.time}>{education.time}</b>
            <h3>{education.name}</h3>
            <p>
              <i>{education.title}</i>
            </p>

            <b>GPA: {education.point}</b>
          </div>
        </div>
      ) : (
        <NoData />
      )}
    </>
  );
};

export default Education;
