import Ps5Png from '../../assets/PlayStation.png';
import MacBookPng from '../../assets/MacBookPro.png';
import AirPodMaxPng from '../../assets/AirPodsMax.png';
import VisionProPng from '../../assets/VIsionPro.png';
import Ps5Webp from '../../assets/PlayStation.webp';
import MacBookWebp from '../../assets/MacBookPro.webp';
import AirPodMaxWebp from '../../assets/AirPodsMax.webp';
import VisionProWebp from '../../assets/VIsionPro.webp';
import Button from '../../components/common/Button/Button';
import imageFallbackHandler from '../../hooks/useImageError';

function MainProductShowcase() {
  return (
    <section className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  items-start">
        <div className="flex flex-col items-center custom930:flex-row gap-6">
          <picture>
            <source type="image/webp" srcSet={Ps5Webp} />
            <img
              src={Ps5Png}
              alt="Playstation5"
              onError={imageFallbackHandler()}
              width={400}
              height={400}
              className="w-full sm:w-[250px] max-w-[250px] max-h-[250px] object-contain"
            />
          </picture>
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
          <picture>
            <source type="image/webp" srcSet={MacBookWebp} />

            <img
              src={MacBookPng}
              alt="Macbook Air"
              width={400}
              height={400}
              className="w-full sm:w-[250px] max-w-[250px] max-h-[250px] object-contain"
              onError={imageFallbackHandler()}
            />
          </picture>
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
          <picture>
            <source type="image/webp" srcSet={AirPodMaxWebp} />

            <img
              src={AirPodMaxPng}
              alt="Apple AirPods Max"
              width={400}
              height={400}
              onError={imageFallbackHandler()}
              className="w-full sm:w-[250px] max-w-[250px] max-h-[250px] object-contain"
            />
          </picture>
          <div className="text-center max-w-[400px] w-full sm:text-left">
            <h2 className="text-2xl sm:text-3xl leading-tight">Apple AirPods Max</h2>
            <p className="text-sm text-gray-500 leading-6">
              Computational audio. Listen, powerful.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center custom930:flex-row gap-6">
          <picture>
            <source type="image/webp" srcSet={VisionProWebp} />
            <img
              src={VisionProPng}
              alt="Apple Vision Pro"
              width={400}
              height={400}
              onError={imageFallbackHandler()}
              className="w-full sm:w-[250px] max-w-[250px] max-h-[250px] object-contain"
            />
          </picture>
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
