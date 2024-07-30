import src from '@/public/assets/imgs/general/liveCourseHug.png'
import stls from '@/styles/components/liveCourses/LiveCoursesHero.module.sass'
import Image from 'next/image'
import PopupTrigger from '../general/PopupTrigger'
import { IconBirds } from '../icons'
import Wrapper from '../layout/Wrapper'

const LiveCoursesHero = ({ title }) => {
  return (
    <Wrapper>
      <div className={stls.container}>
        <h1 className={stls.title}>{title}</h1>
        <div className={stls.folder}>
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
              <PopupTrigger
                btn='alpha'
                cta='signUpForCourse'
                isLightYellowBetaBtn
              />
            </div>
            <div className={stls.tag}>LIFE</div>
          </div>
          <div className={stls.birds}>
            <IconBirds />
          </div>
          <div className={stls.hug}>
            <Image src={src} height={540} width={800} alt='Объятия' />
          </div>
          {/* <IconLiveCoursesFolder /> */}
        </div>
      </div>
    </Wrapper>
  )
}

export default LiveCoursesHero
