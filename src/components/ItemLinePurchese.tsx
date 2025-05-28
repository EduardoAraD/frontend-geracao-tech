interface ItemLinePurchaseProps {
  title: string;
  value: string
}

function ItemLinePurchase ({ title, value }: ItemLinePurchaseProps) {
  return (
    <p className="text-sm font-medium text-dark_gray" style={{ letterSpacing: 0.25 }}>
      <span className="text-light_gray">{title}: </span>{ value }
    </p>
  )
}

export default ItemLinePurchase;
