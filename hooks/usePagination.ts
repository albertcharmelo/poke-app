'use client';
import { useState, useEffect } from 'react';

function usePagination(key: string, initialValue: number) {
  const [value, setValue] = useState<number>(
    parseInt(localStorage.getItem(key) || String(initialValue)),
  );

  useEffect(() => {
    localStorage.setItem(key, value.toString());
  }, [key, value]);

  return [value, setValue] as const;
}

export default usePagination;
