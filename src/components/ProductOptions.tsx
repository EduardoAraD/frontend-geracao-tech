import shirtSvg from '../assets/tshirt.svg';
import pantsSvg from '../assets/pants.svg';
import hatSvg from '../assets/hat.svg';
import shoesSvg from '../assets/shoes.svg';
import headphoneSvg from '../assets/headphone.svg';
import { ReactSVG } from 'react-svg'

interface Option {
  id: number;
  svg: string;
  title: string;
}

const ProductOptions = () => {
  const options: Option[] = [
    { id: 1, svg: shirtSvg, title: 'Camisetas' },
    { id: 2, svg: pantsSvg, title: 'Calças' },
    { id: 3, svg: hatSvg, title: 'Bonés' },
    { id: 4, svg: headphoneSvg, title: 'Headphones' },
    { id: 5, svg: shoesSvg, title: 'Tênis' },
  ]

  const itemOption = ({ id, title, svg }: Option) => {
    return (
      <div className='flex flex-col gap-3 w-min' key={id}>
        <div className='h-28 w-28 flex justify-center items-center bg-white rounded-full'>
          <ReactSVG src={svg} className='fill-primary' />
        </div>
        <p className='text-sm font-bold text-dark_gray2 text-center'>{ title }</p>
      </div>
    )
  }

  return (
    <div className='flexc overflow-hidden' style={{ marginLeft: -20, marginRight: -20 }}>
      <div className='flex overflow-scroll gap-5 pl-5 pr-5'>
        {options.map(item => itemOption(item))}
      </div>
    </div>
  );
}
 
export default ProductOptions;