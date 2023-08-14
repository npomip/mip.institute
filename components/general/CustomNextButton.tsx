import React from 'react';
import stls from '@/styles/components/general/CustomPrevButton.module.sass'
import IconNextButton from '../icons/IconNextButton';
import classNames from 'classnames';

const CustomNextButton = ({reviewNextBtn, isLastSlide}) => {
  console.log(isLastSlide)
  return (
    <div className={classNames({
      [stls.containerNext]: true,
      [stls.reviewNextBtn]: !isLastSlide,
      [stls.lastSlide] : isLastSlide
    })}>
    <button 
    className="custom-next-button">
      {/* Здесь можете добавить свои кастомные стили или иконку */}
      <IconNextButton />
    </button>
    </div>
  );
};

export default CustomNextButton;