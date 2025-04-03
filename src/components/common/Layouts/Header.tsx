import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextInput from '../Input/TextInput';
import { CartIcon, Hamburger, HeartIcon, UserIcon } from '../Icon/index';
import useDebounce from '../../../hooks/useDebounce';

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
    <header>
      <div>
        <Link to="/">
          <h2>Cyber</h2>
        </Link>
      </div>
      <div>
        <div>
          <TextInput value={value} onChange={handleOnChange} />
        </div>
        <div>
          <Link to="/product">Product</Link>
        </div>
        <div>
          <button type="button" onClick={() => navigate('/wishlist')}>
            <HeartIcon />
          </button>
          <CartIcon />
          <UserIcon />
        </div>
      </div>
      <button type="button" onClick={handleOnToggle}>
        {menuOpen ? 'X' : <Hamburger />}
      </button>
      <div>
        <div>
          <Link to="/product" onClick={handleOnToggle}>
            Product
          </Link>
        </div>
        <div>
          <button type="button" onClick={() => navigate('/wishlist')}>
            <HeartIcon width="26px" height="26px" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
