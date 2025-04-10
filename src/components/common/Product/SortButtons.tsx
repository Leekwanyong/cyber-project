import React from 'react';

interface SortButtonsProps {
  currentSort: 'asc' | 'desc' | null;
  onSort: (order: 'asc' | 'desc') => void;
}

function SortButtons({ currentSort, onSort }: SortButtonsProps) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <button
        type="button"
        onClick={() => onSort('desc')}
        className={`px-4 py-2 border rounded hover:bg-gray-100 ${
          currentSort === 'desc' ? 'bg-gray-200' : ''
        }`}
      >
        가격 높은 순
      </button>
      <button
        type="button"
        onClick={() => onSort('asc')}
        className={`px-4 py-2 border rounded hover:bg-gray-100 ${
          currentSort === 'asc' ? 'bg-gray-200' : ''
        }`}
      >
        가격 낮은 순
      </button>
    </div>
  );
}

export default React.memo(SortButtons);
