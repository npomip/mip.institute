import stls from '@/styles/components/sections/AboutList.module.sass'
import classNames from 'classnames'

interface Props {
  isLiveCourse?: boolean
}

const AboutList = ({ isLiveCourse = false }: Props) => {
  const list = [
    { title: '4 000', desc: 'Студентов уже обучили' },
    { title: '', desc: '' },
    {
      title: 'ТОП 5',
      desc: 'Входим в пятерку лучших институтов  по направлению психология'
    },
    { title: '15 лет ', desc: 'На рынке образования' },
    { title: 'Более 70', desc: 'преподавателей - практиков' },
    { title: '160 000 минут', desc: 'видео - лекций студийного качества' }
  ]
  return (
    <div className={stls.container}>
      {list.map(el => (
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
