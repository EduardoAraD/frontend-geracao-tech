import { Link } from "react-router-dom";
import { InputIcon } from 'primereact/inputicon'

interface TitleSectionProps {
  showLink?: boolean
  title: string;
}

const TitleSection = ({ showLink = false, title }: TitleSectionProps) => {
  return (
    <div className="flex justify-between items-center">
      <h4 className="text-base md:text-2xl text-dark_gray2 font-bold">{ title }</h4>
      {showLink && (
        <Link to='/produtos' className="text-primary flex items-center gap-2 text-sm md:text-lg font-medium">
          Ver todos
          <InputIcon className="pi pi-arrow-right size-3.5 text-primary" />
        </Link>
      )}
    </div>
  );
}
 
export default TitleSection;