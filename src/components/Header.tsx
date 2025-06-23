import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { InputIcon } from 'primereact/inputicon';

import { useCart } from "../hooks/useCart";

import Button from "./Button";
import InputSearch from "./InputSearch";
import ItemLinkNav from "./ItemLinkNav";
import Logo from "./Logo";
import ModalCart from "./ModalCart";
import SideBarMenu from "./Sidebar";

import iconCart from '../assets/mini-cart.svg';

const Header = () => {
  const { items } = useCart();
  const { pathname } = useLocation();

  const [inputActive, setInputActive] = useState(false);
  const [visibleSideBar, setVisibleSideBar] = useState(false);
  const [visibleCart, setVisibleCart] = useState(false);

  const quantityItemCart = items.length;

  return (
    <div className="flex bg-red justify-start md:h-[210px] h-[72px]">
      <div className="flex w-full bg-white z-10 h-min justify-center md:p-8 fixed">
        <header className="flex flex-col h-min w-full max-w-[1240px] md:gap-8">
          <div className="flex py-4 px-2.5 gap-5 items-center">
            <button
              className="md:hidden h-10 w-10 items-center justify-center"
              onClick={() => setVisibleSideBar(true)}>
              <InputIcon className="pi pi-bars text-gray" />
            </button>

            <Link to='/' className="md:flex hidden">
              <Logo height={40} />
            </Link>
            <div className="md:hidden flex flex-1 justify-center">
              <Link to='/'>
                <Logo height={24} />
              </Link>
            </div>
            <div className="md:flex flex-1 gap-8 items-center hidden">
              <InputSearch />
              <button
                className='text-dark_gray2 text-center duration-200 hover:brightness-120'
              >
                <span className="underline">Cadastrar</span>
              </button>
              <Button className="max-w-[120px]">
                Entrar
              </Button>
            </div>

            <div className="flex">
              <button
                className="md:hidden p-2 h-10 w-10 items-center justify-center cursor-pointer duration-200 hover:brightness-110"
                onClick={() => setInputActive(!inputActive)}
              >
                <InputIcon
                  className={`pi pi-search ${inputActive ? 'text-primary' :'text-light_gray2'}`}
                />
              </button>
              <button
                onClick={() => setVisibleCart(state => !state)}
                className="flex relative h-10 w-10 items-center justify-center cursor-pointer hover:brightness-110"
              >
                {quantityItemCart > 0 && (
                  <div className="absolute top-0.5 right-0.5 bg-primary h-4 w-4 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">{ quantityItemCart }</span>
                  </div>
                )}
                <img src={iconCart} alt="carrinho" />
              </button>
              {visibleCart && (
                <ModalCart onClose={() => setVisibleCart(false)} />
              )}
            </div>
          </div>
          {inputActive && (
            <div className="md:hidden pb-5 px-5">
              <InputSearch />
            </div>
          )}
          <SideBarMenu visible={visibleSideBar} onClose={() => setVisibleSideBar(false)} />
          
          <nav className='hidden md:flex'>
            <ul className='flex gap-8'>
              <li>
                <ItemLinkNav title="Home" path="/" isActive={"/" === pathname} />
              </li>
              <li>
                <ItemLinkNav title="Produtos" path="/produtos" isActive={"/produtos" === pathname} />
              </li>
              <li>
                <ItemLinkNav title="Categorias" path="/categorias" isActive={"/categorias" === pathname} />
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}
 
export default Header;