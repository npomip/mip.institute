import React, { useRef } from 'react'
import stls from '@/styles/components/filters/FiltersForLifeCoursesMobile.module.sass'
import Popup from 'reactjs-popup'
import IconFilterOpen from '../icons/IconFilterOpen';

export default function FiltersForLifeCoursesMobile({children, btnTitle}) {

  const scrollToRef = useRef(null);

  return (
    <div ref={scrollToRef} className={stls.container}>
      
    <Popup
    
            className='popupOverlay-liveCourses'
            position={'bottom center'}
            lockScroll={true}
            trigger={<button className={stls.trigger}><IconFilterOpen /></button>}
            modal
            nested
            // className={stls.popupContainer}

            contentStyle={{
              padding: '0',
            }}
            overlayStyle={{ background: 'rgba(0, 0, 0, 0.35)' }}>
              {close => (
                <div className={stls.modal}>
                {children}
            <button className={stls.btn} onClick={()=> {
              scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
              close()}}>{btnTitle}</button>
              </div>
              )}
              
          </Popup>
          </div>
  )
}
