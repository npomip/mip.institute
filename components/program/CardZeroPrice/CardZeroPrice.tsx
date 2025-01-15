import React from 'react'
import stls from './CardZeroPrice.module.sass'
import PopupTrigger from '@/ui/PopupTrigger'
import Image from 'next/image'

const CardZeroPrice = () => {
  const year = new Date().getFullYear()
  return ( 
      <div className={stls.content}>
      <Image
          className={stls.calendareBigDesc}
          alt='Календарь большой для десктопов'
          src='https://res.cloudinary.com/mipinstitute/image/upload/v1736862749/Calendare_Big_Desc_d8640b8cb8.png'
          width={180}
          height={251}
        />
         <Image
          className={stls.calendareSmallDesc}
          alt='Календарь маленький для десктопов'
          src='https://res.cloudinary.com/mipinstitute/image/upload/v1736862749/Calendare_Small_Desc_302687c604.png'
          width={154}
          height={255}
        />
         <Image
          className={stls.calendareBigMob}
          alt='Календарь большой для телефона'
          src='https://res.cloudinary.com/mipinstitute/image/upload/v1736866571/Calendare_Big_Mob_194f5a216b.png'
          width={120}
          height={170}
        />
         <Image
          className={stls.calendareSmallMob}
          alt='Календарь маленький для телефона'
          src='https://res.cloudinary.com/mipinstitute/image/upload/v1736866572/Calendare_Small_Mob_056b25fe31.png'
          width={96}
          height={135}
        />
        <div className={stls.spanLine}>
          <p className={stls.startSales}>
            Старт продаж <br /> в {year} г.{' '}
          </p>
        </div>
        <div className={stls.btns}>
          <div
            className={stls.btnquestion}>
            <PopupTrigger btn='zeta' cta='askQuestion' />
          </div>
          <p>Записаться на курс или получить бесплатную консультацию</p>
          <div className={stls.askQuestion}>
            <PopupTrigger btn='alpha' cta='signUp' />
          </div>
        </div>
      </div>
  )
}

export default React.memo(CardZeroPrice)
