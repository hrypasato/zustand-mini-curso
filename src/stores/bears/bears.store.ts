import { create } from 'zustand'

interface Bear {
    id: number;
    name: string;
}

interface BearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;
  bears: Bear[];
  computed: {
    totalBears: number;
  };

  increaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  increasePandaBears: (by: number) => void;
  addBear: () => void;
  clearBears: () => void;
}

export const useBearStore = create<BearState>()((set, get) => ({
  blackBears: 10,
  polarBears: 5,
  pandaBears: 1,
  bears: [{ id: 1, name: 'Oso # 1' }],
  
  computed: {
    get totalBears() {
        const { blackBears, polarBears, pandaBears, bears } = get()
        return blackBears + polarBears + pandaBears + bears.length;
    }
  },

  increaseBlackBears: (by: number) => set((state) => ({ blackBears: state.blackBears + by })),
  increasePolarBears: (by: number) => set((state) => ({ polarBears: state.polarBears + by })),
  increasePandaBears: (by: number) => set((state) => ({ pandaBears: state.pandaBears + by })),
  addBear: () => set((state) => ({ 
    bears: [...state.bears, { id: state.bears.length + 1, name: `Oso # ${state.bears.length + 1}` }] 
    })),
  clearBears: () => set({ bears: [] }),
}))