import React from 'react'
import stls from '@/styles/components/dropdownMenu/WeakVision.module.sass';
import classNames from 'classnames';
import IconSadFace from '../icons/IconSadFace';

interface Icon1Props {
  className?: string;
  selected?: boolean;
}

const WeakVision: React.FC<Icon1Props> = ({ className, selected = false }) => {
  const infoClasses = classNames(stls.container, {[stls.selected]: selected }, className);
  return (
    <div className={infoClasses}>
      <div className={stls.wrapper}>
        <h3>Версия для слабовидящих</h3>
        <p>Страница находится в процессе разработки.</p>
        <div className={stls.icon}>
          <IconSadFace />
        </div>
      </div>
      
      
    </div>
  )
}

export default WeakVision