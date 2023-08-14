import React from 'react';
import stls from '@/styles/components/general/CustomPrevButton.module.sass'
import IconPrevButton from '../icons/IconPrevButton';
import classNames from 'classnames';

const CustomPrevButton = ({reviewPrevBtn, isLastSlide}) => {
  return (
    <div className={classNames({
        [stls.containerPrev]: true,
        [stls.reviewPrevBtn]: reviewPrevBtn,
        [stls.lastSlidePrev] : isLastSlide
      })}
    >
    <button className="custom-prev-button">
      <IconPrevButton />
    </button>
    </div>
  );
};

export default CustomPrevButton;