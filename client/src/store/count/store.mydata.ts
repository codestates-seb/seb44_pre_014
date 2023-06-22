import { isTestEnvironment } from 'utils/isTestEnvironment';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface TStoreData {
  myname: string;
  setName: () => void;
}

// 사용방법
// const { count, plusCount, minusCount } = useStoreCount();

const store = (set) => ({
  myname: '기본이름',
  setName: () => {
    set(({ myname }) => ({
      myname: myname,
    }));
  },
});

export const useStoreMydata = create<TStoreData>()(
  isTestEnvironment ? devtools(store) : store
);

export const useGetusername = () => {
  return useStoreMydata((state) => state.myname);
};
