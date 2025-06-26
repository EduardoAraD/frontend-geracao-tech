import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import type { Product } from "../Model/Product";

import Button from "../components/Button";
import Carrousel from "../components/Carousel";
import CollectionCard from "../components/CollectionCard";
import ProductCard from "../components/ProductCard";
import ProductOptions from "../components/ProductOptions";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";

import { getProductHigh, getSomeProducts } from "../services/products";
import { AppError } from "../utils/AppError";

const HomePage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [productHigh, setProductHigh] = useState<Product | null>(null);

  async function loadingProduct() {
    try {
      const items = await getSomeProducts();
      const productHighResponse = await getProductHigh();

      setProducts(items);
      setProductHigh(productHighResponse);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Erro ao buscar os produtos.'

      toast.error(title, {
        autoClose: 3000,
        theme: 'colored'
      })
    }
  }

  useEffect(() => {
    loadingProduct();
  }, [])

  return (
    <main className="flex flex-col bg-light_gray3 flex-1">
      <Carrousel />

      <Section>
        <TitleSection title="Coleções em destaque" />

        <div className="flex flex-col md:flex-row gap-2.5">
          <CollectionCard
            image="/collection-1.png"
            title="Novo drop Supreme"
            descount={30}
            onClickButton={() => navigate('/produtos')}
          />
          <CollectionCard
            image="/collection-2.png"
            title="Coleção Adidas"
            descount={30}
            onClickButton={() => navigate('/produtos')}
          />
          <CollectionCard
            image="/collection-3.png"
            title="Novo Beats Bass"
            descount={30}
            onClickButton={() => navigate('/produtos')}
          />
        </div>

      </Section>

      <Section>
        <TitleSection title="Coleções em destaque" />
        <ProductOptions />
      </Section>

      <Section>
        <TitleSection title="Produtos em alta" showLink />

        <div className="flex flex-wrap gap-y-10 gap-x-2.5 md:gap-x-8 justify-center">
          {products.map(item => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </Section>

      {productHigh !== null && (
        <Section bgColor="bg-white" className="flex md:flex-row md:gap-16 md:items-center">
          <div className="flex justify-center items-center h-[280px] w-[280px] m-auto rounded-full bg-[linear-gradient(180deg,_#B5B6F2_0%,_#FFFFFF_60%)]">
            <img src={productHigh.images.length > 0 ? productHigh.images[0] : '/sale.png'} className="h-full w-full object-contain rounded-full" height={280} width={280} alt="" />
          </div>
          <div className="flex flex-col gap-2.5 md:flex-1 self-center">
            <span className="text-sm font-bold text-warning">Oferta especial</span>
            <h3 className="text-3xl font-bold text-dark_gray2">
              {productHigh.name}
            </h3>
            <p className="text-sm font-medium text-dark_gray2 mt-2.5">
              {/* {productHigh.description} */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            </p>
            <div className="mt-5 w-52">
              <Button
                onClick={() => navigate(`/produtos/${productHigh.id}-${productHigh.slug}`)}
              >Ver Oferta</Button>
            </div>
          </div>
        </Section>
      )}
    </main>
  );
}
 
export default HomePage;