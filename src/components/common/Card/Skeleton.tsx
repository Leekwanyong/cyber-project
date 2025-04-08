interface Props {
  count?: number;
}

function Skeleton({ count = 1 }: Props) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={`skeleton-${i}`}
          className="bg-white shadow-md rounded-2xl overflow-hidden animate-pulse"
        >
          <div className="w-full h-[150px] bg-gray-200" />
          <div className="p-3 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-3 bg-gray-200 rounded w-1/2" />
            <div className="h-5 bg-gray-300 rounded w-1/3 mt-2" />
          </div>
        </div>
      ))}
    </>
  );
}

export default Skeleton;
