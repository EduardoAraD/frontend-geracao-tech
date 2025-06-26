import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { InputIcon } from "primereact/inputicon";
import { toast } from "react-toastify";

import type { Product } from "../Model/Product";

import FilterProducts from "../components/FilterProducts";
import ProductCard from "../components/ProductCard";
import Section from "../components/Section";
import Select from "../components/Select";
import SideBarFilter from "../components/SidebarFilter";

import { getProducts } from "../services/products";
import { AppError } from "../utils/AppError";

const ProductListinPage = () => {
  const [searchParams] = useSearchParams();

  const [products, setProducts] = useState<Product[]>([])
  const [selected, setSelected] = useState('');
  const [showFilter, setShowFilter] = useState(false);

  const search = searchParams.get('search');

  async function loadAllProducts() {
    try {
      const list = await getProducts()

      setProducts(list)
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
    loadAllProducts();
  }, [])

  return (
    <main className="flex flex-col bg-light_gray3 flex-1 pb-15">
      <SideBarFilter visible={showFilter} onClose={() => setShowFilter(false)} />
      <Section>
        <div className="flex md:flex-row-reverse flex-col justify-between gap-5">
          <div className="flex gap-2.5">
            <Select
              placeholder="Escolher ordem de relevancia"
              value={selected}
              onChangeText={setSelected}
            />
            <button
              onClick={() => setShowFilter(true)}
              className="flex md:hidden justify-center items-center h-15 w-15 rounded-[10px] duration-200 bg-primary hover:brightness-120 cursor-pointer">
              <InputIcon
                className="pi pi-filter text-white text-2xl"
              />
            </button>
          </div>
          {search !== null && (
            <div className="flex mt-2.5 mb-5">
              <p className="text-sm text-dark_gray2 font-medium">
                <strong>
                  Resultados para "{search}"
                </strong> - {products.length} produtos
              </p>
            </div>
          )}
        </div>

        <div className="flex gap-7">
          <div className="md:flex hidden">
            <FilterProducts onClose={() => {}} />
          </div>
          

          <div className="flex flex-wrap gap-y-10 gap-x-2.5 md:gap-x-3.5 justify-center">
            {products.map(item => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
 
export default ProductListinPage;