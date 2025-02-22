import styled from '@emotion/styled';
import { css } from '@emotion/react';
import React from 'react';

type TextInputSize = 'primary' | 'medium';

interface TextInputProps {
  sizeType: TextInputSize;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledTextInput = styled.input<TextInputProps>`
  outline: none;
  border: none;
  width: 372px;
  height: 56px;
  border-radius: 8px;
  background-color: #f5f5f5;
  color: #696969;

  ${({ sizeType }) =>
    sizeType === 'medium' &&
    css`
      width: 256px;
      height: 40px;
    `}
`;

function TextInput({ onChange, value, sizeType = 'primary' }: TextInputProps) {
  return (
    <StyledTextInput sizeType={sizeType} value={value} placeholder="Search" onChange={onChange} />
  );
}

export default TextInput;
