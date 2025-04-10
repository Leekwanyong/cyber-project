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
    <aside className="mt-8 w-full bg-white rounded-xl shadow-md p-4 md:sticky md:top-24 h-fit">
      {LABEL_MENU.map((item) => (
        <ul key={item} className="border-b pb-4 mb-4 last:border-none last:pb-0 last:mb-0">
          <li>
            <button
              type="button"
              onClick={() => handleOnToggle(item)}
              className="w-full flex justify-between items-center font-semibold text-base text-left hover:text-red-500 transition"
            >
              <span>{item}</span>
              <span className="text-sm text-gray-500">{toggle[item] ? '▼' : '▲'}</span>
            </button>

            {toggle[item] && (
              <div className="mt-3 pl-2 flex flex-col gap-2 text-sm text-gray-700">
                {Object.keys(asideData).map((key) => {
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
            )}
          </li>
        </ul>
      ))}
    </aside>
  );
}

export default Aside;
