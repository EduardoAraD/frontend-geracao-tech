import { useState } from 'react';
import { InputIcon } from 'primereact/inputicon'

interface SelectProps {
  placeholder: string
  value: string
  onChangeText: (value: string) => void
}

const Select = ({ placeholder, value, onChangeText }: SelectProps) => {
  const [visibleOption, setVisibleOption] = useState(false);
  const options = ['mais relevante', 'mais barato', 'mais desconto'];

  const maxHeight = (35 * options.length);

  function onChange(value: string) {
    setVisibleOption(false);
    onChangeText(value);
  }

  return (
    <div className='flex flex-1 flex-col relative'>
      <button
        onClick={() => setVisibleOption(!visibleOption)}
        className="flex flex-1 h-15 border-dark_gray2 border-1 px-3.5 justify-between items-center gap-1 rounded-lg">
        <p className='text-[13px] text-dark_gray2'>
          {value === '' ? placeholder : (
            <>
              <strong>Ordernar por: </strong>
              {value}
            </>
          )}
        </p>
        <InputIcon className={`pi pi-chevron-${visibleOption ? 'up' : 'down'} text-lg text-dark_gray2`} />
      </button>
      <div
        style={{ height: visibleOption ? maxHeight : 0 }}
        className='absolute mt-15 flex flex-col w-full z-10 rounded-lg overflow-hidden duration-200'>
        {options.map(item => (
          <button
            onClick={() => onChange(item)}
            className='bg-light_gray2 flex py-2 px-3 hover:brightness-105 cursor-pointer duration-200'
            key={item}>
            <p className='text-[13px] text-dark_gray'>
              {item}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
 
export default Select;