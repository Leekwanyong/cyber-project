import React from 'react';

function ProductDetailSkeleton() {
  return (
    <section>
      <article className="flex flex-col md:flex-row gap-8 px-4 md:px-0 mt-28 mb-24 max-w-7xl mx-auto animate-pulse">
        <div className="flex-1 flex flex-col justify-center items-center gap-4">
          <div className="w-full max-w-[400px] h-[300px] bg-gray-200 rounded-xl shadow-md" />
        </div>

        <div className="flex-1 flex flex-col justify-between gap-4">
          <div>
            <div className="w-24 h-4 bg-gray-200 rounded mb-2" />
            <div className="w-3/4 h-6 bg-gray-300 rounded mb-3" />
            <div className="w-1/3 h-5 bg-blue-200 rounded" />
          </div>
          <div className="w-1/2 h-10 bg-gray-300 rounded-xl" />
          <div className="space-y-2 mt-6">
            <div className="w-full h-3 bg-gray-200 rounded" />
            <div className="w-full h-3 bg-gray-200 rounded" />
            <div className="w-2/3 h-3 bg-gray-200 rounded" />
          </div>
        </div>
      </article>
    </section>
  );
}
export default React.memo(ProductDetailSkeleton);
