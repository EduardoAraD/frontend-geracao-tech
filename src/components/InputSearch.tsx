import { InputIcon } from 'primereact/inputicon';
import { useState, type DetailedHTMLProps, type InputHTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';

const InputSearch = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  function handleSearch() {
    navigate(`/produtos?search=${search}`);
  }

  const handleEnterPress = (event: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    if (event.key === "Enter") {
      navigate(`/produtos?search=${search}`);
    }
  };

  return (
    <div className='flex w-full bg-light_gray3 border border-light_gray3 rounded-lg overflow-hidden focus-within:border focus-within:border-primary focus:outline-primary'>
      <input
        className='text-base text-dark_gray flex-1 placeholder:text-light_gray2 px-3 focus:border-0 outline-0'
        placeholder='Pesquisar produto...'
        type="text"
        value={search}
        id='search'
        onChange={e => setSearch(e.target.value)}
        onKeyDown={handleEnterPress}
      />
      <button
        className='flex items-center justify-center w-14 h-14 cursor-pointer'
        onClick={handleSearch}
      >
        <InputIcon className="pi pi-search text-light_gray2" />
      </button>
    </div>
  );
}
 
export default InputSearch;
