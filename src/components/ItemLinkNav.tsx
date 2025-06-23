import { Link } from "react-router-dom";

interface ItemLinkNavProps {
  isActive: boolean;
  title: string;
  path: string;
}

const ItemLinkNav = ({ isActive, title, path }: ItemLinkNavProps) => {
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

export default ItemLinkNav;
