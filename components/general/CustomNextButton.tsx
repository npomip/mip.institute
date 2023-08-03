import React from 'react';
import stls from '@/styles/components/general/CustomPrevButton.module.sass'
import IconNextButton from '../icons/IconNextButton';

const CustomNextButton = () => {
  return (
    <div className={stls.containerNext}>
    <button className="custom-next-button">
      {/* Здесь можете добавить свои кастомные стили или иконку */}
      <IconNextButton />
    </button>
    </div>
  );
};

export default CustomNextButton;