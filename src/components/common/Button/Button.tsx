import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  size: 'primary' | 'medium' | 'mobileSmail' | 'mobileLarge';
  color: 'primary' | 'mediumBlack' | 'mediumWhite';
}

function Button({ children, size = 'primary', color = 'primary' }: ButtonProps) {
  const baseStyle = 'rounded-md font-semibold outline-none border';
  const sizeStyle = {
    primary: 'w-[188px] h-12',
    medium: 'w-[191px] h-14',
    mobileSmail: 'w-[140px] h-10',
    mobileLarge: 'w-[343px] h-14',
  }[size];

  const colorStyle = {
    primary: 'bg-black text-white border-none',
    mediumBlack: 'bg-transparent text-black border-black border',
    mediumWhite: 'bg-transparent text-white border-white border',
  }[color];

  return (
    <button type="button" className={`${baseStyle} ${sizeStyle} ${colorStyle}`}>
      {children}
    </button>
  );
}

export default Button;
