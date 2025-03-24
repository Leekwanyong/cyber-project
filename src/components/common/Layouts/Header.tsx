/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
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
  z-index: 1000;
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

const MobileMenuWrapper = styled.div<{ menuOpen: boolean }>`
  position: fixed;
  text-align: center;
  left: 0;
  top: 60px;
  z-index: 1005;
  width: 100%;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition:
    max-height 0.3s ease-in-out,
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  transform-origin: top;
  max-height: ${({ menuOpen }) => (menuOpen ? '300px' : '0')};
  display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};

  div {
    padding: 1rem;
    border-bottom: 1px solid black;
  }

  div > button {
    background: none;
    border: none;
    cursor: pointer;

    svg:hover {
      fill: hotpink;
      transition: fill 0.2s ease-in-out;
    }
  }

  @media (max-width: 768px) {
    display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
    flex-direction: column;
  }
`;

const HamburgerButton = styled.button`
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  z-index: 1001;

  @media (min-width: 769px) {
    display: none;
  }
`;

function Header() {
  const [value, setValue] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
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
      <div>
        <Link
          to="/"
          css={css`
            text-decoration: none;
            color: black;
          `}
        >
          <h2>Cyber</h2>
        </Link>
      </div>
      <Wrapper>
        <div>
          <TextInput sizeType="primary" value={value} onChange={handleOnChange} />
        </div>
        <div>
          <Link
            to="/product"
            css={css`
              text-decoration: none;
              color: black;
            `}
          >
            Product
          </Link>
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
          <Link
            to="/product"
            onClick={handleOnToggle}
            css={css`
              text-decoration: none;
              color: black;
            `}
          >
            Product
          </Link>
        </div>
        <div>
          <button type="button" onClick={() => navigate('/wishlist')}>
            <HeartIcon width="26px" height="26px" />
          </button>
        </div>
      </MobileMenuWrapper>
    </HeaderWrapper>
  );
}

export default Header;
