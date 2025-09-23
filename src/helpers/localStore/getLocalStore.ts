import { getLS } from 'fajarma-package';

import type { LocalData } from '@/types';

import { LOCAL_DEFAULT, LS_DATA } from './constants';

const getLocalStore = () => {
  return getLS<LocalData>(LS_DATA) || LOCAL_DEFAULT;
};

export default getLocalStore;
