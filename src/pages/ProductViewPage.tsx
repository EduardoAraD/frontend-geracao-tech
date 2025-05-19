import { useMemo, useState } from "react";
import { InputIcon } from "primereact/inputicon";

import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import Section from "../components/Section";
import Stars from "../components/Stars";
import StarScore from "../components/StarScore";
import TitlePage from "../components/TitlePage";
import TitleSection from "../components/TitleSection";

import { products } from "../services/products";

const images = [
  "/product-thumb-1.jpeg",
  "/product-thumb-2.jpeg",
  "/product-thumb-3.jpeg",
  "/product-thumb-4.jpeg",
  "/product-thumb-5.jpeg",
];
const sizes = [39, 40, 41, 42, 43];
const colors = ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7']

const ProductViewPage = () => {
  const [indexImage, setIndexImage] = useState(0);
  const [size, setSize] = useState(sizes[2]);
  const [color, setColor] = useState(colors[1]);

  function nextImage() {
    if(indexImage + 1 > images.length) {
      setIndexImage(0)
    } else {
      setIndexImage(state => state + 1)
    }
  }

  function prevImage() {
    if(indexImage <= 0) {
      setIndexImage(images.length - 1)
    } else {
      setIndexImage(state => state - 1)
    }
  }

  const imageSource = useMemo(() => {
    return images[indexImage];
  }, [indexImage])

  return (
    <main className="pb-10 bg-background">
      <Section bgColor="bg-background">
        <TitlePage nameProduct="Tênis Nike Revolution 6 Next Nature Masculino" />
        <div className="flex flex-col gap-2.5">
          <div className="flex w-full relative max-w-[700px]">
            <img className="w-full" src={imageSource} alt="" />
            <div className="absolute w-full flex justify-between items-center h-full">
              <button className="p-4 h-full" onClick={prevImage}>
                <InputIcon className="pi pi-chevron-left text-md" />
              </button>
              <button className="p-4 h-full" onClick={nextImage}>
                <InputIcon className="pi pi-chevron-right text-md" />
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            {images.map((item, index) => (
              <button
                key={`${index}-${item}`}
                onClick={() => setIndexImage(index)}
                className="flex-1 max-h-24 rounded-sm cursor-pointer overflow-hidden">
                <img src={item} alt="" />
              </button>
            ))}
          </div>
        </div>
        
        <h2 className="mt-10 text-2xl text-dark_gray font-bold">
          Tênis Nike Revolution 6 Next Nature Masculino
        </h2>
        <p className="mt-2.5 text-xs font-medium text-dark_gray3">
          Casual | Nike | REF:38416711</p>
        <div className="flex items-center gap-2.5">
          <Stars score={4.7} />
          <StarScore score={4.7} />
          <p className="font-medium text-sm text-light_gray">(90 avaliações)</p>
        </div>

        <div className="flex items-end gap-2.5">
          <p className="text-dark_gray2 text-base font-normal">R$ <strong><span className="text-[2rem]">219</span>,00</strong></p>
          <span className="font-normal text-base text-light_gray2 line-through mb-[7px]">219,00</span>
        </div>

        <h4 className="text-sm font-bold text-light_gray mt-5 mb-1">
          Descrição do produto
        </h4>
        <p className="text-sm font-medium text-dark_gray2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sed quisquam deleniti temporibus iusto porro at inventore. Unde assumenda ea ipsum rem quos magni vero, delectus sed dicta consequuntur saepe!
        </p>

        <h4 className="text-sm font-bold text-light_gray mt-5 mb-2.5">Tamanho</h4>
        <div className="flex gap-2.5">
          {sizes.map(item => (
            <button
              onClick={() => setSize(item)}
              key={item}
              className={`h-12 w-12 flex justify-center items-center border-1 cursor-pointer duration-200 rounded-sm ${item === size ? 'bg-primary border-primary' : 'bg-white border-light_gray2'} hover:brightness-110`}
            >
              <span className={`text-base font-bold ${item === size ? 'text-white' : 'text-dark_gray2'}`}>
                { item }
              </span>
            </button>
          ))}
         
        </div>

        <h4 className="text-sm font-bold text-light_gray mt-5 mb-1">Cor</h4>
        <div className="flex gap-2.5 mb-12">
          {colors.map(item => (
            <button
              key={item}
              onClick={() => setColor(item)}
              className={`bg-white p-0.5 rounded-full shadow-dark_gray shadow-2xl border-2 duration-200 hover:brightness-110 ${color === item ? 'border-primary' : 'border-white'}`}
            >
              <div className="h-8 w-8 rounded-full" style={{ backgroundColor: item }} />
            </button>
          ))}
          
        </div>

        <Button bgColor="warning" size='large'>COMPRAR</Button>
      </Section>

      <Section bgColor="bg-background">
        <TitleSection showLink />

        <div className="flex flex-wrap gap-y-10 gap-x-2.5 justify-between">
          {products.slice(0,2).map(item => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </Section>
    </main>
  );
}
 
export default ProductViewPage;