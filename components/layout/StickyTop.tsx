import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/layout/StickyTop.module.sass'
import { useState } from 'react'
import IconPortalViolet from '../icons/IconPortalViolet'
import {
  BtnAlpha,
  BtnBeta,
  BtnDelta,
  BtnEpsilon,
  BtnGamma,
  BtnYt,
  BtnZeta
} from '../btns'
import PopupTrigger from '../general/PopupTrigger'
import classNames from 'classnames'
import { IconCloseCircle } from '../icons'

const StickyTop = ({onClick=undefined, isPromo=false, promoText=''}) => {
  const [isPromoUsed, setIsPromoUsed] = useState(false)
  
  return (
    <div  className={classNames({
      [stls.container]: true,
      [stls.nopromo]: !isPromo,
      [stls.promo]: isPromo
    })} >
      <Wrapper>
        <div className={stls.content}>
          <div className={stls.left}>
            <div className={stls.icon}>
              <IconPortalViolet />
            </div>
            <div className={stls.text}>
              Активируйте промокод
              <span className={stls.bold}> “{promoText}”</span> и получите
              дополнительную <span className={stls.bold}>скидку 10%</span>
            </div>
          </div>
          <div className={stls.btn}>
            <PopupTrigger
              btn='gamma'
              cta='use'
              isActivePromocode={promoText}
            />
          </div>
        </div>
        <div className={stls.mobileBtn}>
          <PopupTrigger
            btn='gamma'
            cta='use'
            isActivePromocode={promoText}
          />
        </div>
      </Wrapper>
      <div className={stls.close}>
        <IconCloseCircle onClick={onClick} blackCross />
      </div>
    </div>
  )
}

export default StickyTop
