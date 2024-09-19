import PopupTrigger from '@/components/general/PopupTrigger'
import IconCloseCircle from '@/components/icons/IconCloseCircle'
import IconForStickyBottom from '@/components/icons/IconForStickyBottom'
import IconInfoOrange from '@/components/icons/IconInfoOrange'
import Wrapper from '@/components/layout/Wrapper'
import ProgramDiscountUntil from '@/components/program/ProgramDiscountUntil'
import { routes } from '@/config/index'
import { discount } from '@/data/price'
import stls from '@/styles/components/layout/StickyBottom.module.sass'
import cn from 'classnames'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'

const StickyBottom = () => {
  const router = useRouter()
  const [isShown, setIsShown] = useState(true)
  const [isClosed, setIsClosed] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const roistat_visit = getCookie('roistat_visit')

  useEffect(() => {
    if (router.asPath !== routes.front.payment) {
      // document.addEventListener('scroll', () => {
      //   const scrollHeight = document.body.scrollHeight
      //   const pageYOffset = window.pageYOffset
      //   pageYOffset > (scrollHeight * 10) / 1000 &&
      //   pageYOffset + window.innerHeight < (scrollHeight * 90) / 100 &&
      //   !isClosed
      //     ? setIsShown(true)
      //     : setIsShown(false)
      // })
    }
    setIsLoaded(true)
  }, [router, setIsShown, isClosed])

  if (isLoaded)
    return (
      <div
        className={cn({
          [stls.container]: true,
          [stls.isShown]: isShown,
          [stls.isClosed]: isClosed
        })}>
        <Wrapper>
          <div className={stls.content}>
            <div className={stls.text}>
              <span className={stls.title}>Скидка до {discount}</span>
              <span className={stls.description}>на все программы и курсы</span>
              <span className={stls.discount}>
                <ProgramDiscountUntil />
              </span>
            </div>
            <div className={stls.shape}>
              <IconForStickyBottom />
            </div>

            <Popup
              trigger={
                <button>
                  <IconInfoOrange />
                </button>
              }
              position='top center'
              on={window.innerWidth <= 768 ? 'click' : 'hover'}
              closeOnDocumentClick
              arrow={false}
              offsetY={15}
              contentStyle={{
                boxShadow: 'none'
              }}>
              <div className={stls.tooltip}>
                <div className={stls.icon}>
                  <IconInfoOrange />
                </div>
                Информацию о скидках и дополнительных бонусах при поступлении
                уточняйте у менеджеров приемной комиссии
              </div>
            </Popup>
          </div>
          <div className={stls.btns}>
            <PopupTrigger btn='alpha' cta='submitApplication' />
            <div className={stls.btn2}>
              <PopupTrigger btn='beta' cta='consultMe' />
            </div>
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
            <PopupTrigger btn='alpha' cta='submitApplication' />
          </div>
        </Wrapper>
        <button className={stls.close} onClick={() => setIsClosed(true)}>
          <IconCloseCircle blackCross />
        </button>
      </div>
    )

  return null
}

export default StickyBottom
