import { isTestEnvironment } from 'utils/isTestEnvironment';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface TStoreCount {
  file: string;
  setFile: () => void;
}

// 사용방법
// const { count, plusCount, minusCount } = useStoreCount();

const store = (set) => ({
  file: '',
  setFile: () => {
    set(({ file }) => ({
      file: file,
    }));
  },
});

export const useStoreFile = create<TStoreCount>()(
  isTestEnvironment ? devtools(store) : store
);

export const useGetFile = () => {
  return useStoreFile((state) => state.file);
};
