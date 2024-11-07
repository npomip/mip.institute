import stls from '@/styles/components/sections/GratefullNew.module.sass'
import Wrapper from '@/ui/Wrapper'
import classNames from 'classnames'
import Link from 'next/link'
import IconArrowNew from '../icons/IconArrowNew'
import IconArrowLeft from '../icons/IconArrowLeft'
import gifts from '@/public/assets/imgs/gratefull/gifts.png'
import planes from '@/public/assets/imgs/gratefull/planes.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'
import promocodesWithGift from '@/helpers/promoWithGIfts'

const GratefullNew = () => {
  const [isPromo, setIsPromo] = useState(false)

  const utmCookie = getCookie('utm')
  const stringedUtm = utmCookie?.toString()
  useEffect(() => {
    setTimeout(() => {
      let foundPromo = false
      Object.keys(promocodesWithGift).forEach(code => {
        if (stringedUtm?.includes(code)) {
          setIsPromo(true)
          foundPromo = true
        }
      })
      if (!foundPromo) {
        setIsPromo(false)
      }
    }, 2000)
  }, [utmCookie])

  return (
    <section className={stls.container}>
      <Wrapper>
        <div
          className={stls.toHome}
          onClick={() => {
            window.location.href = '/'
          }}>
          <div className={stls.icon}>
            <IconArrowLeft />
          </div>
          <span className={stls.homespanage}>вернуться на главную</span>
        </div>
        <div className={stls.header}>
          <div className={stls.tag}>
            <span>поздравляем</span>
          </div>
          <h2 className={stls.title}>
            <span className={stls.coloredTitle}>спасибо</span> за заявку!
          </h2>
        </div>
        <div className={stls.columns}>
          <div
            className={classNames({
              [stls.layout]: true,
              [stls.gift]: true
            })}
            style={{
              backgroundImage: `url(${gifts.src})`,
              backgroundSize: 'cover'
            }}>
            <div className={stls.top}>
              <h3>
                Ваши данные переданы <br />в приемную комиссию,
              </h3>
              <p>
                специалист по поступлению скоро позвонит вам, а пока... нам
                есть, что вам сказать перед тем, как вы примете окончательное
                решение стать человеком, который будет помогать другим людям.
              </p>
            </div>
            {isPromo && (
                <div className={stls.bottom}>
                <p>
                  А пока, вы можете воспользоваться <br />
                  подарком от блогера
                </p>
                
                <Link
                  href={'https://mipinstitute.getcourse.ru/podp_mini_two'}
                  target='_blank'
                  className={stls.link}>
                  <button
                    className={classNames({
                      [stls.button]: true,
                      [stls.purple]: true
                    })}>
                    забрать подарок
                  </button>
                  <div
                    className={classNames({
                      [stls.iconLink]: true,
                      [stls.purple]: true
                    })}>
                    <IconArrowNew />
                  </div>
                </Link>
              </div>
              )}
            
          </div>
          <div
            className={classNames({
              [stls.layout]: true,
              [stls.telegramm]: true
            })}>
            <div className={stls.top}>
              <h3 className={stls.whiteText}>
                Присоединяйтесь <br />к телеграм-каналу
              </h3>
              <p className={stls.whiteText}>
                Есть нюансы профессии, о которых мы не пишем на сайте, заходите
                к нам в телеграм, пообщаемся там, ведь психолог должен обладать
                определенными качествами...
              </p>
            </div>
            <div className={stls.bottom}>
              <p></p>
              <Link
                href={'https://t.me/institut_mip_bot?start=start3'}
                target='_blank'
                className={stls.link}>
                <button
                  className={classNames({
                    [stls.button]: true,
                    [stls.white]: true
                  })}>
                  перейти в канал
                </button>
                <div
                  className={classNames({
                    [stls.iconLink]: true,
                    [stls.white]: true
                  })}>
                  <IconArrowNew orange />
                </div>
              </Link>
            </div>
            <div className={stls.backgroundImageRight}>
              <Image
                src={planes}
                alt='Самолеты'
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default GratefullNew
