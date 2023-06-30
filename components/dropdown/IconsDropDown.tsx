import React, { useState } from 'react'
import stls from '@/styles/components/layout/Header.module.sass'
import IconContact from '../icons/IconContact'
import IconDropDownClock from '../icons/IconDropDownClock'
import IconEnterToPortal from '../icons/IconEnterToPortal'
import IconWeakVision from '../icons/IconWeakVision'
import classNames from 'classnames'
import ConnectInfo from './ConnectInfo'
import TimeOfWork from './TimeOfWork'
import WeakVision from './WeakVision'
import DistanceStudy from './DistanceStudy'


 function IconsDropDown() {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (icon) => {
    if (selectedIcon !== icon) {
      setSelectedIcon(icon);
    } 
    // else {
    //   setSelectedIcon(icon);
    // }
  };
  return (
    <div className={stls.popupWrapper} 
      onMouseLeave={() => handleIconClick(null)}
      >
        <div className={stls.dropdownIcon}>
          <IconContact
            onMouseEnter={() => handleIconClick('icon1')}
            className={selectedIcon === 'icon1' ? stls.selected : ''}
          />
          <IconDropDownClock
            onMouseEnter={() => handleIconClick('icon2')}
            onClick={() => handleIconClick('icon2')}
            className={selectedIcon === 'icon2' ? stls.selected : ''}
          />
          <IconWeakVision
            onMouseEnter={() => handleIconClick('icon3')}
            onClick={() => handleIconClick('icon3')}
            className={selectedIcon === 'icon3' ? stls.selected : ''}
          />
          <IconEnterToPortal
            onMouseEnter={() => handleIconClick('icon4')}
            onClick={() => handleIconClick('icon4')}
            className={selectedIcon === 'icon4' ? stls.selected : ''}
          />
        </div>
        <div
        onMouseEnter={() => console.log('inside')}
          className={classNames(stls.popupContent, {
            [stls.open]: selectedIcon !== null,
          })}
        >
          <ConnectInfo className={selectedIcon === 'icon1' ? stls.visible : stls.hidden} />
          <TimeOfWork className={selectedIcon === 'icon2' ? stls.visible : stls.hidden} />
          <WeakVision className={selectedIcon === 'icon3' ? stls.visible : stls.hidden} />
          <DistanceStudy className={selectedIcon === 'icon4' ? stls.visible : stls.hidden} />
        </div>
      </div>
  )
}

export default IconsDropDown