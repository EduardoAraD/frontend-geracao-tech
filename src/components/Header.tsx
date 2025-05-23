import { useState } from "react";
import { InputIcon } from 'primereact/inputicon';

import SideBarMenu from "./Sidebar";
import Logo from "./Logo";
import iconCart from '../assets/mini-cart.svg';
import InputSearch from "./InputSearch";
import ModalCart from "./ModalCart";

const Header = () => {
  const [inputActive, setInputActive] = useState(false);
  const [visibleSideBar, setVisibleSideBar] = useState(false);
  const [visibleCart, setVisibleCart] = useState(false)

  return (
    <header className="flex flex-col bg-white relative">
      <div className="flex py-4 px-2.5 gap-5 items-center">
        <button
          className="h-10 w-10 items-center justify-center"
          onClick={() => setVisibleSideBar(true)}>
          <InputIcon className="pi pi-bars text-gray" />
        </button>

        <div className="flex flex-1 justify-center">
          <Logo height={24} />
        </div>

        <div className="flex">
          <button
            className="p-2 h-10 w-10 items-center justify-center cursor-pointer duration-200 hover:brightness-110"
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
            <div className="absolute top-0.5 right-0.5 bg-primary h-4 w-4 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">2</span>
            </div>
            <img src={iconCart} alt="carrinho" />
          </button>
          {visibleCart && (
            <ModalCart />
          )}
        </div>
      </div>
      {inputActive && (
        <div className="pb-5 px-5">
          <InputSearch />
        </div>
      )}
      <SideBarMenu visible={visibleSideBar} onVisible={setVisibleSideBar} />
    </header>
  );
}
 
export default Header;