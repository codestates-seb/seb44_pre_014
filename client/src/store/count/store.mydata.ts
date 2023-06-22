import { isTestEnvironment } from 'utils/isTestEnvironment';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface TStoreData {
  myname: string;
  myemail: string;
  mycontent: string;
  setName: () => void;
  setEmail: () => void;
}

// 사용방법
// const { count, plusCount, minusCount } = useStoreCount();

const store = (set) => ({
  myname: '승효',
  myemail: 'email',
  mycontent: '기본 소개입니다.',
  setName: () => {
    set(({ newName }) => ({
      myname: newName,
    }));
  },
  setEmail: () => {
    set(({ myEmail }) => ({
      myemail: myEmail,
    }));
  },
});

export const useStoreMydata = create<TStoreData>()(
  isTestEnvironment ? devtools(store) : store
);

export const useGetusername = () => {
  return useStoreMydata((state) => state.myname);
};
export const useGetemail = () => {
  return useStoreMydata((state) => state.myemail);
};
export const useGetContent = () => {
  return useStoreMydata((state) => state.mycontent);
};
