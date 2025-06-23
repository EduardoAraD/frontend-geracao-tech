import { Carousel } from 'primereact/carousel';
import { useNavigate } from 'react-router-dom';

import Button from './Button';

const CarrouselComponent = () => {
  const navigate = useNavigate()

  const productsImagePath = [
    '/home-slide-1.jpeg',
    '/home-slide-2.jpeg',
    '/home-slide-3.jpeg',
    '/home-slide-4.jpeg',
    '/home-slide-5.jpeg',
    '/home-slide-6.jpeg',
    '/home-slide-7.jpeg',
    '/home-slide-8.jpeg',
  ]

  const itemCarousel = (image: string) => {
    return (
      <div className='flex w-full pb-5 items-center md:flex-row flex-col'>
        <img className='w-full object-cover max-h-[600px]' height={200} src={image} alt="" />
        <div className='p-5 flex flex-col gap-2.5 md:fixed md:bg-[#FFFFFF88] w-full max-w-[400px] md:rounded-2xl'>
          <h4 className='md:text-left text-center text-sm font-bold text-warning'>Melhores ofertas personalizadas</h4>
          <h2 className='md:text-left text-center text-[40px] font-extrabold text-dark_gray'>Queima de estoque Nike 🔥</h2>
          <p className='flex w-full pt-2.5 pb-7 text-dark_gray2 font-medium text-sm md:text-left text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dicta harum, iusto quas id quasi suscipit nam fugiat.
          </p>
          <Button
            onClick={() => navigate('/produtos')}
          >Ver Ofertas</Button>
        </div>
      </div>
    )
  }

  return (
    <section className='pb-10'>
      <Carousel
        value={productsImagePath}
        numVisible={1}
        numScroll={1}
        orientation="horizontal"
        itemTemplate={itemCarousel}
        indicatorsContentClassName='classIndicator'
        showNavigators={false}
      />
    </section>
  );
}
 
export default CarrouselComponent;