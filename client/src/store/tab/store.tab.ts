import { isTestEnvironment } from 'utils/isTestEnvironment';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface TStoreCount {
  tab: number;
  changeTab: (tabId: number) => void;
}

const store = (set) => ({
  tab: 0,

  changeTab: (tabId) => {
    set(({ tab }) => ({
      tab: tabId,
    }));
  },
});

export const useStoreTab = create<TStoreCount>()(
  isTestEnvironment ? devtools(store) : store
);

export const useGetTab = () => {
  return useStoreTab((state) => state.tab);
};
