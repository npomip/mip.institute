import stls from '@/styles/components/sections/WebinarsAlt.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import Popup from 'reactjs-popup'
import PopupTrigger from '@/components/general/PopupTrigger'
import { PopupCta } from '@/components/popups'
import CardWebinarAlt from '@/components/cards/CardWebinarAlt'
import { ImgWebinar } from '@/components/imgs'
import getImageHeight from '@/helpers/getImageHeight'
import src from '@/public/assets/imgs/webinars/webinars.jpeg'
import Image from 'next/image'
import Divider from '../general/Divider'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

type WebinarsAltType = {
  webinars: any
}

const WebinarsAlt = ({ webinars = null }: WebinarsAltType) => {
  const isTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <section className={stls.container}>
      <Wrapper>
        <h1 className={stls.title}>Лекторий</h1>
        <ul className={stls.webinars}>
          {webinars &&
            [...webinars]
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((webinar, idx) => (
                <li
                  key={`${webinar.name || 'CardWebinarAlt'}-${idx}`}
                  className={stls.webinar}>
                  <Popup
                    trigger={
                      <div className={stls.trigger}>
                        <CardWebinarAlt
                          date={webinar.date}
                          name={webinar.name}
                          picture={
                            <ImgWebinar
                              src={webinar?.picture?.url}
                              alt={webinar.title}
                              width={70}
                              height={getImageHeight({
                                width: 70,
                                widthInitial: webinar?.picture?.width,
                                heightInitial: webinar?.picture?.height
                              })}
                            />
                          }
                          title={webinar.title}
                        />
                        <div className={stls.card}>
                          <Image
                            className={stls.image}
                            width={isTabletLayout ? 768 : 573}
                            height={isTabletLayout ? 370 : 370}
                            src={src}
                            alt='Карточка программы'
                          />
                        </div>
                      </div>
                    }
                    modal
                    nested>
                    {close => (
                      <PopupCta
                        blockForAmo='Узнать про вебинары'
                        title={'Смотреть все вебинары'}
                        desc={
                          <>
                            Оставьте заявку, мы свяжемся с Вами в рабочие часы и
                            предоставим полный список вебинаров
                          </>
                        }
                        cta={'Оставить заявку'}
                        close={close}
                      />
                    )}
                  </Popup>
                  <div className={stls.divider}>
                    <Divider />
                  </div>
                </li>
              ))}
        </ul>
        <div className={stls.btn}>
          <PopupTrigger btn='delta' cta='seeAllWebinars' />
        </div>
      </Wrapper>
    </section>
  )
}

export default WebinarsAlt
