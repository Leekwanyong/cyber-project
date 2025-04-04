import Ps5 from '../../assets/PlayStation.png';
import MacBook from '../../assets/MacBookPro.png';
import AirPodMax from '../../assets/AirPodsMax.png';
import VisionPro from '../../assets/VIsionPro.png';
import Button from '../../components/common/Button/Button';
import imageFallbackHandler from '../../utils/image';
import DefaultImg from '../../assets/defaultImg.png';

function MainProductShowcase() {
  return (
    <section className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  items-start">
        <div className="flex flex-col items-center custom930:flex-row gap-6">
          <img
            src={Ps5}
            alt="Playstation5"
            onError={imageFallbackHandler(DefaultImg, Ps5)}
            className="w-full sm:w-[250px] max-w-[250px] max-h-[250px] object-contain"
          />
          <div className="text-center max-w-[400px] w-full sm:text-left ">
            <h2 className="text-3xl sm:text-5xl font-medium leading-tight mb-2">Playstation 5</h2>
            <p className="text-sm sm:text-base text-gray-500 leading-6">
              Incredibly powerful CPUs, GPUs, and an SSD with <br />
              integrated I/O will redefine your PlayStation <br />
              experience
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center custom930:flex-row gap-6">
          <img
            src={MacBook}
            alt="Macbook Air"
            className="w-full sm:w-[250px] max-w-[250px] max-h-[250px] object-contain"
            onError={imageFallbackHandler(DefaultImg, MacBook)}
          />
          <div className="text-center max-w-[400px] w-full h-full sm:text-left">
            <h2 className="text-4xl sm:text-6xl font-thin leading-tight">
              Macbook <span className="font-thin">Air</span>
            </h2>
            <p className="text-sm text-gray-500 my-2">
              The new 15-inch MacBook Air makes room for more of what you love with a spacious
              Liquid Retina display.
            </p>
            <Button size="medium" color="mediumBlack">
              Shop Now
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center custom930:flex-row gap-6">
          <img
            src={AirPodMax}
            alt="Apple AirPods Max"
            onError={imageFallbackHandler(DefaultImg, AirPodMax)}
            className="w-full sm:w-[250px] max-w-[250px] max-h-[250px] object-contain"
          />
          <div className="text-center max-w-[400px] w-full sm:text-left">
            <h2 className="text-2xl sm:text-3xl leading-tight">Apple AirPods Max</h2>
            <p className="text-sm text-gray-500 leading-6">
              Computational audio. Listen, powerful.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center custom930:flex-row gap-6">
          <img
            src={VisionPro}
            alt="Apple Vision Pro"
            onError={imageFallbackHandler(DefaultImg, VisionPro)}
            className="w-full sm:w-[250px] max-w-[250px] max-h-[250px] object-contain"
          />
          <div className="text-center max-w-[400px] w-full sm:text-left">
            <h2 className="text-2xl sm:text-3xl leading-tight">Apple Vision Pro</h2>
            <p className="text-sm text-gray-400 leading-6">
              An immersive way to experience entertainment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainProductShowcase;
