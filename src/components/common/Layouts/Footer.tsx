import { FacebookIcon, InstagramIcon, TiktokIcon, TwitterIcon } from '../Icon/index';
import { ASSISTANCE_MENU, SERVICES_MENU } from '../../../constants/footer';

function MainBanner() {
  return (
    <footer className="max-w-[1440px] mx-auto flex flex-col items-start bg-black gap-8 px-40 py-24 text-white max-[768px]:px-6 max-[768px]:py-16">
      <div className="flex justify-between w-full flex-wrap gap-8">
        <div className="max-w-sm">
          <h3 className="mb-4 text-lg font-semibold">Cyber</h3>
          <p className="leading-relaxed text-sm text-gray-300">
            We are a residential interior design firm located in <br />
            Portland. Our boutique-studio offers more than
          </p>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold">Services</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-300">
            {SERVICES_MENU.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold">Assistance to the buyer</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-300">
            {ASSISTANCE_MENU.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <TwitterIcon />
        <FacebookIcon />
        <TiktokIcon />
        <InstagramIcon />
      </div>
    </footer>
  );
}

export default MainBanner;
