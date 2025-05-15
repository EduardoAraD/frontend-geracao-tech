import { Link } from "react-router-dom";

import Logo from "./Logo";
import logoFace from '../assets/facebook.svg';
import logoInstagram from '../assets/instagram.svg';
import logoTwitter from '../assets/twitter.svg';

const Footer = () => {
  return (
    <footer className="bg-dark_gray2 px-5 py-12">
      <section className="flex flex-col gap-10">
        <div className="pt-1 flex flex-col gap-5">
          <div className="flex items-startjustify-items-start w-auto">
            <Logo height={29} color="WHITE" />
          </div>
          
          <p className="text-sm font-medium text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias corporis asperiores distinctio sequi at ex aut optio temporibus fugit? Quis aperiam hic nam voluptatem. Distinctio ipsa voluptatum repellendus molestiae?
          </p>
          <div className="flex mt-2.5 gap-8">
            <Link to='/' className="duration-200 hover:brightness-90">
              <img src={logoFace} alt="facebook" />
            </Link>
            <Link to='/' className="duration-200 hover:brightness-90">
              <img src={logoInstagram} alt="Instagram" />
            </Link>
            <Link to='/' className="duration-200 hover:brightness-90">
              <img src={logoTwitter} alt="Twitter" />
            </Link>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-1 flex-col">
            <h4 className="text-lg text-white font-semibold">Informação</h4>
            <ul className="mt-2.5 flex flex-col gap-1">
              <li className="text-white">Sobre Drip Store</li>
              <li className="text-white">Segurança</li>
              <li className="text-white">Wishlist</li>
              <li className="text-white">Blog</li>
              <li className="text-white">Trabalhe Conosco</li>
              <li className="text-white">Meus Pedidos</li>
            </ul>
          </div>
          <div className="flex flex-1 flex-col">
            <h4 className="text-lg text-white font-semibold">Categorias</h4>
            <ul className="mt-2.5 flex flex-col gap-1">
              <li className="text-white">Camisetas</li>
              <li className="text-white">Calças</li>
              <li className="text-white">Bonés</li>
              <li className="text-white">Headphones</li>
              <li className="text-white">Tênis</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <h4 className="text-lg text-white font-semibold">Contato</h4>
          <p className="text-white font-normal">
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
          </p>
          <p className="text-white mt-5">(85) 3051-3411</p>
        </div>
      </section>
      <div className="flex mt-10 border-t-1 border-white justify-center">
        <p className="mt-6 text-sm font-light text-white">
          @2022 Digital College
        </p>
      </div>
    </footer>
  );
}
 
export default Footer;