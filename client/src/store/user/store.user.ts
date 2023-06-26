import create from 'zustand';

interface StoreState {
  memberId: string | null;
  setMemberId: (memberId: string | null) => void;
}

export const useUserStore = create<StoreState>((set) => ({
  memberId: null,
  setMemberId: (memberId) => set({ memberId }),
}));
