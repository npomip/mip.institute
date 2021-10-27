import stls from '@/styles/components/sections/WebinarsAlt.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import classNames from 'classnames'
import PopupTrigger from '@/components/general/PopupTrigger'
import CardWebinarAlt from '@/components/cards/CardWebinarAlt'
import { ImgWebinar } from '../imgs'

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
