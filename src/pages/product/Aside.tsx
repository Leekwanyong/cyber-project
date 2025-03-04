/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import styled from '@emotion/styled';
import CheckboxInput from '../../components/common/Input/CheckboxInput';
import { LABEL_MENU } from '../../constants/aside';
import { FilterOptions } from '../../types/card';

interface Props {
  asideData: FilterOptions;
  setAsideData: Dispatch<SetStateAction<FilterOptions>>;
}

const AsideWrapper = styled.aside`
  width: 250px;
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

function Aside({ asideData, setAsideData }: Props) {
  const [toggle, setToggle] = useState<Record<string, boolean>>({});

  const handleChange = useCallback(
    (id: number, value: string) => {
      setAsideData((prev) => {
        return {
          ...prev,
          [value]: (prev[value] || []).map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
          ),
        };
      });
    },
    [setAsideData]
  );

  const handleOnToggle = (value: string) => {
    setToggle((prev) => ({
      ...prev,
      [value]: !prev[value],
    }));
  };

  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <AsideWrapper>
        {LABEL_MENU.map((item) => (
          <ul key={item}>
            <AsideButton type="button" onClick={() => handleOnToggle(item)}>
              <p>{item}</p>
              <p>{toggle[item] ? '▼' : '▲'}</p>
            </AsideButton>
            <li>
              {toggle[item] &&
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
            </li>
          </ul>
        ))}
      </AsideWrapper>
    </div>
  );
}

export default Aside;
