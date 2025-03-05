import { IconProps } from '../../../types/icon';

function Hamburger({ width = '40', height = '40', color = 'black' }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.5 13.75H7.5V11.25H32.5V13.75Z"
        fill="#080341"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.5 21.25H7.5V18.75H32.5V21.25Z"
        fill="#080341"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.5 28.75H7.5V26.25H32.5V28.75Z"
        fill="#080341"
      />
    </svg>
  );
}

export default Hamburger;
