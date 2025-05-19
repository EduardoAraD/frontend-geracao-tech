import { InputIcon } from "primereact/inputicon";

interface StarsScoreProps {
  score: number;
}

const StarScore = ({ score }: StarsScoreProps) => {
  return (
    <div className="flex px-3 h-6 gap-1 bg-warning rounded-sm items-center">
      <p className="text-sm font-black text-white">
        { score }
      </p>
      <InputIcon
        className="pi pi-star-fill text-sm text-white"
      />
    </div>
  );
}
 
export default StarScore;