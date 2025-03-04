/** @jsxImportSource @emotion/react */
import { useMemo, useState } from 'react';
import { css } from '@emotion/react';
import Layout from '../../components/common/Layouts/Layout';
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
    <Layout>
      <div
        css={css`
          display: flex;
          align-items: flex-start;
          width: 100%;
          margin-top: 2rem;
        `}
      >
        <Aside asideData={asideData} setAsideData={setAsideData} />

        <div
          css={css`
            flex: 1;
            min-width: 0;
          `}
        >
          <InfinityProductList
            isInfinity
            filteredBrands={filteredBrands}
            limit={MAX_LIMIT}
            isLastSection={false}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Product;
