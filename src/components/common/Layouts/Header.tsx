import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import TextInput from '../Input/TextInput';
import { CartIcon, Hamburger, HeartIcon, UserIcon } from '../Icon/index';
import useDebounce from '../../../hooks/useDebounce';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  max-width: 1440px;
  width: 100%;
  padding: 8px 12px;
  top: 0;
  background-color: white;

  @media (max-width: 768px) {
    position: fixed;
    width: 100%;
    background-color: white;
    justify-content: space-between;
    padding: 1rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  svg:hover {
    cursor: pointer;
  }
  button {
    background: none;
    border: none;
  }
  svg {
    transition: fill 0.2s ease-in-out;
  }

  svg:hover {
    fill: hotpink;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuWrapper = styled.div`
  display: none;
  position: fixed;
  text-align: center;
  left: 0;
  z-index: 999;
  width: 100%;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition:
    max-height 0.3s ease-in-out,
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  transform: scaleY(0);
  transform-origin: top;

  div {
    border-top: 1px solid black;
    padding: 0.5rem;
  }

  ${({ menuOpen }: { menuOpen: boolean }) =>
    menuOpen &&
    `
    max-height: 300px;
    opacity: 1;
    transform: scaleY(1);
  `};
  @media (max-width: 768px) {
    display: block;
  }
`;

const HamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    align-items: center;
    justify-content: right;
    margin-right: 1rem;
  }
`;

function Header() {
  const [value, setValue] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState<boolean>(true);
  const debounce = useDebounce(value, 500);
  const navigate = useNavigate();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleOnToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {}, [debounce]);

  return (
    <HeaderWrapper>
      <div style={{ height: '100%' }}>
        <h2>Cyber</h2>
      </div>
      <Wrapper>
        <div>
          <TextInput sizeType="primary" value={value} onChange={handleOnChange} />
        </div>

        <div>
          <Link to="/product">Product</Link>
        </div>
        <IconWrapper>
          <button type="button" onClick={() => navigate('/wishlist')}>
            <HeartIcon />
          </button>
          <CartIcon />
          <UserIcon />
        </IconWrapper>
      </Wrapper>
      <HamburgerButton type="button" onClick={handleOnToggle}>
        {menuOpen ? 'X' : <Hamburger />}
      </HamburgerButton>
      <MobileMenuWrapper menuOpen={menuOpen}>
        <div>
          <Link to="/product" onClick={handleOnToggle}>
            Product
          </Link>
        </div>
        <IconWrapper>
          <button type="button" onClick={() => navigate('/wishlist')}>
            <HeartIcon width="26px" height="26px" />
          </button>
        </IconWrapper>
      </MobileMenuWrapper>
    </HeaderWrapper>
  );
}

export default Header;
