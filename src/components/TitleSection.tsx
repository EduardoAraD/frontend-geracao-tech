import { Link } from "react-router-dom";
import { InputIcon } from 'primereact/inputicon'

interface TitleSectionProps {
  showLink?: boolean
}

const TitleSection = ({ showLink = false }: TitleSectionProps) => {
  return (
    <div className="flex justify-between items-center">
      <h4 className="text-base text-dark_gray2 font-bold">Coleções em destaque</h4>
      {showLink && (
        <Link to='/' className="text-primary flex items-center gap-2 text-sm font-medium">
          Ver todos
          <InputIcon className="pi pi-arrow-right size-3.5 text-primary" />
        </Link>
      )}
    </div>
  );
}
 
export default TitleSection;