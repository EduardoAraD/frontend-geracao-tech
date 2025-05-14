import logo from '../assets/logo-header.svg'
import logoWhite from '../assets/logo-footer.svg';

interface PropsLogo {
  size: 'L' | 'S';
  color?: 'PRIMARY' | 'WHITE';
}

const Logo = ({ size, color = 'PRIMARY' }: PropsLogo ) => {
  return (
    <>
      <img
        className='object-contain'
        style={{ height: size === 'L' ? 44 : 26 }}
        src={color === 'PRIMARY' ? logo : logoWhite}
        alt="Digital Store"
      />
    </>
  );
}
 
export default Logo;