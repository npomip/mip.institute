import stls from '@/styles/components/sections/YourFutureJob.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import {
  ImgCourse2,
  ImgDecoration1,
  ImgDecoration2,
  ImgDecoration3
} from '@/components/imgs'
import { IconAtom } from '@/components/icons'

const YourFutureJob = () => {
  const list = [
    'История психологии',
    'Общая психология ',
    'Возрастная психология и психология развития',
    'Социальная психология',
    'Психодиагностика',
    'Педагогическая психология',
    'Психотерапия',
    'История психологии',
    'Общая психология',
    'Возрастная психология и психология развити'
  ]

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Кем сможете работать</h2>
        <div className={stls.content}>
          <p className={stls.subtitle}>В результате обучения вы:</p>
          <ul className={stls.list}>
            {list.map((item, idx) => (
              <li key={item + idx} className={stls.item}>
                <p className={stls.p}>{item}</p>
              </li>
            ))}
          </ul>
          <div className={stls.bottom}>
            <div className={stls.decoration}>
              <div className={stls.atom}>
                <IconAtom widthDots responsive calpha barelyVisible />
              </div>
              <div className={stls.smallDot}></div>
              <div className={stls.mediumDot}></div>
              <div className={stls.largeDot}></div>
            </div>
            <div className={stls.imgTopLeft}>
              <ImgDecoration1 />
            </div>
            <div className={stls.imgTopRight}>
              <ImgDecoration2 />
            </div>
            <div className={stls.imgMiddle}>
              <ImgCourse2 />
            </div>
            <div className={stls.imgBottomRight}>
              <ImgDecoration3 />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default YourFutureJob
