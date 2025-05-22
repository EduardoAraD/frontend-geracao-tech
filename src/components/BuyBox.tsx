interface BuyBoxProps {
  total: number
}

const BuyBox = ({ total }: BuyBoxProps) => {
  const parcelas = 10;
  const valueString = total.toFixed(2).replace('.', ',');
  const valueParcelado = (total / parcelas).toFixed(2).replace('.', ',')

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-dark_gray">Total</h3>
        <span className="text-lg font-bold text-primary">R$ {valueString}</span>
      </div>
      <span className="text-xs font-medium text-light_gray text-right">
        ou {parcelas}x de R$ {valueParcelado} sem juros
      </span>
    </div>
  );
}
 
export default BuyBox;