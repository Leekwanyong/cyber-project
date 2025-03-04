import { FilterOptions } from '../../../types/card';

interface CheckboxInputProps {
  categories: string;
  data: FilterOptions;
  onChange: (id: number, key: string) => void;
}

function CheckboxInput({ data, categories, onChange }: CheckboxInputProps) {
  return (
    <div>
      {data[categories]?.map((item) => (
        <li key={item.id}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => onChange(item.id, categories)}
          />
          <label htmlFor={item.brand}>{item.brand}</label>
        </li>
      ))}
    </div>
  );
}

export default CheckboxInput;
