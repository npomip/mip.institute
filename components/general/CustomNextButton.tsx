import React from 'react';
import stls from '@/styles/components/general/CustomPrevButton.module.sass'
import IconNextButton from '@/components/icons/IconNextButton';
import classNames from 'classnames';

const CustomNextButton = ({reviewNextBtn = false, happyStudents=false}) => {
  return (
    <div className={classNames({
      [stls.containerNext]: true,
      [stls.reviewNextBtn]: reviewNextBtn,
      [stls.happyStudentsNextBtn]: happyStudents
    })}>
    <button 
    className="custom-next-button">
      <IconNextButton />
    </button>
    </div>
  );
};

export default CustomNextButton;
