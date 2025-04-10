import React from 'react';

function MainProductShowcaseSkeleton() {
  return (
    <section className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-start">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center custom930:flex-row gap-6 w-full animate-pulse"
          >
            <div className="w-full sm:w-[250px] max-w-[250px] min-h-[250px] max-h-[250px] bg-gray-200 rounded-xl" />
            <div className="text-center max-w-[400px] w-full sm:text-left space-y-3">
              <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto sm:mx-0" />
              <div className="h-4 bg-gray-200 rounded w-full mx-auto sm:mx-0" />
              <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto sm:mx-0" />
              <div className="h-10 bg-gray-300 rounded-lg w-1/2 mx-auto sm:mx-0 mt-2" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default React.memo(MainProductShowcaseSkeleton);
