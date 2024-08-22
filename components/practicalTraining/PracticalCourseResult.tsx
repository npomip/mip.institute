import stls from '@/styles/components/practicalTraining/PracticalCourseResult.module.sass'
import Wrapper from '../layout/Wrapper'
import highlightFirstWord from '@/helpers/highlightFirstWord'

type Props = {
  results: { text: string }[]
}

const PracticalCourseResult = ({ results }: Props) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.block}>
          <h2 className={stls.title}>По итогу курса Вы:</h2>
          <div className={stls.list}>
            {results?.map(el => (
              <div className={stls.element} key={el.text}>
                <div className={stls.bullet}></div>
                <p className={stls.text}>
                  <span className={stls.firstWord}>
                    {`${el?.text?.split(' ')[0]} `}
                  </span>
                  {highlightFirstWord(el?.text)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default PracticalCourseResult
