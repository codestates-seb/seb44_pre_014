import create from 'zustand';

interface StoreState {
  memberId: string | null;
  isLoading: boolean;
  setMemberId: (memberId: string | null) => void;
}

export const useUserStore = create<StoreState>((set) => ({
  memberId: null,
  isLoading: true,
  setMemberId: (memberId) => set({ isLoading: false, memberId }),
}));
