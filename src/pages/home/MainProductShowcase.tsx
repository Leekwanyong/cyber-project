import Ps5 from '../../assets/PlayStation.png';
import MacBook from '../../assets/MacBookPro.png';
import AirPodMax from '../../assets/AirPodsMax.png';
import VisionPro from '../../assets/VIsionPro.png';
import Button from '../../components/common/Button/Button';
import imageFallbackHandler from '../../utils/image';
import DefaultImg from '../../assets/defaultImg.png';

function MainProductShowcase() {
  return (
    <section className="grid gap-4 grid-cols-4 grid-rows-2 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
      <div
        className="col-span-2 row-span-1 flex flex-col sm:flex-row items-center gap-4 p-4"
        style={{ gridArea: 'ps5' }}
      >
        <img
          src={Ps5}
          alt="Playstation 5"
          onError={imageFallbackHandler(DefaultImg, Ps5)}
          className="w-full sm:w-1/2 object-contain"
        />
        <div>
          <h2 className="text-3xl sm:text-5xl font-medium leading-tight mb-2">Playstation 5</h2>
          <p className="text-sm sm:text-base text-gray-500 leading-6">
            Incredibly powerful CPUs, GPUs, and an SSD with <br />
            integrated I/O will redefine your PlayStation <br />
            experience
          </p>
        </div>
      </div>

      <div
        className="col-span-2 row-span-2 flex flex-col sm:flex-row justify-between items-center bg-gray-200 p-8"
        style={{ gridArea: 'macbook' }}
      >
        <div className="text-center sm:text-left">
          <h2 className="text-4xl sm:text-6xl font-thin leading-tight">
            Macbook <span className="font-thin">Air</span>
          </h2>
          <p className="text-sm text-gray-500 my-2">
            The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid
            Retina display.
          </p>
          <Button size="medium" color="mediumBlack">
            Shop Now
          </Button>
        </div>
        <img
          src={MacBook}
          alt="Macbook Air"
          onError={imageFallbackHandler(DefaultImg, MacBook)}
          className="w-full sm:w-1/2 object-contain"
        />
      </div>

      <div
        className="flex flex-col sm:flex-row justify-between items-center bg-gray-200 p-8"
        style={{ gridArea: 'max' }}
      >
        <img
          src={AirPodMax}
          alt="Apple AirPods Max"
          onError={imageFallbackHandler(DefaultImg, AirPodMax)}
          className="w-full sm:w-1/2 object-contain"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl leading-tight">
            Apple <br /> AirPods <br /> Max
          </h2>
          <p className="text-sm text-gray-500 leading-6">
            Computational audio. <br /> Listen, powerful.
          </p>
        </div>
      </div>

      <div
        className="flex flex-col sm:flex-row justify-between items-center bg-neutral-800 p-8"
        style={{ gridArea: 'vision' }}
      >
        <img
          src={VisionPro}
          alt="Apple Vision Pro"
          onError={imageFallbackHandler(DefaultImg, VisionPro)}
          className="w-full sm:w-1/2 object-contain"
        />
        <div className="text-white text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl leading-tight">
            Apple <br /> Vision Pro
          </h2>
          <p className="text-sm text-gray-400 leading-6">
            An immersive way to <br /> experience <br /> entertainment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MainProductShowcase;
