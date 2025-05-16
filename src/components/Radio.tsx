interface RadioProps {
  checked: boolean;
  onChecked: (value: boolean) => void
  title: string
}

const Radio = ({ checked, onChecked, title }: RadioProps) => {
  return (
    <button
      onClick={() => onChecked(!checked)}
      className="flex gap-2.5 items-center">
      <div
        className={`flex justify-center items-center border-1 h-5.5 w-5.5 rounded-full duration-200 hover:brightness-120 ${checked ? 'border-primary' : 'border-dark_gray2'}`}
      >
        {checked && (
          <div className='w-3.5 h-3.5 bg-primary rounded-full' />
        )}
      </div>
      <label
        className="font-medium text-sm text-dark_gray2"
        htmlFor="radio">
        {title}
      </label>
    </button>
  );
}
 
export default Radio;
