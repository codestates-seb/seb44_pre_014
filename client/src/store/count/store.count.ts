import { isTestEnvironment } from 'utils/isTestEnvironment';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface TStoreCount {
  count: number;
  plusCount: () => void;
  minusCount: () => void;
}

// 사용방법
// const { count, plusCount, minusCount } = useStoreCount();

const store = (set) => ({
  count: 0,

  plusCount: () => {
    set(({ count }) => ({
      count: count + 1,
    }));
  },

  minusCount: () => {
    set(({ count }) => ({
      count: count - 1,
    }));
  },
});

export const useStoreCount = create<TStoreCount>()(
  isTestEnvironment ? devtools(store) : store
);

export const useGetCount = () => {
  return useStoreCount((state) => state.count);
};
