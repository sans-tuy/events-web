import { useState } from "react";

export default function usePagination(maxPageNum: number) {
  const [pageNum, setPageNum] = useState<number>(1);

  const goNextPage = () => {
    if (pageNum < maxPageNum) {
      setPageNum(pageNum + 1);
    }
  };

  const goPrevPage = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  const resetPage = () => {
    setPageNum(1);
  };

  return {
    currPage: pageNum,
    goNextPage,
    goPrevPage,
    resetPage,
  };
}
