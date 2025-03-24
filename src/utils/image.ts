import { SyntheticEvent } from 'react';

const imageFallbackHandler = (defaultImg: string, src: string) => {
  return (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const { currentTarget } = e;
    if (!(currentTarget.src.endsWith(defaultImg) || currentTarget.src.endsWith(src))) {
      currentTarget.src = defaultImg;
    }
  };
};

export default imageFallbackHandler;
