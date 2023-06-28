import React from 'react'
import stls from '@/styles/components/dropdownMenu/TimeOfWork.module.sass';
import classNames from 'classnames';
import IconOrangeDot from '../icons/IconOrangeDot';

interface Icon1Props {
  className?: string;
  selected?: boolean;
}

const TimeOfWork: React.FC<Icon1Props> = ({ className, selected = false }) => {
  const infoClasses = classNames(stls.container, {[stls.selected]: selected }, className);
  return (
    <div className={infoClasses}>
      <div className={stls.wrapper}>
        <IconOrangeDot />
        <p className={stls.title}>График работы:</p>
      </div>
      <p className={stls.description}>ПН-ЧТ 09:00 - 19:00</p>
      <p className={stls.description}>СБ-ВС выходной</p>
      <div className={stls.wrapper}>
        <IconOrangeDot />
        <p className={stls.title}>Адрес офиса:</p>
      </div>
      <p className={stls.description}>ул. Шаболовка, 34, стр. 2</p>
      <p className={stls.description}>Метро Шаболовская</p>
    </div>
  )
}

export default TimeOfWork