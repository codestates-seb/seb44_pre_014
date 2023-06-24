import { isTestEnvironment } from 'utils/isTestEnvironment';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface TStoreFile {
  newFile: string;
  setnewFile: (data: string) => void;
}

// 사용방법
// const { newFile, setnewFile } = useStoreCount();

const store = (set) => ({
  newFile: '',
  setnewFile: (data) => {
    set(({ state }) => ({
      newFile: data,
    }));
  },
});

export const useStoreFile = create<TStoreFile>()(
  isTestEnvironment ? devtools(store) : store
);

export const useGetFile = () => {
  return useStoreFile((state) => state.newFile);
};
