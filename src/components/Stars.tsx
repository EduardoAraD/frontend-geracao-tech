import { InputIcon } from "primereact/inputicon";

type OptionStar = 'pi-star-fill' | 'pi-star-half-fill' | 'pi-star'
interface StarsProps {
  score: number;
}

const Stars = ({ score }: StarsProps) => {
  const arrayNumberStar = [0, 1, 2, 3, 4];

  function handleNote(value: number): OptionStar {
    if (score > value + 0.75) return 'pi-star-fill'
    else if (score > value + 0.25) return 'pi-star-half-fill'
    else return 'pi-star'
  }

  return (
    <div className="flex gap-1">
      {arrayNumberStar.map((item, index) => (
        <InputIcon
          key={`${item}-${index}`}
          className={`pi ${handleNote(index)} text-sm text-warning`}
        />
      ))}
    </div>
  );
}
 
export default Stars;