import { Carousel } from 'primereact/carousel';
import Button from './Button';

const CarrouselComponent = () => {
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
      <div className='flex flex-col w-full pb-5'>
        <img className='w-full object-cover' height={200} src={image} alt="" />
        <div className='p-5 flex flex-col gap-2.5'>
          <h4 className='text-center text-sm font-bold text-primary'>Melhores ofertas personalizadas</h4>
          <h2 className='text-center text-[40px] font-extrabold text-dark_gray'>Queima de stoque Nike 🔥</h2>
          <p className='flex w-full pt-2.5 pb-7 text-dark_gray2 font-medium text-sm text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dicta harum, iusto quas id quasi suscipit nam fugiat.
          </p>
          <Button>Ver Ofertas</Button>
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