import React, { useState } from 'react';
import styled from '@emotion/styled';
import TextInput from '../Input/TextInput';
import { CartIcon, HeartIcon, UserIcon } from '../Icon/index';
import useDebounce from '../../../hooks/useDebounce';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  svg:hover {
    cursor: pointer;
  }
`;

function Header() {
  const [value, setValue] = useState<string>('');
  const debounce = useDebounce(value, 500);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  console.log(debounce);

  return (
    <HeaderWrapper>
      <div>
        <h2>Cyber</h2>
      </div>
      <div>
        <TextInput sizeType="primary" value={value} onChange={handleOnChange} />
      </div>
      <IconWrapper>
        <HeartIcon />
        <CartIcon />
        <UserIcon />
      </IconWrapper>
    </HeaderWrapper>
  );
}

export default Header;
