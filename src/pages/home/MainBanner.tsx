import Iphone from '../../assets/Iphone.png';
import Button from '../../components/common/Button/Button';
import DefaultImg from '../../assets/defaultImg.png';
import imageFallbackHandler from '../../utils/image';

function MainBanner() {
  return (
    <section className="bg-gradient-to-r from-[#211c24] to-[#211c24] flex items-center justify-center">
      <div className="flex justify-between items-center flex-wrap max-w-[1200px] w-full p-8 max-[768px]:flex-col max-[768px]:text-center max-[768px]:mt-28 max-[768px]:p-0">
        <div className="flex flex-col justify-center w-1/2 text-white break-words max-[768px]:w-full">
          <p className="opacity-40 text-[clamp(16px,2vw,25px)] leading-relaxed">Pro. Beyond.</p>
          <p className="text-[clamp(36px,6vw,76px)] font-bold leading-snug max-[768px]:text-[clamp(28px,5vw,60px)]">
            IPhone 14{' '}
            <span className="bg-gradient-to-r from-[#d4af37] via-[#f7e7ce] to-[#e6c200] bg-clip-text text-transparent">
              Pro
            </span>
          </p>
          <p className="text-[#909090] text-[clamp(14px,1.8vw,18px)] font-medium leading-relaxed mb-4">
            Created to change everything for the better. For everyone
          </p>
          <div>
            <Button size="medium" color="mediumWhite">
              Shop Now
            </Button>
          </div>
        </div>
        <img
          src={Iphone}
          alt="Iphone"
          onError={imageFallbackHandler(DefaultImg, Iphone)}
          className="max-w-full h-auto object-cover max-[768px]:w-2/5"
        />
      </div>
    </section>
  );
}

export default MainBanner;
