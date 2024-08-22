import {
  formOptions,
  levelOptions,
  programsOptions
} from 'constants/programSelect'
import Wrapper from '../layout/Wrapper'
import ProgramSelect from '../program/ProgramSelect'
import stls from 'styles/components/sections/ProgramsOnMain.module.sass'

const ProgramsOnMain = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Программы обучения</h2>
        <div className={stls.selects}>
          <ProgramSelect
            onChange={() => {}}
            onMainPage
            options={levelOptions}
            placeholder='Уровень образования'
          />
          <ProgramSelect
            onChange={() => {}}
            onMainPage
            options={programsOptions}
          />
          <ProgramSelect
            onChange={() => {}}
            onMainPage
            options={formOptions}
            placeholder='Форма обучения'
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default ProgramsOnMain
