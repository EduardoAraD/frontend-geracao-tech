import logo from '../assets/logo-header.svg'
import logoWhite from '../assets/logo-footer.svg';

interface PropsLogo {
  color?: 'PRIMARY' | 'WHITE';
  height: number
}

const Logo = ({ height, color = 'PRIMARY' }: PropsLogo ) => {
  return (
    <>
      <img
        className='object-contain'
        style={{ height }}
        src={color === 'PRIMARY' ? logo : logoWhite}
        alt="Digital Store"
      />
    </>
  );
}
 
export default Logo;