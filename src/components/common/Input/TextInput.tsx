import React from 'react';

// type TextInputSize = 'primary' | 'medium';

interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextInput({ onChange, value }: TextInputProps) {
  return <input value={value} placeholder="Search" onChange={onChange} />;
}

export default TextInput;
