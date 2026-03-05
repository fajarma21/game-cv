import { FMContacts, FMTitle } from 'fajarma-react-lib';

import useGetData from '@/hooks/useGetData';
import type { ContactData } from '@/types';

import { LINKS } from './View.constants';
import css from './View.module.scss';

const Header = () => {
  const { data } = useGetData<ContactData>({
    collectionName: 'contact',
  });

  return (
    <header className={css.container}>
      <FMTitle />
      {data && <FMContacts className={css.contacts} links={LINKS(data[0])} />}
    </header>
  );
};

export default Header;
