'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface PaginateButtonsProps {
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}

const PaginateButtons = ({
  setPageIndex,
  currentPage,
}: PaginateButtonsProps) => {
  return (
    <div className="flex w-full justify-center gap-4">
      {currentPage > 0 && (
        <div
          className="cursor-pointer p-4
                        flex items-center justify-center
                        bg-white rounded-full
                        shadow-md
                        hover:bg-gray-100
                        transition-colors  
                        "
          onClick={() => setPageIndex((prev: number) => prev - 1)}
        >
          <Image
            src="/arrow_left.png"
            width={24}
            height={24}
            alt="arrow left"
          />
        </div>
      )}

      <div
        className="cursor-pointer p-4
            flex items-center justify-center
            bg-white rounded-full
            shadow-md
            hover:bg-gray-100
            transition-colors
             
          "
        onClick={() => setPageIndex((prev: number) => prev + 1)}
      >
        <Image
          src="/arrow_right.png"
          width={24}
          height={24}
          alt="arrow right"
        />
      </div>
    </div>
  );
};

export default PaginateButtons;
