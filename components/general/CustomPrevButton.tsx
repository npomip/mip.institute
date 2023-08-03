import React from 'react';
import stls from '@/styles/components/general/CustomPrevButton.module.sass'
import IconPrevButton from '../icons/IconPrevButton';

const CustomPrevButton = () => {
  return (
    <div className={stls.containerPrev}>
    <button className="custom-prev-button">
     <IconPrevButton />
    </button>
    </div>
  );
};

export default CustomPrevButton;