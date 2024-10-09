import CardSchedule from '@/components/cards/CardSchedule'
import CardWebinar from '@/components/cards/CardWebinar'
import SwiperContainer from '@/ui/SwiperContainer'
import Wrapper from '@/ui/Wrapper'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/sections/Webinars.module.sass'
import classNames from 'classnames'
import webinars from 'constants/webinars'

type WebinarsType = {
  standalone?: boolean
}

const Webinars = ({ standalone = false }: WebinarsType) => {
  const webinarsSlides = webinars.map((data, idx) => (
    <CardWebinar key={data.topic + idx} webinarData={data} />
  ))

  const isMobileLayout = useBetterMediaQuery('(max-width: 768px)')

  if (!isMobileLayout) webinarsSlides.push(<CardSchedule />)

  const mobileSwiperOptions = {
    slidesNum: 1.2,
    spaceBetween: 10
  }

  const tabletSwiperOptions = {
    slidesNum: 1.6,
    spaceBetween: 10
  }

  const laptopSwiperOptions = {
    slidesNum: 2,
    spaceBetween: 30
  }

  const desktopSwiperOptions = {
    slidesNum: 4,
    spaceBetween: 30
  }

  return (
    <section
      className={classNames({
        [stls.container]: true,
        [stls.standalone]: standalone
      })}>
      <Wrapper>
        <h2 className={stls.title}>Ежедневные вебинары</h2>
        <p className={stls.desc}>
          С понедельника по четверг в институте проходят онлайн вебинары на
          самые актуальные темы и в удобном формате
        </p>
        <div className={stls.cards}>
          <SwiperContainer
            slides={webinarsSlides}
            mobileOptions={mobileSwiperOptions}
            tabletOptions={tabletSwiperOptions}
            laptopOptions={laptopSwiperOptions}
            desktopOptions={desktopSwiperOptions}
          />
        </div>
        {isMobileLayout && <CardSchedule mobileLayout />}
      </Wrapper>
    </section>
  )
}

export default Webinars
