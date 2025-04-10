import React, { useEffect, useState } from 'react';
import Ps5Png from '../../assets/PlayStation.png';
import MacBookPng from '../../assets/MacBookPro.png';
import VisionProPng from '../../assets/VIsionPro.png';
import Ps5Webp from '../../assets/PlayStation.webp';
import MacBookWebp from '../../assets/MacBookPro.webp';
import AirPodMaxWebp from '../../assets/AirPodsMax.webp';
import VisionProWebp from '../../assets/VIsionPro.webp';
import imageFallbackHandler from '../../util/imageErrorHandler';
import Button from '../../components/common/Button/Button';
import MainProductShowcaseSkeleton from '../../components/common/Skeleton/MainProductShowcaseSkeleton';

type ShowType = {
  id: number;
  alt: string;
  title: string;
  description: string;
  webp: string;
  png: string;
  button?: boolean;
}[];

const showcaseData: ShowType = [
  {
    id: 1,
    alt: 'Playstation5',
    title: 'Playstation 5',
    description:
      'Incredibly powerful CPUs, GPUs, and an SSD with <br />\n' +
      '              integrated I/O will redefine your PlayStation <br />\n' +
      '              experience',
    webp: Ps5Webp,
    png: Ps5Png,
  },
  {
    id: 2,
    alt: 'Macbook Air',
    title: 'MacBook Air',
    description:
      '  The new 15-inch MacBook Air makes room for more of what you love with a spacious\n' +
      '              Liquid Retina display.',
    webp: MacBookWebp,
    png: MacBookPng,
    button: true,
  },
  {
    id: 3,
    alt: 'Apple AirPods Max',
    title: 'Apple AirPods Max',
    description: 'Computational audio. Listen, powerful.',
    webp: AirPodMaxWebp,
    png: AirPodMaxWebp,
  },
  {
    id: 4,
    alt: 'Apple Vision Pro',
    title: 'Apple Vision Pro',
    description: ' An immersive way to experience entertainment.',
    webp: VisionProWebp,
    png: VisionProPng,
  },
];

function MainProductShowcase() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return isLoading ? (
    <section className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  items-start">
        {showcaseData.map((item) => (
          <div key={item.id} className="flex flex-col items-center custom930:flex-row gap-6 w-full">
            {isLoading ? (
              <div className="w-full sm:w-[250px] max-w-[250px] aspect-[1/1]">
                <picture>
                  <source type="image/webp" srcSet={item.webp} />
                  <img
                    src={item.png}
                    alt={item.alt}
                    width={250}
                    height={250}
                    onError={imageFallbackHandler}
                    className="w-full h-full object-contain"
                  />
                </picture>
              </div>
            ) : (
              <div className="w-full sm:w-[250px] aspect-[1/1] bg-gray-100 animate-pulse rounded-lg" />
            )}
            <div className="text-center max-w-[400px] w-full sm:text-left">
              <h2 className="text-2xl sm:text-4xl leading-tight font-semibold mb-2">
                {item.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-500 leading-6">{item.description}</p>
              {item.button && isLoading && (
                <Button size="medium" color="mediumBlack">
                  Shop Now
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  ) : (
    <MainProductShowcaseSkeleton />
  );
}

export default React.memo(MainProductShowcase);
