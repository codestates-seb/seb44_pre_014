import { isTestEnvironment } from 'utils/isTestEnvironment';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface TUserInfo {
  userInfo: {
    isLogin: boolean;
    memberId: number;
    username: string;
    email: string;
    content: string;
  };
  updateUserInfo: (info) => void;
}

const store = (set) => ({
  userInfo: {
    isLogin: true,
    memberId: 1,
    username: '닉네임',
    email: 'wlsdk7245@naver.com',
    content: '자기소개',
  },

  updateUserInfo: (info) => {
    set((data) => ({
      ...data,
      username: info.username,
      content: info.content,
    }));
  },
});

export const useStoreUserInfo = create<TUserInfo>()(
  isTestEnvironment ? devtools(store) : store
);

export const useGetUserInfo = () => {
  return useStoreUserInfo((state) => state.userInfo);
};
