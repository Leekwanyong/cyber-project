import { useMemo, useState } from 'react';
import Aside from './Aside';
import { ASIDE_DATA } from '../../constants/aside';
import InfinityProductList from '../../components/common/Card/InfinityProductList';
import { FilterOptions } from '../../types/card';
import FloatingButton from '../../components/common/Button/FloatingButton';

const MAX_LIMIT = 12;
function Product() {
  const [asideData, setAsideData] = useState<FilterOptions>(ASIDE_DATA);

  const filteredBrands = useMemo(
    () =>
      Object.values(asideData)
        .flat()
        .filter((item) => item.checked)
        .map((item) => item.brand),
    [asideData]
  );

  return (
    <section className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-6 mt-24 px-4 md:px-8">
      <Aside asideData={asideData} setAsideData={setAsideData} />

      <div>
        <InfinityProductList
          filteredBrands={filteredBrands}
          limit={MAX_LIMIT}
          isLastSection={false}
        />
      </div>

      <FloatingButton />
    </section>
  );
}

export default Product;
