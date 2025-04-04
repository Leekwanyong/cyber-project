import Promo from '../../assets/Promo.png';
import Button from '../../components/common/Button/Button';

function MainPromo() {
  return (
    <section className="relative">
      <img src={Promo} alt="promo" className="w-full h-auto object-cover" />
      <div
        className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                  text-center flex flex-col items-center justify-center gap-2
                  px-3 max-w-[90%] sm:max-w-[400px]"
      >
        <h1 className="text-base sm:text-lg md:text-4xl font-semibold">Big Summer Sale</h1>
        <p className="text-xs sm:text-sm md:text-lg text-gray-200 leading-tight">
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
        <Button size="medium" color="mediumWhite">
          Shop Now
        </Button>
      </div>
    </section>
  );
}

export default MainPromo;
