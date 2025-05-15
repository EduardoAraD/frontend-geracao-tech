import DescountBox from "./DescountBox";

interface ColectionCardProps {
  descount: number;
  title: string;
  onClickButton: () => void;
  image: string;
}

const CollectionCard = ({ descount, title, onClickButton, image }: ColectionCardProps) => {
  return (
    <div className="relative h-[212px] w-full rounded-lg overflow-hidden">
      <img className="z-0 absolute top-0 left-0 h-full w-full object-cover" src={image} alt={`Coleção ${title}`} />
      <div className="flex flex-col items-start p-5 justify-between h-full">
        <DescountBox descount={descount} />
        {/* <p>{ title }</p> */}
        <button
          className="z-1 h-12 w-36 bg-white flex justify-center items-center duration-200 hover:brightness-95 cursor-pointer rounded-lg"
          onClick={onClickButton}>
          <span className="text-base font-bold text-primary">Comprar</span>
        </button>
      </div>
    </div>
  );
}
 
export default CollectionCard;