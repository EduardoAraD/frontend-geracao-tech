import { Link } from "react-router-dom";

interface Props {
  nameProduct: string
}

const TitlePage = ({ nameProduct }: Props) => {
  return (
    <div>
      <p className="text-dark_gray2 text-xs">
        <Link to='/'><strong>Home</strong></Link> / <Link to='/produtos'>Produtos</Link> / Tênis / Nike / 
      </p>
      <p className="text-dark_gray2 text-xs">
        { nameProduct }
      </p>
    </div>
  );
}
 
export default TitlePage;