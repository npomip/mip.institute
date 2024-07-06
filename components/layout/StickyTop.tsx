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

const StickyTop = () => {
  const [isPromoUsed, setIsPromoUsed] = useState(false)

  return (
    <div className={stls.container}>
      <Wrapper>
        <div className={stls.content}>
          <div className={stls.left}>
            <div className={stls.icon}>
              <IconPortalViolet />
            </div>
            <div className={stls.text}>
              Активируйте промокод
              <span className={stls.bold}> “Прогребижская”</span> и получите
              дополнительную <span className={stls.bold}>скидку 10%</span>
            </div>
          </div>
          <div className={stls.btn}>
            <PopupTrigger
              btn='gamma'
              cta='use'
              isActivePromocode='Прогребижская'
            />
          </div>
        </div>
        <div className={stls.mobileBtn}>
          <PopupTrigger
            btn='gamma'
            cta='use'
            isActivePromocode='Прогребижская'
          />
        </div>
      </Wrapper>
    </div>
  )
}

export default StickyTop
