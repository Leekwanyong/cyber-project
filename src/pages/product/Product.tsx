import { useMemo, useState } from 'react';
import Aside from './Aside';
import { ASIDE_DATA } from '../../constants/aside';
import InfinityProductList from '../../components/common/Card/InfinityProductList';
import { FilterOptions } from '../../types/card';

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
    <div>
      <Aside asideData={asideData} setAsideData={setAsideData} />

      <div>
        <InfinityProductList
          filteredBrands={filteredBrands}
          limit={MAX_LIMIT}
          isLastSection={false}
        />
      </div>
    </div>
  );
}

export default Product;
