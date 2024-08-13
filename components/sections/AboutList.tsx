import stls from '@/styles/components/sections/AboutList.module.sass'
import classNames from 'classnames'
import aboutList from 'constants/aboutList'

interface Props {
  isLiveCourse?: boolean
}

const AboutList = ({ isLiveCourse = false }: Props) => {
  return (
    <div className={stls.container}>
      {aboutList.map(el => (
        <div
          className={classNames({
            [stls.item]: true,
            [stls.liveCourse]: isLiveCourse
          })}
          key={el.title}>
          <span className={stls.filter}></span>
          <p className={stls.title}>{el.title}</p>
          <p className={stls.desc}>{el.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default AboutList
