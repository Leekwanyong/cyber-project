import React from 'react';

type TextInputSize = 'primary' | 'medium';

interface TextInputProps {
  size: TextInputSize;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextInput({ size, onChange, value }: TextInputProps) {
  const sizeStyle = {
    primary: 'w-full px-4 py-2 border outline-none rounded-md',
    medium: 'w-full',
  }[size];

  return (
    <input value={value} className={`${sizeStyle}`} placeholder="Search" onChange={onChange} />
  );
}

export default TextInput;
