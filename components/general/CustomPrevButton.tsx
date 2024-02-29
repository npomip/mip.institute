import React from 'react';
import stls from '@/styles/components/general/CustomPrevButton.module.sass'
import IconPrevButton from '@/components/icons/IconPrevButton';
import classNames from 'classnames';

const CustomPrevButton = ({reviewPrevBtn=false, happyStudents=false}) => {
  return (
    <div className={classNames({
        [stls.containerPrev]: true,
        [stls.reviewPrevBtn]: reviewPrevBtn,
        [stls.happyStudentsPrevBtn]: happyStudents
      })}
    >
    <button className="custom-prev-button">
      <IconPrevButton />
    </button>
    </div>
  );
};

export default CustomPrevButton;