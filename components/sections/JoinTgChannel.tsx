import stls from '@/styles/components/sections/JoinTgChannel.module.sass'
import IconDirrectionTg from '../icons/IconDirrectionTg'
import IconGratefullPortal from '../icons/IconGratefullPortal'
import Link from 'next/link'
import HandsForGratefull from '../imgs/general/HandsForGratefull'
import IconWaves from '../icons/IconWaves'

const JoinTgChannel = () => {
  return (
    <section className={stls.container}>
      
      <div className={stls.insidecontainer}>
        {/* // added in NY */}
        {/* <div className={stls.upperPortalSmall}>
          <IconGratefullPortal xsmall />
        </div>
        <div className={stls.upperPortalMedium}>
          <IconGratefullPortal medium />
        </div>
        <div className={stls.midPortalSmall}>
          <IconGratefullPortal xsmall />
        </div> */}
        {/* // added in NY */}
        <div className={stls.label}>
          <p>Тайные знания</p>
        </div>
        <h2 className={stls.title}>Телеграм-канал</h2>
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
            <a>Перейти в канал</a>
          </Link>
        </div>
        {/* // added in NY */}
        {/* <div className={stls.img}>
          <HandsForGratefull />
        </div> */}

        {/* // added in NY */}
      </div>

      <div className={stls.icontg}>
        <IconDirrectionTg />
      </div>
      {/* // added in NY */}
      {/* <div className={stls.iconMidPortal}>
        <IconGratefullPortal medium />
      </div>
      <div className={stls.iconSmallPortal}>
        <IconGratefullPortal small />
      </div>
      <div className={stls.iconLargePortal}>
        <IconGratefullPortal />
      </div> */}
      {/* // added in NY */}
    </section>
  )
}
export default JoinTgChannel
