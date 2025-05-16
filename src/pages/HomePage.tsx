import Button from "../components/Button";
import Carrousel from "../components/Carousel";
import CollectionCard from "../components/CollectionCard";
import ProductCard from "../components/ProductCard";
import ProductOptions from "../components/ProductOptions";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import { products } from "../services/products";

const HomePage = () => {
  return (
    <main className="flex flex-col bg-light_gray3 flex-1">
      <Carrousel />

      <Section>
        <TitleSection />

        <CollectionCard
          image="/collection-1.png"
          title="Novo drop Supreme"
          descount={30}
          onClickButton={() => {}}
        />
        <CollectionCard
          image="/collection-2.png"
          title="Coleção Adidas"
          descount={30}
          onClickButton={() => {}}
        />
        <CollectionCard
          image="/collection-3.png"
          title="Novo Beats Bass"
          descount={30}
          onClickButton={() => {}}
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
            <ProductCard {...item} />
          ))}
        </div>
      </Section>

      <Section bgColor="bg-white">
        <div className="flex justify-center items-center h-[280px] w-[280px] m-auto rounded-full bg-[linear-gradient(180deg,_#B5B6F2_0%,_#FFFFFF_60%)]">
          <img src="/sale.png" height={280} width={280} alt="" />
        </div>
        <div className="flex flex-col gap-2.5">
          <span className="text-sm font-bold text-warning">Oferta especial</span>
          <h3 className="text-3xl font-bold text-dark_gray2">
            Air Jordan edição de colecionador
          </h3>
          <p className="text-sm font-medium text-dark_gray2 mt-2.5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident enim at quas laudantium. Fuga necessitatibus sint quia nulla? Aliquam, illum suscipit reprehenderit soluta iusto quia quos corporis dicta voluptas eaque.
          </p>
          <div className="mt-5 w-52">
            <Button>Ver Oferta</Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
 
export default HomePage;