import { Link, useLocation } from "react-router-dom";
import Card from "./Card";

const CardMyProfile = () => {
  const { pathname } = useLocation();

  function itemLink({ path, title }: { path: string, title: string }) {
    const isActive = path === pathname;

    return (
      <Link
        className={
          'hover:brightness-110 duration-200 text-sm ' +
          (isActive ? 'text-primary font-bold' : 'font-medium text-dark_gray2')
        }
        to={path}>
        {title}
      </Link>
    )
  }

  return (
    <Card className="max-w-[330px] h-min md:flex hidden">
      <Card.Title>MEU PERFIL</Card.Title>
      <Card.Line />
      <nav>
        <ul className="flex flex-col gap-5">
          <li>{itemLink({ path: '/minha-conta/meus-pedidos', title: 'Meus Pedidos' })}</li>
          <Card.Line />
          <li>{itemLink({ path: '/minha-conta', title: 'Minhas Informações' })}</li>
          <Card.Line />
          <li>{itemLink({ path: '/minha-conta/medotos-de-pagamento', title: 'Métodos de Pagamento' })}</li>
        </ul>
      </nav>
    </Card>
  );
}
 
export default CardMyProfile;