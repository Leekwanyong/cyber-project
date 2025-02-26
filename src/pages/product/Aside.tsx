/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useCallback, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import CheckboxInput from '../../components/common/Input/CheckboxInput';
import AsideProductList from './AsideProductList';
import { ASIDE_DATA, LABEL_MENU } from '../../constants/aside';

const AsideWrapper = styled.aside`
  width: 450px;
  border-right: 1px solid #ddd;
  height: 1000vh;
  padding-right: 2rem;
`;

const AsideButton = styled.button`
  border: none;
  outline: none;
  background: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  width: 100%;
`;

function Aside() {
  const [asideData, setAsideData] =
    useState<
      Record<
        string,
        { id: number; name: string; checked: boolean; brand: string; category: string }[]
      >
    >(ASIDE_DATA);
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const handleChange = useCallback(
    (id: number, value: string) =>
      setAsideData((prev) => ({
        ...prev,
        [value]: prev[value].map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        ),
      })),
    []
  );

  const handleOnToggle = useCallback(
    (value: string) => setOpen((prev) => ({ ...prev, [value]: !prev[value] })),
    []
  );

  const filteredBrands = useMemo(
    () =>
      Object.values(asideData)
        .flat()
        .filter((item) => item.checked)
        .map((item) => item.brand),
    [asideData]
  );

  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <AsideWrapper>
        {LABEL_MENU.map((item) => (
          <div key={item}>
            <AsideButton type="button" onClick={() => handleOnToggle(item)}>
              <p>{item}</p>
              <p>{open[item] ? '▼' : '▲'}</p>
            </AsideButton>
            {open[item] &&
              Object.keys(asideData).map((key) => {
                const find = asideData[item].find((label) => label.category === key);
                return (
                  <CheckboxInput
                    key={key}
                    categories={find?.category as string}
                    data={asideData}
                    onChange={(id) => handleChange(id, find?.category as string)}
                  />
                );
              })}
          </div>
        ))}
      </AsideWrapper>
      <div
        css={css`
          padding: 1rem;
          flex-grow: 1;
          max-width: calc(100% - 220px);
        `}
      >
        <AsideProductList filteredBrands={filteredBrands} />
      </div>
    </div>
  );
}

export default Aside;
