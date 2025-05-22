interface ValueCartProps {
  title: string;
  descountInPorcentage: number; // 1 = 1%
  total: number;
}

const ValueCart = ({ title, descountInPorcentage, total }: ValueCartProps) => {
  const totalString = total.toFixed(2).replace('.', ',');
  const totalWithDescountString = (total * (1 - descountInPorcentage / 100)).toFixed(2).replace('.', ',')

  return (
    <div className="flex items-center">
      <p className="flex-1 text-sm text-dark_gray2 font-medium uppercase">{ title }</p>
      <div className="flex h-7 items-center gap-2">
        <span className="text-xs font-normal text-light_gray2 line-through">R$ {totalString}</span>
        <strong className="text-base text-dark_gray2">R$ {totalWithDescountString}</strong>
      </div>
    </div>
  );
}
 
export default ValueCart;
