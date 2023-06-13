import create from 'zustand';

interface TStoreCount {
  count: number;
  plusCount: () => void;
  minusCount: () => void;
}

export const useStoreCount = create<TStoreCount>((set) => ({
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
}));

export const useGetCount = () => {
  return useStoreCount((state) => state.count);
};
