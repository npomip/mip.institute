import TagOrange from '@/components/general/TagOrange'
import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/practicalTraining/PracticalBriefProgram.module.sass'
import { BriefProgram } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import PracticalBriefProgramItem from './PracticalBriefProgramItem'

type Props = {
  listProgram: BriefProgram[]
}

const PracticalBriefProgram = ({ listProgram }: Props) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          Краткая
          <span className={stls.colouredTitle}> программа </span>
          курса
        </h2>
        <ul>
          {listProgram.map(el => (
            <PracticalBriefProgramItem
              title={el.title}
              description={el.record}
              key={el.title}
            />
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default PracticalBriefProgram
