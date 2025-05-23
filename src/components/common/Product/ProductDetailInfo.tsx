import { useParams } from 'react-router-dom';
import Button from '../Button/Button';
import FloatingButton from '../Button/FloatingButton';
import Skeleton from '../Skeleton/Skeleton';
import RelatedProductCard from './RelatedProductCard';
import { Product } from '../../../types/card';
import ProductDetailSkeleton from '../Skeleton/ProductDetailSkeleton';
import useProductDetailWithSimilar from '../../../hooks/useProductDetailWithSimilar';
import UseOptimizedImage from '../../../hooks/useOptimizedImage';
import imageFallbackHandler from '../../../util/imageErrorHandler';
import SeoMetaTag from '../../../util/SEOMetaTag';

const LENGTH = 4;

function ProductDetailInfo() {
  const { id } = useParams();
  const detailAndRelated = useProductDetailWithSimilar(id);
  const optimizedImage = UseOptimizedImage({
    url: detailAndRelated.detail.data?.thumbnail || '',
    isWebp: true,
    width: 300,
  });

  if (detailAndRelated.detail.isLoading) return <ProductDetailSkeleton />;

  return (
    <div>
      <SeoMetaTag
        title={detailAndRelated.detail.data?.title}
        description={detailAndRelated.detail.data?.description}
        url={window.location.href ?? 'https://cyber-project-amber.vercel.app/product/'}
        siteName={window.location.href ?? 'https://cyber-project-amber.vercel.app/product/'}
        imageUrl={detailAndRelated.detail.data?.thumbnail}
      />
      <section>
        <article className="flex flex-col md:flex-row gap-8 px-4 md:px-0 mt-28 mb-24 max-w-7xl mx-auto">
          <div className="flex-1 flex flex-col justify-center items-center gap-4">
            <div className="w-full sm:w-[250px] max-w-[250px] aspect-[1/1]">
              <picture>
                <source type="image/webp" srcSet={optimizedImage} />
                <img
                  src={detailAndRelated.detail.data?.thumbnail}
                  alt={detailAndRelated.detail.data?.title}
                  width={300}
                  height={300}
                  onError={imageFallbackHandler}
                  className="w-full max-w-[400px]  h-auto object-cover rounded-xl shadow-md"
                />
              </picture>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-between gap-4">
            <div>
              <h3 className="text-sm text-gray-500">{detailAndRelated.detail.data?.brand}</h3>
              <h2 className="text-xl md:text-2xl font-bold mt-1">
                {detailAndRelated.detail.data?.title}
              </h2>
              <p className="text-lg md:text-xl font-semibold text-blue-600 mt-3">
                ${detailAndRelated.detail.data?.price.toLocaleString()}
              </p>
            </div>

            <Button size="primary" color="mediumBlack">
              Buy Now
            </Button>

            <div className="text-sm text-gray-600 leading-relaxed mt-6">
              {detailAndRelated.detail.data?.description}
            </div>
          </div>
        </article>

        <h2 className="text-lg md:text-xl font-bold mb-6">Recommended Product</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {detailAndRelated.related.isLoading ? (
            <Skeleton count={LENGTH} />
          ) : (
            detailAndRelated.related.data.map((product: Product) => (
              <RelatedProductCard key={product.id} product={product} />
            ))
          )}
        </div>

        <FloatingButton />
      </section>
    </div>
  );
}

export default ProductDetailInfo;
