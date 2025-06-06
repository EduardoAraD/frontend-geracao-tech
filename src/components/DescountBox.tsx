interface DescountBoxProps {
  descount: number
}

const DescountBox = ({ descount }: DescountBoxProps) => {
  return (
    <div className="bg-highlight z-1 py-1.5 px-3 rounded-full">
      <p className="text-sm font-bold text-dark_gray2">{descount}% OFF</p>
    </div>
  );
}

export default DescountBox;