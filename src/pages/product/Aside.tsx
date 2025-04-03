import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import CheckboxInput from '../../components/common/Input/CheckboxInput';
import { LABEL_MENU } from '../../constants/aside';
import { FilterOptions } from '../../types/card';

interface Props {
  asideData: FilterOptions;
  setAsideData: Dispatch<SetStateAction<FilterOptions>>;
}

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
    <div>
      <aside>
        {LABEL_MENU.map((item) => (
          <ul key={item}>
            <button type="button" onClick={() => handleOnToggle(item)}>
              <p>{item}</p>
              <p>{toggle[item] ? '▼' : '▲'}</p>
            </button>
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
      </aside>
    </div>
  );
}

export default Aside;
