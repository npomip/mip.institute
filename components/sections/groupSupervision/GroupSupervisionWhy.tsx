import stls from '@/styles/components/sections/groupSupervision/GroupSupervisionWhy.module.sass'
import { useState } from 'react'
import classNames from 'classnames'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import SwiperCore from 'swiper'
import { Scrollbar } from 'swiper/modules'
import whyInfo from 'constants/GroupSupervision/whyInfo'

SwiperCore.use([Scrollbar])

const GroupSupervisionWhy = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <section className={stls.container}>
      <h2 className={stls.title}>
        <span className={stls.coloredTitle}>Зачем идти </span>
        {isMobileAndTabletLayout ? (
          <>
            <br />
            на супервизию?
          </>
        ) : (
          ' на супервизию?'
        )}
      </h2>
      {whyInfo.map((el, idx) => (
        <div className={stls.block} key={el.subTitle + idx}>
          <div className={stls.textBlock}>
            <h3 className={stls.subTitle}>{el.subTitle}</h3>
            <ul className={stls.list}>
              {el.list.map((el, idx) => (
                <li key={idx} className={stls.line}>
                  <p className={stls.text}>{el}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  )
}

export default GroupSupervisionWhy
