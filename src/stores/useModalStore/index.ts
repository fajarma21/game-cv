import { create } from 'zustand';

import type { ModalStore } from './index.types';

const useModalStore = create<ModalStore>((set) => ({
  contentId: 0,
  changeContentId: (value) => {
    set(() => ({ contentId: value }));
  },
}));

export default useModalStore;
