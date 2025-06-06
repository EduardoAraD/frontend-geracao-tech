import { useEffect, useState } from "react";
import { InputIcon } from "primereact/inputicon";

import type { Product } from "../Model/Product";

import ProductCard from "../components/ProductCard";
import Section from "../components/Section";
import Select from "../components/Select";
import SideBarFilter from "../components/SidebarFilter";

import { getProducts } from "../services/products";

const ProductListinPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [selected, setSelected] = useState('');
  const [showFilter, setShowFilter] = useState(false);

  async function loadAllProducts() {
    const list = await getProducts()

    setProducts(list)
  }

  useEffect(() => {
    loadAllProducts();
  }, [])

  return (
    <main className="flex flex-col bg-light_gray3 flex-1 pb-15">
      <SideBarFilter visible={showFilter} onVisible={setShowFilter} />
      <Section>
        <div className="flex gap-2.5">
          <Select
            placeholder="Escolher ordem de relevancia"
            value={selected}
            onChangeText={setSelected}
          />
          <button
            onClick={() => setShowFilter(true)}
            className="flex justify-center items-center h-15 w-15 rounded-[10px] duration-200 bg-primary hover:brightness-120 cursor-pointer">
            <InputIcon
              className="pi pi-filter text-white text-2xl"
            />
          </button>
        </div>

        <div className="flex mt-2.5 mb-5">
          <p className="text-sm text-dark_gray2 font-medium">
            <strong>
              Resultados para "Tênis"
            </strong> - 369 produtos
          </p>
        </div>

        <div className="flex flex-wrap gap-y-10 gap-x-2.5 justify-between">
          {products.map(item => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </Section>
    </main>
  );
}
 
export default ProductListinPage;