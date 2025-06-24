import { useState } from 'react';
import { InputIcon } from 'primereact/inputicon';

import { listGenderProductView } from '../Model/GenderProduct';
import Checkbox from './Checkbox';
import Radio from './Radio';

interface Props {
  onClose:() => void
}

type StateOptions = 'new' | 'old'
const listMarks = ["Adiddas","Calenciaga","K-Swiss", "Nike", "Puma"];
const listCategorys = ["Esporte e lazer", "Casual", "Utilitário", "Corrida"];

const FilterProducts = ({ onClose }: Props) => {
  const [filterState, setFilterState] = useState<StateOptions | ''>('');
  const [filterMarks, setFilterMarks] = useState<string[]>([]);
  const [filterCategorys, setFilterCategorys] = useState<string[]>([]);
  const [filterGenders, setFilterGenders] = useState<string[]>([]);

  function selectedFilterState(value: StateOptions) {
    if(value === filterState) {
      setFilterState('')
    } else {
      setFilterState(value);
    }
  }

  function handleAddFilterMarks(value: string) {
    const notHasValue = filterMarks.find(item => item === value) === undefined;
    if(notHasValue) {
      setFilterMarks(state => [...state, value])
    } else {
      setFilterMarks(state => state.filter(item => item !== value));
    }
  }

  function handleAddFilterCategorys(value: string) {
    const notHasValue = filterCategorys.find(item => item === value) === undefined;
    if(notHasValue) {
      setFilterCategorys(state => [...state, value])
    } else {
      setFilterCategorys(state => state.filter(item => item !== value));
    }
  }

  function handleAddFilterGenders(value: string) {
    const notHasValue = filterGenders.find(item => item === value) === undefined;
    if(notHasValue) {
      setFilterGenders(state => [...state, value])
    } else {
      setFilterGenders(state => state.filter(item => item !== value));
    }
  }

  return (
    <section className='flex flex-col h-full w-[300px] bg-white rounded-sm p-7.5'>
      <div className='flex justify-between items-center'>
        <h4 className='font-bold text-base text-dark_gray2'>Filtrar por</h4>
        <button
          onClick={onClose}
          className='md:hidden px-1 cursor-pointer hover:brightness-125'>
          <InputIcon className='pi pi-times text-sm text-dark_gray2' />
        </button>
      </div>
      
      <div className='w-full bg-red-500 border-t border-light_gray2 mt-5' />

      <div className='flex flex-col gap-5 overflow-auto pt-5 pb-2'>
        <div className='flex gap-2.5 flex-col'>
          <h5 className='text-sm font-bold text-dark_gray2'>Marca</h5>
          {listMarks.map(item => (
            <Checkbox
              key={item}
              checked={!!filterMarks.find(filt => filt === item)}
              onChecked={() => handleAddFilterMarks(item)}
              title={item}
            />
          ))}
        </div>

        <div className='flex gap-2.5 flex-col'>
          <h5 className='text-sm font-bold text-dark_gray2'>Categoria</h5>
          {listCategorys.map(item => (
            <Checkbox
              key={item}
              checked={!!filterCategorys.find(filt => filt === item)}
              onChecked={() => handleAddFilterCategorys(item)}
              title={item}
            />
          ))}
        </div>
        <div className='flex gap-2.5 flex-col'>
          <h5 className='text-sm font-bold text-dark_gray2'>Gênero</h5>
          {listGenderProductView.map(item => (
            <Checkbox
              key={item}
              checked={!!filterGenders.find(filt => filt === item)}
              onChecked={() => handleAddFilterGenders(item)}
              title={item}
            />
          ))}
        </div>
        <div className='flex gap-2.5 flex-col'>
          <h5 className='text-sm font-bold text-dark_gray2'>Estado</h5>
          <Radio checked={filterState === 'new'} onChecked={() => selectedFilterState('new')} title="Novo" />
          <Radio checked={filterState === 'old'} onChecked={() => selectedFilterState('old')} title="Usado" />
        </div>
      </div>
    </section>
  );
}
 
export default FilterProducts;