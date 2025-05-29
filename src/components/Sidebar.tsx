import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';

import Button from './Button';
import Card from './Card';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const SideBarMenu = ({ visible, onClose }: Props) => {
  const navigate = useNavigate()
  const { pathname } = useLocation();

  function goToLogin() {
    onClose();
    navigate('/login')
  }

  function goToRegister() {
    onClose();
    navigate('/cadastrar')
  }

  function itemLink({ path, title }: { path: string, title: string }) {
    const isActive = path === pathname;

    return (
      <Link
        className={
          'hover:brightness-110 duration-200 border-b-2 ' +
          (isActive ? 'text-primary font-bold border-b-primary' : 'text-dark_gray2 border-b-white')
        }
        to={path}>
        {title}
      </Link>
    )
  }

  //75, 36
  return (
    <Sidebar
      className='mt-18 p-7.5 bg-white'
      style={{ height: 'calc(100% - 4.5rem)'}}
      closeIcon={() => (<></>)}
      visible={visible} onHide={() => onClose()}
    >
      <section className='flex flex-col gap-5 h-full'>
        <h4 className='text-base font-bold text-dark_gray2'>Olá Francisco</h4>
        <nav className='flex'>
          <ul className='flex flex-col gap-2.5'>
            <li><Link className='text-dark_gray2' to="/minha-conta">Minhas Informações</Link></li>
            <li><Link className='text-dark_gray2' to="/minha-conta/metodos-de-pagamento">Métodos de Pagamento</Link></li>
          </ul>
        </nav>
        <Card.Line />
        <h4 className='text-base font-bold text-dark_gray2'>Páginas</h4>
        <nav className='flex flex-1'>
          <ul className='flex flex-col gap-2.5'>
            <li>{itemLink({ title: 'Home', path: '/' })}</li>
            <li>{itemLink({ title: 'Produtos', path: '/produtos' })}</li>
            <li>{itemLink({ title: 'Categorias', path: '/categorias' })}</li>
            <li>{itemLink({ title: 'Meus Pedidos', path: '/minha-conta/meus-pedidos' })}</li>
          </ul>
        </nav>
        <div className='flex flex-col border-t-1 border-light_gray2 gap-5 pt-5 items-center'>
          <Button onClick={goToLogin}>
            Entrar
          </Button>
          <button
            className='text-dark_gray2 text-center border-b-1 duration-200 hover:brightness-120'
            onClick={goToRegister}
          >Cadastrar</button>
        </div>
      </section>
    </Sidebar>
  );
}
 
export default SideBarMenu;