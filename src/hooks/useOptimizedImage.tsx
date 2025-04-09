interface Props {
  url: string;
  isWebp?: boolean;
  width?: number;
}
function useOptimizedImage({ url = '', isWebp = false, width }: Props) {
  const http = url.replace(/^https?:\/\//, '');
  const query = [`url=${http}`];
  if (isWebp) query.push('output=webp');
  if (width) query.push(`width=${width}`);
  return `https://images.weserv.nl/?${query.join('&')}`;
}

export default useOptimizedImage;
