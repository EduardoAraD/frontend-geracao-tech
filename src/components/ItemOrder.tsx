interface ItemOrderProps {
  status: 'finish' | 'transit' | 'cancel' | 'progress';
}

const ItemOrder = ({ status }: ItemOrderProps) => {

  const statusRender = () => {
    if(status === 'cancel') {
      return <strong className="text-sm text-error">Cancelado</strong>
    }
    else if(status === 'finish') {
      return <strong className="text-sm text-light_gray">Finalizado</strong>
    }
    else if(status === 'transit') {
      return <strong className="text-sm text-warning">Produto em trânsito</strong>
    }

    return (
      <strong className="text-sm text-secundary">Para empacotar</strong>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-5">
        <img
          className="object-cover rounded-xs max-h-12 h-full"
          src="/produc-image-1.jpeg"
          alt=""
        />
        <div className="flex flex-1 flex-col">
          <span className="font-medium text-light_gray text-[0.625rem]">
            Pedido nº 233762153
          </span>
          <strong className="text-sm pb-2.5 text-dark_gray">
            Tênis Nike Revolutiuon 6 Next nature Masculino
          </strong>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-medium text-xs text-dark_gray2">
          STATUS
        </span>
        {statusRender()}
      </div>
    </div>
  );
}
 
export default ItemOrder;