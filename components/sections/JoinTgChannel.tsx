import stls from '@/styles/components/sections/JoinTgChannel.module.sass'
import classNames from 'classnames'
import { getImageHeight } from '@/helpers/index'
import Wrapper from '@/components/layout/Wrapper'
import SwiperContainer from '@/components/general/SwiperContainer'
import CardReview from '@/components/cards/CardReview'
import { ImgReview } from '@/components/imgs'
import company from '@/config/company'
import IconDirrectionTg from '../icons/IconDirrectionTg'
import IconGratefullPortal from '../icons/IconGratefullPortal'
import Link from 'next/link'
import HandsForGratefull from '../imgs/general/HandsForGratefull'
import IconWaves from '../icons/IconWaves'

const JoinTgChannel = () => {
  return (
    <section className={stls.container}>
      {/* <Wrapper> */}
      <div className={stls.insidecontainer}>
        <div className={stls.upperPortalSmall}>
          <IconGratefullPortal xsmall />
        </div>
        <div className={stls.upperPortalMedium}>
          <IconGratefullPortal medium />
        </div>
        <div className={stls.midPortalSmall}>
          <IconGratefullPortal xsmall />
        </div>
        <div className={stls.label}>
          <p>Тайные знания</p>
        </div>
        <h1 className={stls.title}>Телеграм-канал</h1>
        {/* <div data-text="xxxxxxxxxxxxxx" className={stls.wavyLine}>

        </div> */}
        <div className={stls.iconWaves}>
          <IconWaves />
        </div>
        <div className={stls.content}>
          <p>
            Есть нюансы профессии, о которых мы не пишем на сайте, заходите к
            нам в телеграм, пообщаемся там, ведь психолог должен обладать
            определенными качествами…
          </p>
        </div>
        <div
          className={stls.linkToTg}
          onClick={() => {
            window.location.href = 'https://watbot.ru/w/beDi'
          }}>
          <Link href='https://watbot.ru/w/beDi'>
            <a>Перейти на канал</a>
          </Link>
        </div>
        <div className={stls.img}>
          <HandsForGratefull />
        </div>
      </div>

      {/* </Wrapper> */}
      <div className={stls.icontg}>
        <IconDirrectionTg />
      </div>
      <div className={stls.iconMidPortal}>
        <IconGratefullPortal medium />
      </div>
      <div className={stls.iconSmallPortal}>
        <IconGratefullPortal small />
      </div>
      <div className={stls.iconLargePortal}>
        <IconGratefullPortal />
      </div>
    </section>
  )
}
export default JoinTgChannel
