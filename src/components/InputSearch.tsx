import { InputIcon } from 'primereact/inputicon';

const InputSearch = () => {
  return (
    <div className='flex w-full bg-light_gray3 border border-light_gray3 rounded-lg overflow-hidden focus-within:border focus-within:border-primary focus:outline-primary'>
      <input
        className='text-base text-dark_gray flex-1 placeholder:text-light_gray2 px-3 focus:border-0 outline-0'
        placeholder='Pesquisar produto...'
        type="text"
      />
      <button className='flex items-center justify-center w-14 h-14 cursor-pointer'>
        <InputIcon className="pi pi-search text-light_gray2" />
      </button>
    </div>
  );
}
 
export default InputSearch;