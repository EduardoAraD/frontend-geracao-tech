import { Link } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';

import Button from './Button';

interface Props {
  visible: boolean;
  onVisible: (value: boolean) => void
}

const SideBarMenu = ({ visible, onVisible }: Props) => {
  // const { pathname } = useLocation();

  //75, 36
  return (
    <Sidebar
      className='mt-18 p-7.5 bg-white'
      style={{ height: 'calc(100% - 4.5rem)'}}
      closeIcon={() => (<></>)}
      visible={visible} onHide={() => onVisible(false)}
    >
      <section className='flex flex-col gap-5 h-full'>
        <h4 className='text-base font-bold text-dark_gray2'>Páginas</h4>
        <nav className='flex flex-1'>
          <ul className='flex flex-col gap-2.5'>
            <li><Link
              className='text-primary font-bold border-b-primary border-b-2 hover:brightness-110'
              to="/">Home</Link></li>
            <li><Link className='text-dark_gray2 hover:brightness-120' to="/">Produtos</Link></li>
            <li><Link className='text-dark_gray2' to="/">Categorias</Link></li>
            <li><Link className='text-dark_gray2' to="/">Meus Pedidos</Link></li>
          </ul>
        </nav>
        <div className='flex flex-col border-t-1 border-light_gray2 gap-5 pt-5 items-center'>
          <Button>Entrar</Button>
          <Link
            className='text-dark_gray2 text-center border-b-1 duration-200 hover:brightness-120'
            to='/'
          >Cadastrar</Link>
        </div>
      </section>
    </Sidebar>
  );
}
 
export default SideBarMenu;