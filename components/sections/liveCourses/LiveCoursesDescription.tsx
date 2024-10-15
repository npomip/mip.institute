import stls from 'styles/components/sections/liveCourses/LiveCoursesDescription.module.sass'
import Wrapper from '@/ui/Wrapper'

type ArticleBlogListType = {
  props: {
    title
    record: {
      text: string
    }[]
  }
}

const LiveCoursesDescription = ({ props }: ArticleBlogListType) => {
  const { title, record } = props

  return (
    <section className={stls.section}>
      <Wrapper>
        <div className={stls.title}>{title}</div>
        <div className={stls.description}>
          {record.map(el => (
            <div className={stls.item} key={el.text}>
              {el.text}
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default LiveCoursesDescription
