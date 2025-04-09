import { SyntheticEvent } from 'react';
import defaultImg from '../assets/defaultImg.webp';

const useImageError = () => {
  return (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    target.src = defaultImg;
  };
};

export default useImageError;
