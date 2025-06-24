import { Link } from "react-router-dom";

import { getNameCategory } from "../utils/getNameCategorys";

interface Props {
  nameProduct: string;
  categorys: string[];
}

const TitlePage = ({ nameProduct, categorys }: Props) => {
  return (
    <div>
      <p className="text-dark_gray2 text-xs">
        <Link to='/'><strong>Home</strong></Link> / <Link to='/produtos'>Produtos</Link> /{categorys.map(item => ` ${getNameCategory(item)} / `)}
      </p>
      <p className="text-dark_gray2 text-xs">
        { nameProduct }
      </p>
    </div>
  );
}
 
export default TitlePage;
