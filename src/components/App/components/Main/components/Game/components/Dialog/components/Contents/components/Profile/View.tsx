import useProfileStore from '@/stores/useProfileStore';
import useGetData from '@/hooks/useGetData';
import convertFSDate from '@/helpers/convertFSDate';
import type { ProfileData } from '@/types';

import Chip from './components/Chip';
import Picture from './components/Picture';
import css from './View.module.scss';

const Profile = () => {
  const profile = useProfileStore((state) => state.profile);
  const updateProfile = useProfileStore((state) => state.updateProfile);

  const { loading } = useGetData<ProfileData>({
    collectionName: 'profile',
    onCompleted: (data) => {
      updateProfile(data[0]);
    },
    skip: !!profile,
  });

  if (loading) return 'loading...';

  if (!profile) return 'no data';
  const { dob, name, jobs, skills } = profile;

  return (
    <div className={css.container}>
      <h2>Profile</h2>
      <Picture />
      <div>
        <div className={css.row}>
          <h3>
            {name} - {convertFSDate(dob, 'YYYY')}
          </h3>
          <div className={css.chipContainer}>
            {jobs.map((item, index) => (
              <Chip key={'list ' + index}>{item}</Chip>
            ))}
          </div>
        </div>
        <div className={css.row}>
          <h4>Skills</h4>
          <div className={css.chipContainer}>
            {skills.map((item, index) => (
              <Chip key={'list ' + index}>{item}</Chip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
