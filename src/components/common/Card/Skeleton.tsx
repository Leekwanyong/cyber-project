interface Props {
  mode?: 'multiple' | 'inline';
  count?: number;
  itemClassName?: string;
}

function Skeleton({
  mode = 'inline',
  count = 1,
  itemClassName = 'bg-white shadow-md rounded-2xl overflow-hidden animate-pulse',
}: Props) {
  const renderSingleItem = (key?: string | number) => (
    <div key={key} className={itemClassName}>
      <div className="w-full h-[150px] bg-gray-200" />
      <div className="p-3 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
        <div className="h-5 bg-gray-300 rounded w-1/3 mt-2" />
      </div>
    </div>
  );

  switch (mode) {
    case 'inline':
      return (
        <>{Array.from({ length: count }).map((_, i) => renderSingleItem(`inline-skeleton-${i}`))}</>
      );
    case 'multiple':
    default:
      return (
        <>
          {Array.from({ length: count }).map((_, i) => renderSingleItem(`multiple-skeleton-${i}`))}
        </>
      );
  }
}

export default Skeleton;
