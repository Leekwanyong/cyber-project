import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextInput from '../Input/TextInput';
import { Hamburger, HeartIcon } from '../Icon/index';
import useDebounce from '../../../hooks/useDebounce';

function Header() {
  const [value, setValue] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const debouncedValue = useDebounce(value, 500);

  const navigate = useNavigate();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleOnToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (debouncedValue) {
      if (e.key === 'Enter') {
        navigate(`product?search=${value}`);
      }
    }
  };

  useEffect(() => {
    if (debouncedValue === '') {
      navigate('/product');
    }
  }, [debouncedValue, navigate]);

  return (
    <header className="fixed w-full bg-white z-50 top-0 h-[64px]">
      <div className="max-w-[1440px] w-full mx-auto  flex justify-between items-center h-[64px]">
        <div>
          <Link to="/">
            <h2 className="text-2xl">Cyber</h2>
          </Link>
        </div>
        <div className="hidden md:block w-[40%]">
          <TextInput
            size="primary"
            value={value}
            onChange={handleOnChange}
            onKeyDown={handleSearch}
          />
        </div>

        <div className="block md:hidden text-2xl mr-6">
          <button type="button" onClick={handleOnToggle}>
            {menuOpen ? 'X' : <Hamburger />}
          </button>
        </div>
        <nav className="hidden md:flex items-center gap-4 mr-4">
          <div>
            <Link to="/product">Product</Link>
          </div>

          <button type="button" className="group" onClick={() => navigate('/wishlist')}>
            <HeartIcon />
          </button>
        </nav>
      </div>

      <div
        className={`${
          menuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0 scale-100 flex flex-col justify-center py-4 font-bold gap-4 items-center fixed top-[64px] left-0 w-full bg-white z-50 transition-all duration-300 ease-in-out sm:hidden'
            : 'opacity-0 pointer-events-none -translate-y-4 scale-95 sm:hidden'
        }`}
      >
        <div>
          <Link to="/product" onClick={handleOnToggle} className="hover:border-b-2">
            Product
          </Link>
        </div>
        <div>
          <button type="button" className="group" onClick={() => navigate('/wishlist')}>
            <HeartIcon width="26px" height="26px" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
