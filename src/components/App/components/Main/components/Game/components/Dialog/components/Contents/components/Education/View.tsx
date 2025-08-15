import { DATA } from '@/constants/data';

import css from './View.module.scss';

const Education = () => {
  const { logo, name, point, title, time } = DATA.education;

  return (
    <>
      <h2>Education</h2>
      <div className={css.container}>
        <img
          src={logo}
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
