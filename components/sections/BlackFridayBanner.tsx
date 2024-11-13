import PopupTrigger from '@/ui/PopupTrigger'
import IconCloseCircle from '@/components/icons/IconCloseCircle'
import IconForStickyBottom from '@/components/icons/IconForStickyBottom'
import IconInfoOrange from '@/components/icons/IconInfoOrange'
import Wrapper from '@/ui/Wrapper'
import ProgramDiscountUntil from '@/components/program/ProgramDiscountUntil'
import { routes } from '@/config/index'
import { discount } from '@/data/price'
import stls from '@/styles/components/sections/BlackFridayBanner.module.sass'
import cn from 'classnames'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import IconPortalViolet from '../icons/IconPortalViolet'
import classNames from 'classnames'
import bannerBackground from '@/public/assets/imgs/blackFriday/bannerBackground.png'
import bannerBackgroundMob from '@/public/assets/imgs/blackFriday/bannerBackgroundMob.png'
import pink from '@/public/assets/imgs/blackFriday/pink.png'
import pink2 from '@/public/assets/imgs/blackFriday/pink2.png'
import percent from '@/public/assets/imgs/blackFriday/percent.png'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import Image from 'next/image'

const BlackFridayBanner = () => {
  const router = useRouter()
  const [isShown, setIsShown] = useState(true)
  const [isClosed, setIsClosed] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const roistat_visit = getCookie('roistat_visit')

  useEffect(() => {
    setIsLoaded(true)
  }, [router, setIsShown, isClosed])

  if (isLoaded)
    return (
      <div
        className={cn({
          [stls.container]: true,
          [stls.isShown]: isShown,
          [stls.isClosed]: isClosed
        })}
        style={{
          backgroundImage: `url(${isMobileAndTabletLayout ? bannerBackgroundMob.src : bannerBackground.src})`,
          backgroundSize: 'cover'
        }}>
        <div className={stls.leftCrystal}>
          <Image
            src={pink}
            alt='Кристалл'
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </div>
        <Wrapper>
          <div className={stls.content}>
            <div className={stls.text}>
              <span className={stls.title}>
                Акция ко дню психолога 1+1...+1!
              </span>
              <p className={stls.description}>
                {isMobileAndTabletLayout ? (
                  <>
                    {'Начните обучаться в МИП'}
                    <br />
                    {'и получите '}
                  </>
                ) : (
                  'Начните обучаться в МИП и получите '
                )}
                <span className={stls.colored}>2 программы в подарок!</span>
              </p>
              <p className={stls.subTitle}>
                *список программ участвующих в акции уточняйте у приёмной
                комисии
              </p>
            </div>
          </div>
          <div className={stls.percent}>
            <Image
              src={percent}
              alt='Процент'
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </div>
          <div className={stls.btn}>
            <PopupTrigger btn='alpha' cta='takeAction' />
          </div>
          <div
            className='js-whatsapp-message-container'
            style={{ display: 'none' }}>
            <p>
              Обязательно отправьте это сообщение и дождитесь ответа. Ваш номер
              обращения: {roistat_visit}
            </p>
          </div>
          <div className={stls.btnMobile}>
            <PopupTrigger btn='alpha' cta='takeAction' />
          </div>
        </Wrapper>
        <div className={stls.rightCrystal}>
          <Image
            src={pink2}
            alt='Процент'
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </div>
        <button className={stls.close} onClick={() => setIsClosed(true)}>
          <IconCloseCircle blackCross />
        </button>
      </div>
    )

  return null
}

export default BlackFridayBanner
