/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import ProductList from '../../components/common/Card/ProductList';

interface AsideProductListProps {
  filteredBrands: string[];
}

const noMarginStyle = css`
  margin-top: 1rem;

  ul {
    margin-top: 0 !important;
  }
`;

const DropdownButton = styled.button`
  border: none;
  outline: none;
  background-color: #f0f0f0;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  width: 150px;
  text-align: center;
  margin-bottom: 1rem;
`;

const dropdownMenu = (isOpen: boolean) => css`
  position: absolute;
  top: 100%;
  left: 0;
  width: 150px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: ${isOpen ? 'block' : 'none'};
`;

const DropdownItemBtn = styled.button`
  padding: 10px;
  cursor: pointer;
  outline: none;
  border: none;
  width: 100%;
  border-bottom: 1px solid black;
  background: none;
  transition: background 0.2s;
  &:hover {
    background: #f5f5f5;
  }
`;

function AsideProductList({ filteredBrands }: AsideProductListProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<string>('asc');

  const handleToggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);

  const handleSortChange = useCallback(
    () => setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc')),
    []
  );
  return (
    <div css={noMarginStyle}>
      <div
        css={css`
          position: relative;
          display: inline-block;
        `}
      >
        <DropdownButton type="button" onClick={handleToggleDropdown}>
          {sortOrder === 'desc' ? '가격 높은 순' : '가격 낮은 순'}
        </DropdownButton>
        <div css={dropdownMenu(isOpen)}>
          <DropdownItemBtn type="button" onClick={() => handleSortChange()}>
            가격 높은 순
          </DropdownItemBtn>
          <DropdownItemBtn type="button" onClick={() => handleSortChange()}>
            가격 낮은 순
          </DropdownItemBtn>
        </div>
      </div>

      <ProductList
        category="mobile-accessories"
        limit={12}
        pageParam={0}
        filteredBrands={filteredBrands}
        sortOrder={sortOrder}
      />
    </div>
  );
}

export default React.memo(AsideProductList);
