import stls from './SupervisorVideo.module.sass'
import TwoColumnsPractical from '@/components/sections/practicalTraining/TwoColumnsPractical'
import dynamic from 'next/dynamic'
import backgroundVideo from '@/public/assets/imgs/groupSupervision/Video/backgroundVideo.png'
import backgroundMob from '@/public/assets/imgs/groupSupervision/Video/backgroundMob.png'

import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const Player = dynamic(() => import('@/ui/Player/Player'), {
  ssr: false
})

const SupervisorVideo = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const position = isMobileAndTabletLayout ? '42% 63%' : '31% 83%'

  return (
    <section>
      <h2 className={stls.title}>
        <span className={stls.coloredTitle}>Видео-обращение </span>
        от супервизора
      </h2>
      <TwoColumnsPractical fixHeight>
        <div className={stls.left}>
          <div className={stls.playerWrapper}>
            <Player
              className={stls.kinescope}
              videoId='sPJLpY5fpEK8rg2fJeBia1'
            />
          </div>
        </div>
        <div
          className={stls.right}
          style={{
            backgroundImage: `url(${isMobileAndTabletLayout ? backgroundMob.src : backgroundVideo.src})`,
            objectFit: 'cover',
            backgroundSize: `${isMobileAndTabletLayout ? '550px' : '1500px'}`,
            backgroundPosition: position,
            backgroundRepeat: 'no-repeat'
          }}>
          <p className={stls.text}>
            <span className={stls.rightTitle}>Важно!</span>
            Запись супервизии
            <span className={stls.bold}>&nbsp;не ведется&nbsp;</span>и не может
            быть предоставлена!
            <span className={stls.bold}>
              &nbsp;Вы можете быть уверены в сохранении конфиденциальности&nbsp;
            </span>
            и в том, что эти встречи уникальны и информация о вас и ваших
            клиентах более нигде не будет использоваться
          </p>
        </div>
      </TwoColumnsPractical>
    </section>
  )
}

export default SupervisorVideo
