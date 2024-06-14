import stls from '@/styles/components/liveCourses/LiveCoursesHero.module.sass'
import { IconBirds, IconLiveCoursesFolder } from '../icons'
import Image from 'next/image'
import src from '@/public/assets/imgs/general/liveCourseHug.png'
import Wrapper from '../layout/Wrapper'

const LiveCoursesHero = ({ title }) => {
  return (
    <Wrapper>
      {/* <div className={stls.container}> */}
      {/* <h1 className={stls.title}>{title}</h1> */}
      <div className={stls.folder}>
        <div className={stls.content}>
          <p className={stls.text}>
            «Нет ничего хуже, когда человек глядит на жизнь через свою обиду.
            Обида штука опасная, она может съесть тебя целиком...»
          </p>
          <p className={stls.author}>
            Мальцев Елизар Юрьевич,
            <br />
            русский писатель
          </p>
        </div>
        <div className={stls.img}>
          <Image src={src} height={540} width={800} alt='hug' />
        </div>
        <div className={stls.birds}>
          <IconBirds />
        </div>
        {/* <IconLiveCoursesFolder /> */}
      </div>
      {/* </div> */}
    </Wrapper>
  )
}

export default LiveCoursesHero
