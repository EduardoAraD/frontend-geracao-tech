import { useState } from 'react';
import { InputIcon } from 'primereact/inputicon';
import { Sidebar } from 'primereact/sidebar';

import Checkbox from './Checkbox';
import Radio from './Radio';

interface Props {
  visible: boolean;
  onVisible: (value: boolean) => void
}

type GenderOptions = 'new' | 'old'

const SideBarFilter = ({ visible, onVisible }: Props) => {
  const [showAdiddas, setShowAdiddas] = useState(true);
  const [filterGender, setFilterGender] = useState<GenderOptions | ''>('');

  //75, 36

  function selectedFilterGender(value: GenderOptions) {
    if(value === filterGender) {
      setFilterGender('')
    } else {
      setFilterGender(value);
    }
  }
  return (
    <Sidebar
      className='mt-18 p-7.5 bg-white'
      style={{ height: 'calc(100% - 4.5rem)'}}
      closeIcon={() => (<></>)}
      visible={visible} onHide={() => onVisible(false)}
    >
      <section className='flex flex-col h-full'>
        <div className='flex justify-between items-center'>
          <h4 className='font-bold text-base text-dark_gray2'>Filter</h4>
          <button
            onClick={() => onVisible(false)}
            className='px-1 cursor-pointer hover:brightness-125'>
            <InputIcon className='pi pi-times text-sm text-dark_gray2' />
          </button>
        </div>
        
        <div className='w-full bg-red-500 border-t border-light_gray2 mt-5' />

        <div className='flex flex-col gap-5 overflow-auto pt-5 pb-2'>
          <div className='flex gap-2.5 flex-col'>
            <h5 className='text-sm font-bold text-dark_gray2'>Marka</h5>
            <Checkbox checked={showAdiddas} onChecked={setShowAdiddas} title="Adiddas" />
            <Checkbox checked={showAdiddas} onChecked={setShowAdiddas} title="Calenciaga" />
            <Checkbox checked={showAdiddas} onChecked={setShowAdiddas} title="K-Swiss" />
            <Checkbox checked={showAdiddas} onChecked={setShowAdiddas} title="Nike" />
            <Checkbox checked={showAdiddas} onChecked={setShowAdiddas} title="Puma" />
          </div>

          <div className='flex gap-2.5 flex-col'>
            <h5 className='text-sm font-bold text-dark_gray2'>Categoria</h5>
            <Checkbox checked={showAdiddas} onChecked={setShowAdiddas} title="Esporte e lazer" />
            <Checkbox checked={showAdiddas} onChecked={setShowAdiddas} title="Casual" />
            <Checkbox checked={showAdiddas} onChecked={setShowAdiddas} title="Utilitário" />
            <Checkbox checked={showAdiddas} onChecked={setShowAdiddas} title="Corrida" />
          </div>
          <div className='flex gap-2.5 flex-col'>
            <h5 className='text-sm font-bold text-dark_gray2'>Gênero</h5>
            <Checkbox checked={showAdiddas} onChecked={setShowAdiddas} title="Masculino" />
            <Checkbox checked={showAdiddas} onChecked={setShowAdiddas} title="Feminino" />
            <Checkbox checked={showAdiddas} onChecked={setShowAdiddas} title="Unisex" />
          </div>
          <div className='flex gap-2.5 flex-col'>
            <h5 className='text-sm font-bold text-dark_gray2'>Estado</h5>
            <Radio checked={filterGender === 'new'} onChecked={() => selectedFilterGender('new')} title="Novo" />
            <Radio checked={filterGender === 'old'} onChecked={() => selectedFilterGender('old')} title="Usado" />
          </div>
        </div>
      </section>
    </Sidebar>
  );
}
 
export default SideBarFilter;