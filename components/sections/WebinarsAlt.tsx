import stls from '@/styles/components/sections/WebinarsAlt.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import classNames from 'classnames'
import Popup from 'reactjs-popup'
import PopupTrigger from '@/components/general/PopupTrigger'
import { PopupCta } from '@/components/popups'
import CardWebinarAlt from '@/components/cards/CardWebinarAlt'
import { ImgWebinar } from '@/components/imgs'

type WebinarsAltType = {
  webinars: any
}

const WebinarsAlt = ({ webinars = null }: WebinarsAltType) => {
  console.log(webinars)
  return (
    <section className={stls.container}>
      <Wrapper>
        <h1 className={stls.title}>Вебинары</h1>
        <ul className={stls.webinars}>
          {webinars &&
            webinars.map((webinar, idx) => (
              <li key={`CardWebinarAlt-${idx}`} className={stls.webinar}>
                <Popup
                  trigger={
                    <div className={stls.trigger}>
                      <CardWebinarAlt
                        date={webinar.date}
                        name={webinar.name}
                        picture={
                          <ImgWebinar
                            src={webinar.picture.formats.thumbnail.url}
                            alt={webinar.title}
                            width={webinar.picture.formats.thumbnail.width}
                            height={webinar.picture.formats.thumbnail.height}
                          />
                        }
                        title={webinar.title}
                      />
                    </div>
                  }
                  modal
                  nested>
                  {close => (
                    <PopupCta
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
