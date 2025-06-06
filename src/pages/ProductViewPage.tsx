import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { InputIcon } from "primereact/inputicon";

import { useCart } from "../hooks/useCart";

import { emptyProduct, type Product } from "../Model/Product";
import Button from "../components/Button";
import OptionsProduct from "../components/OptionsProduct";
import ProductCard from "../components/ProductCard";
import Section from "../components/Section";
import Stars from "../components/Stars";
import StarScore from "../components/StarScore";
import TitlePage from "../components/TitlePage";
import TitleSection from "../components/TitleSection";

import { getProduct, getProductByCategorys } from "../services/products";
import { getFormatMoney } from "../utils/formatMoney";

const ProductViewPage = () => {
  const { pathname } = useLocation();
  const { addProduct } = useCart()
  
  const [product, setProduct] = useState<Product>(emptyProduct);
  const [similarProducts, setSimilarProducts] = useState<Product[]>([])

  const [loading, setLoading] = useState(true);
  const [indexImage, setIndexImage] = useState(0);
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');

  function nextImage() {
    if(indexImage + 1 >= product.images.length) {
      setIndexImage(0)
    } else {
      setIndexImage(state => state + 1)
    }
  }

  function prevImage() {
    if(indexImage <= 0) {
      setIndexImage(product.images.length - 1)
    } else {
      setIndexImage(state => state - 1)
    }
  }

  function addProductInCart() {
    addProduct({
      product,
      quantity: 1
    })
  }

  const loadProduct = useCallback(async () => {
    const id = pathname.split('/')[2].split('-')[0]
    const response = await getProduct(id);

    if(response !== null) {
      const listProducts = await getProductByCategorys(response.categorys.map(item => item.id))
      setProduct(response)
      setSimilarProducts(listProducts);
    }
    setLoading(false)
  }, [pathname]);

  useEffect(() => {
    loadProduct()
  }, [loadProduct])

  const imageSource = useMemo(() => {
    return product.images[indexImage];
  }, [indexImage, product.images]);

  return (
    <main className="pb-10 bg-background">
      <Section bgColor="bg-background">
        <TitlePage nameProduct="Tênis Nike Revolution 6 Next Nature Masculino" />
        {loading ? (
          <p>Carregando ...</p>
        ) : (
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
            {product.images.map((item, index) => (
              <button
                key={`${index}-${item}`}
                onClick={() => setIndexImage(index)}
                className="flex-1 max-h-24 rounded-sm cursor-pointer overflow-hidden">
                <img src={item} alt="" />
              </button>
            ))}
          </div>
        </div>
        )}
        
        
        <h2 className="mt-10 text-2xl text-dark_gray font-bold">
          {product.name}
        </h2>
        <p className="mt-2.5 text-xs font-medium text-dark_gray3">
          {product.categorys.map(item => item.name).join(', ')} | {product.mark} | REF:{product.id}</p>
        <div className="flex items-center gap-2.5">
          <Stars score={product.rate} />
          <StarScore score={product.rate} />
          <p className="font-medium text-sm text-light_gray">(90 avaliações)</p>
        </div>

        <div className="flex items-end gap-2.5">
          <p className="text-dark_gray2 text-base font-normal">R$ <strong><span className="text-[2rem]">{getFormatMoney(product.price_with_discount)}</span></strong></p>
          <span className="font-normal text-base text-light_gray2 line-through mb-[7px]">
            {getFormatMoney(product.price)}
          </span>
        </div>

        <h4 className="text-sm font-bold text-light_gray mt-5 mb-1">
          Descrição do produto
        </h4>
        <p className="text-sm font-medium text-dark_gray2">
          {product.description}
        </p>
        {product.options.map(item => (
          <OptionsProduct key={item.title}>
            <OptionsProduct.Title title={item.title} />
            {item.type === 'color' ? (
              <OptionsProduct.Colors
                colors={item.values}
                colorSelected={color}
                onColor={setColor}
              />
            ) : (
              <OptionsProduct.Sizes
                sizes={item.values}
                sizeSelected={size}
                onSize={setSize}
              />
            )}
          </OptionsProduct>
        ))}

        <Button
          className="mt-12"
          bgColor="warning"
          size='large'
          onClick={addProductInCart}
        >
          COMPRAR
        </Button>
      </Section>

      <Section bgColor="bg-background">
        <TitleSection showLink />

        <div className="flex flex-wrap gap-y-10 gap-x-2.5 justify-between">
          {similarProducts.slice(0,2).map(item => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </Section>
    </main>
  );
}
 
export default ProductViewPage;
