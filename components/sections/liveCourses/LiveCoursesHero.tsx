import src from '@/public/assets/imgs/liveCourses/liveCourseHug.png'
import srcMobile from '@/public/assets/imgs/liveCourses/liveCourseHugMobile.png'
import stls from '@/styles/components/sections/liveCourses/LiveCoursesHero.module.sass'
import Image from 'next/image'
import PopupTrigger from '@/ui/PopupTrigger'
import { IconBirds } from '@/components/icons'
import Wrapper from '@/ui/Wrapper'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import { BtnAlpha } from '@/components/btns'

const LiveCoursesHero = ({ title, openModal }) => {
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

        <h1 className={stls.title}>{title}</h1>
        <div className={stls.folder}>
          <div className={stls.leftColumn}>
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
                  <BtnAlpha
                    isLiveCourse
                    text='Разобраться с обидами'
                    onClick={openModal}
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
              {isMobileAndTabletLayout ? (
                <Image
                  className={stls.img}
                  src={srcMobile}
                  alt='Объятия'
                  style={{
                    width: '100%',
                    height: 'auto'
                  }}
                />
              ) : (
                <Image
                  className={stls.img}
                  src={src}
                  alt='Объятия'
                  width={580}
                  height={480}
                />
              )}
            </div>
          </div>
        </div>
        <div className={stls.mobileBtn}>
          <PopupTrigger
            btn='alpha'
            cta='sortOutGrievances'
            isLightYellowBetaBtn
          />
        </div>
      </div>
    </Wrapper>
  )
}

export default LiveCoursesHero
