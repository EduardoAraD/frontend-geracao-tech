import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import type { Product } from "../Model/Product";

import Button from "../components/Button";
import Carrousel from "../components/Carousel";
import CollectionCard from "../components/CollectionCard";
import ProductCard from "../components/ProductCard";
import ProductOptions from "../components/ProductOptions";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";

import { getProductHigh, getSomeProducts } from "../services/products";

const HomePage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [productHigh, setProductHigh] = useState<Product | null>(null);

  async function loadingProduct() {
    const items = await getSomeProducts();
    const productHighResponse = await getProductHigh();

    setProducts(items);
    setProductHigh(productHighResponse);
  }

  useEffect(() => {
    loadingProduct();
  }, [])

  return (
    <main className="flex flex-col bg-light_gray3 flex-1">
      <Carrousel />

      <Section>
        <TitleSection />

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
      </Section>

      <Section>
        <TitleSection />
        <ProductOptions />
      </Section>

      <Section>
        <TitleSection showLink />

        <div className="flex flex-wrap gap-y-10 gap-x-2.5 justify-between">
          {products.map(item => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </Section>

      {productHigh !== null && (
        <Section bgColor="bg-white">
          <div className="flex justify-center items-center h-[280px] w-[280px] m-auto rounded-full bg-[linear-gradient(180deg,_#B5B6F2_0%,_#FFFFFF_60%)]">
            <img src={productHigh.image} className="h-full w-full object-contain" height={280} width={280} alt="" />
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="text-sm font-bold text-warning">Oferta especial</span>
            <h3 className="text-3xl font-bold text-dark_gray2">
              {productHigh.title}
            </h3>
            <p className="text-sm font-medium text-dark_gray2 mt-2.5">
              {productHigh.description}
            </p>
            <div className="mt-5 w-52">
              <Button
                onClick={() => navigate(`/produtos/${productHigh.slug}`)}
              >Ver Oferta</Button>
            </div>
          </div>
        </Section>
      )}
    </main>
  );
}
 
export default HomePage;