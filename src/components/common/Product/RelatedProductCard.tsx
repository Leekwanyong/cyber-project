import { Product } from '../../../types/card';
import UseOptimizedImage from '../../../hooks/useOptimizedImage';
import imageErrorHandler from '../../../util/imageErrorHandler';

interface RelatedProductCardProps {
  product: Product;
}

function RelatedProductCard({ product }: RelatedProductCardProps) {
  const optimizedImage = UseOptimizedImage({
    url: product.thumbnail || '',
    isWebp: true,
    width: 300,
  });

  return (
    <article className="w-full max-w-[250px] flex flex-col bg-white shadow-md rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
      <div className="aspect-[1/1] w-full bg-gray-100">
        <picture>
          <source type="image/webp" src={optimizedImage} />
          <img
            src={product.thumbnail}
            alt={product.title}
            width={300}
            height={300}
            onError={imageErrorHandler}
            className="w-full h-full object-cover"
          />
        </picture>
      </div>
      <div className="p-3 flex flex-col gap-1">
        <h3 className="text-sm font-semibold truncate">{product.title}</h3>
        <p className="text-gray-500 text-xs">{product.brand}</p>
        <p className="text-blue-600 font-bold text-base mt-1">${product.price.toLocaleString()}</p>
      </div>
    </article>
  );
}

export default RelatedProductCard;
