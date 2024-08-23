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
import BtnLinkProgram from '../btns/BtnLinkProgram'

const ProgramsOnMain = () => {
  const { programs } = useContext(ContextStaticProps)

  const list = programs.slice(0, 3)

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
      <div className={stls.btnContainer}>
        <BtnLinkProgram text='Показать еще' amount={42} isVisibleMobile />
      </div>
    </section>
  )
}

export default ProgramsOnMain
