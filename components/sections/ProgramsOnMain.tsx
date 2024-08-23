import { ContextStaticProps } from '@/context/index'
import {
  formOptions,
  levelOptions,
  programsOptions
} from 'constants/programSelect'
import { useContext } from 'react'
import stls from 'styles/components/sections/ProgramsOnMain.module.sass'
import CardProfession from '../cards/CardProfession'
import FilterTag from '../filters/FilterTag'
import ProgramSelect from '../program/ProgramSelect'

const ProgramsOnMain = () => {
  const { programs } = useContext(ContextStaticProps)

  console.log({ programs })
  const list = programs.slice(0, 3)
  console.log({ list })

  return (
    <section className={stls.container}>
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
          placeholder='Направления'
        />
        <ProgramSelect
          onChange={() => {}}
          onMainPage
          options={formOptions}
          placeholder='Форма обучения'
        />
      </div>
      <div className={stls.tags}>
        <FilterTag onClick={() => {}} isActive={false} isProgram>
          Все курсы
        </FilterTag>
        <FilterTag onClick={() => {}} isActive={false} isCategories>
          Консультирование
        </FilterTag>
        <FilterTag onClick={() => {}} isActive={false} isCategories>
          Психотерапия
        </FilterTag>
        <FilterTag onClick={() => {}} isActive={false} isCategories>
          Клиническая психология
        </FilterTag>
      </div>
      <div className={stls.cards}>
        {list.map(el => (
          <CardProfession key={el.id} profession={el} />
        ))}
      </div>
    </section>
  )
}

export default ProgramsOnMain
