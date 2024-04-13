interface PaginationStore {
  pageViewed: number;
  setPage: (pageViewed: number) => void;
}
