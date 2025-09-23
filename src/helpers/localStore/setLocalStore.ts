import { getLS, setLS } from 'fajarma-package';

import type { LocalData } from '@/types';
import { LS_DATA } from './constants';

const setLocalStore = (data: Partial<LocalData>, prevData?: LocalData) => {
  const localData = prevData ? prevData : getLS<LocalData>(LS_DATA);
  setLS(LS_DATA, { ...localData, ...data });
};

export default setLocalStore;
