import { create } from 'zustand';

interface PaginationStore {
  pageViewed: number;
  setPage: (pageViewed: number) => void;
}

export const usePaginationStore = create<PaginationStore>((set) => ({
  pageViewed: 0,
  setPage: (pageViewed) => set({ pageViewed }),
}));
