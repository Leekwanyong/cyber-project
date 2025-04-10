import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  size: 'primary' | 'medium' | 'mobileSmail' | 'mobileLarge';
  color: 'primary' | 'mediumBlack' | 'mediumWhite';
  onClick?: () => void;
}

function Button({
  children,
  onClick = () => {},
  size = 'primary',
  color = 'primary',
}: ButtonProps) {
  const baseStyle = 'rounded-md font-semibold outline-none border inline-block';

  const sizeStyle = {
    primary:
      'w-[140px] h-9 text-xs sm:w-[160px] sm:h-10 sm:text-sm md:w-[188px] md:h-12 md:text-base',
    medium:
      'w-[140px] h-9 text-xs sm:w-[160px] sm:h-12 sm:text-sm md:w-[191px] md:h-14 md:text-base',
    mobileSmail:
      'w-[120px] h-8 text-xs sm:w-[140px] sm:h-9 sm:text-sm md:w-[160px] md:h-10 md:text-base',
    mobileLarge:
      'w-[240px] h-10 text-xs sm:w-[300px] sm:h-12 sm:text-sm md:w-[343px] md:h-14 md:text-base',
  }[size];

  const colorStyle = {
    primary: 'bg-black text-white border-none',
    mediumBlack: 'bg-transparent text-black border-black border',
    mediumWhite: 'bg-transparent text-white border-white border',
  }[color];

  return (
    <button type="button" className={`${baseStyle} ${sizeStyle} ${colorStyle}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
