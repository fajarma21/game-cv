import useProfileStore from '@/stores/useProfileStore';
import useGetData from '@/hooks/useGetData';
import convertFSDate from '@/helpers/convertFSDate';
import type { ProfileData } from '@/types';
import LoaderIcon from '@/components/LoaderIcon';
import NoData from '@/components/NoData';

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

  if (loading) return <LoaderIcon />;

  return (
    <div className={css.container}>
      <h2>Profile</h2>
      {profile ? (
        <>
          <Picture src={profile.photo} />
          <div>
            <div className={css.row}>
              <h3>
                {profile.name} - {convertFSDate(profile.dob, 'YYYY')}
              </h3>
              <div className={css.chipContainer}>
                {profile.jobs.map((item, index) => (
                  <Chip key={'list ' + index}>{item}</Chip>
                ))}
              </div>
            </div>
            <div className={css.row}>
              <h4>Skills</h4>
              <div className={css.chipContainer}>
                {profile.skills.map((item, index) => (
                  <Chip key={'list ' + index}>{item}</Chip>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default Profile;
