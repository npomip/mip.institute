import PopupTrigger from '@/ui/PopupTrigger'
import IconCloseCircle from '@/components/icons/IconCloseCircle'
import IconInfoOrange from '@/components/icons/IconInfoOrange'
import Wrapper from '@/ui/Wrapper'
import ProgramDiscountUntil from '@/components/program/ProgramDiscountUntil'
import { routes } from '@/config/index'
import { discount } from '@/data/price'
import stls from './StickyButtonNewYers.module.sass'
import cn from 'classnames'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import Image from 'next/image'

const StickyBottomNewYers = () => {
  const router = useRouter()
  const [isShown, setIsShown] = useState(true)
  const [isClosed, setIsClosed] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const roistat_visit = getCookie('roistat_visit')

  useEffect(() => {
    if (router.asPath !== routes.front.payment) {
      // Можно добавить логику для отображения или скрытия
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
        <div className={stls.fullBackground}></div>

        <div className={stls.shape}>
          <Image
            alt='cytu'
            src='https://res.cloudinary.com/mipinstitute/image/upload/v1734687978/Snezhinki_f1dbb83e5c.png'
            width={250}
            height={95}
          />
        </div>
        <Wrapper>
          <div className={stls.content}>
            <div className={stls.text}>
              <Popup
                trigger={
                  <button
                    className={stls.info}
                    aria-label='Информация о скидках'>
                    <IconInfoOrange />
                  </button>
                }
                position='top left'
                on={window.innerWidth <= 768 ? 'click' : 'hover'}
                closeOnDocumentClick
                arrow={false}
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
              <span className={stls.title}>
                Скидка до <span className={stls.orangeTitle}>{discount}</span>
              </span>
              <span className={stls.description}>
                на все программы и курсы{' '}
              </span>
              <span className={stls.discount}>
                <ProgramDiscountUntil />
              </span>
            </div>
          </div>
          <div className={stls.containerGift}>
            <span className={stls.tree}>
              <Image
                alt='cytu'
                src='https://res.cloudinary.com/mipinstitute/image/upload/v1734695043/Bolshaya_Yolka_de4ce98ba9.png'
                width={60}
                height={70}
              />
            </span>
            <span className={stls.gift}>
              <Image
                alt='cytu'
                src='https://res.cloudinary.com/mipinstitute/image/upload/v1734695218/Podarok_c0298bce6e.png'
                width={55}
                height={40}
              />
            </span>
            <span className={stls.ballTree}>
              <Image
                alt='cytu'
                src='https://res.cloudinary.com/mipinstitute/image/upload/v1734695245/Malenkaya_yolka_de4e4a9a44.png'
                width={27}
                height={24}
              />
            </span>
          </div>
          <div className={stls.btns}>
            <PopupTrigger btn='alpha' cta='submitApplication' />
            <div className={stls.btn2}>
              <PopupTrigger btn='beta' cta='consultMe' />
            </div>
            <div className={stls.bow}>
              <Image
                alt='cytu'
                src='https://res.cloudinary.com/mipinstitute/image/upload/v1734689519/Novogodnij_Bant_f0c5361c74.png'
                width={88}
                height={77}
              />
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
            <div className={stls.bow}>
              <Image
                alt='cytu'
                src='https://res.cloudinary.com/mipinstitute/image/upload/v1734689519/Novogodnij_Bant_f0c5361c74.png'
                width={88}
                height={77}
              />
            </div>
          </div>
        </Wrapper>
        <button className={stls.close} onClick={() => setIsClosed(true)}>
          <IconCloseCircle blackCross />
        </button>
      </div>
    )

  return null
}

export default StickyBottomNewYers
