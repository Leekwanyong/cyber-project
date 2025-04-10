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
    <article className="mt-12 mb-28 px-4 md:px-0 max-w-7xl mx-auto">
      <div
        key={product.id}
        className="bg-white shadow-md rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
      >
        <picture>
          <source type="image/webp" src={optimizedImage} />
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-30 object-cover"
            width={300}
            height={300}
            onError={imageErrorHandler}
          />
        </picture>
        <div className="p-3">
          <h3 className="text-sm font-semibold truncate">{product.title}</h3>
          <p className="text-gray-500 text-xs mt-1">{product.brand}</p>
          <p className="text-blue-600 font-bold text-base mt-2">
            ${product.price.toLocaleString()}
          </p>
        </div>
      </div>
    </article>
  );
}

export default RelatedProductCard;
