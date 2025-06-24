import { useEffect, useState } from 'react';
import { Sidebar } from 'primereact/sidebar';

import FilterProducts from './FilterProducts';

interface Props {
  visible: boolean;
  onClose(): void;
}

const SideBarFilter = ({ visible, onClose }: Props) => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)
  
  const handleWindowSizeChange = () => {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  useEffect(() => {
    if(screenWidth > 768 && visible) {
      onClose();
    }
  }, [onClose, screenWidth, visible])

  return (
    <Sidebar
      className='mt-18'
      style={{ height: 'calc(100% - 4.5rem)', width: '300px' }}
      closeIcon={() => (<></>)}
      visible={visible}
      onHide={onClose}
    >
      <FilterProducts onClose={onClose} />
    </Sidebar>
  );
}
 
export default SideBarFilter;
