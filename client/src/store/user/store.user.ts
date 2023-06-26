import create from 'zustand';

interface StoreState {
  memberId: string | null;
  setMemberId: (memberId: string | null) => void;
}

export const useStore = create<StoreState>((set) => ({
  memberId: null,
  setMemberId: (memberId) => set({ memberId }),
}));
