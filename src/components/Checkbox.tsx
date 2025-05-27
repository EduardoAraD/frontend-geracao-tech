import { InputIcon } from 'primereact/inputicon';

interface CheckboxProps {
  classname?: string
  checked: boolean;
  onChecked: (value: boolean) => void
  title: string
}

const Checkbox = ({ checked, onChecked, title, classname = '' }: CheckboxProps) => {
  return (
    <button
      onClick={() => onChecked(!checked)}
      className={`flex gap-2.5 items-center ${classname}`}>
      <div
        className={`flex justify-center items-center border-1 max-w-5.5 min-w-5.5 h-5.5 w-5.5 rounded-sm hover:brightness-120 ${checked ? 'bg-primary border-primary' : 'border-dark_gray2 bg-white'}`}
      >
        <InputIcon className='pi pi-check text-white text-xs' />
      </div>
      <label
        className="font-medium text-sm text-dark_gray2"
        htmlFor="checkbox">
        {title}
      </label>
    </button>
  );
}
 
export default Checkbox;