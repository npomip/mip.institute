import src from '@/public/assets/imgs/liveCourses/liveCourseHug.png'
import srcMobile from '@/public/assets/imgs/liveCourses/hugMobile.png'
import stls from '@/styles/components/liveCourses/LiveCoursesHero.module.sass'
import Image from 'next/image'
import PopupTrigger from '../general/PopupTrigger'
import { IconBirds } from '../icons'
import Wrapper from '../layout/Wrapper'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const LiveCoursesHero = ({ title }) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <Wrapper>
      <div className={stls.container}>
        <h1 className={stls.titleMobile}>{title}</h1>

        <p className={stls.textMobile}>
          «Нет ничего хуже, когда человек глядит на жизнь через свою обиду.
          Обида штука опасная, она может съесть тебя целиком...»
        </p>
        <p className={stls.authorMobile}>
          Мальцев Елизар Юрьевич,
          <br />
          русский писатель
        </p>

        <div className={stls.folder}>
          <div className={stls.leftColumn}>
            <h1 className={stls.title}>{title}</h1>
            <div className={stls.content}>
              <div>
                <p className={stls.text}>
                  «Нет ничего хуже, когда человек глядит на жизнь через свою
                  обиду. Обида штука опасная, она может съесть тебя целиком...»
                </p>
                <p className={stls.author}>
                  Мальцев Елизар Юрьевич,
                  <br />
                  русский писатель
                </p>
                <div className={stls.btn}>
                  <PopupTrigger
                    btn='alpha'
                    cta='signUpForCourse'
                    isLightYellowBetaBtn
                  />
                </div>
              </div>
              <div className={stls.tag}>LIFE</div>
            </div>
          </div>
          <div className={stls.rightColumn}>
            <div className={stls.birds}>
              <IconBirds />
            </div>
            <div className={stls.hug}>
              <Image
                src={isMobileAndTabletLayout ? srcMobile : src}
                height={isMobileAndTabletLayout ? 240 : 540}
                width={isMobileAndTabletLayout ? 300 : 800}
                alt='Объятия'
                className={stls.hugImg}
              />
            </div>
          </div>
        </div>
        <div className={stls.mobileBtn}>
          <PopupTrigger
            btn='alpha'
            cta='signUpForCourse'
            isLightYellowBetaBtn
          />
        </div>
      </div>
    </Wrapper>
  )
}

export default LiveCoursesHero
