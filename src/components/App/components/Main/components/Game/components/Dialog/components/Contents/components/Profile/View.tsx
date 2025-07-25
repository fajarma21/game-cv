import Chip from './components/Chip';
import Picture from './components/Picture';

import { PROFILE_DATA } from './View.constants';
import css from './View.module.scss';

const Profile = () => {
  return (
    <>
      <h2>Profile</h2>
      <div>
        <Picture />

        <div>
          {PROFILE_DATA.map(({ title, subTitle, list }, index) => (
            <div key={'list ' + index} className={css.row}>
              {title && <h3>{title}</h3>}
              {subTitle && <h4>{subTitle}</h4>}
              <div className={css.chipContainer}>
                {list.map((item, index2) => (
                  <Chip key={'list ' + index2}>{item}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
