import stls from './PracticalWhatInProgram.module.sass'
import Wrapper from '@/ui/Wrapper'
import { SharedText } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import IconVioletCircle from '@/components/icons/IconVioletCircle'

type Props = {
  list: SharedText[]
}

const PracticalWhatInProgram = ({ list }: Props) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.block}>
          <h2 className={stls.title}>
            <span className={stls.colouredTitle}> В программу </span>
            обучения входит
          </h2>
          <div className={stls.list}>
            {list.map(el => (
              <div className={stls.element} key={el.text}>
                <div className={stls.icon}>
                  <IconVioletCircle />
                </div>
                <p className={stls.text}>{el.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default PracticalWhatInProgram
