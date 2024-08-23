import { ContextStaticProps } from '@/context/index'
import {
  formOptions,
  levelOptions,
} from 'constants/programSelect'
import { useContext, useState } from 'react'
import stls from 'styles/components/sections/ProgramsOnMain.module.sass'
import CardProfession from '../cards/CardProfession'
import FilterTag from '../filters/FilterTag'
import ProgramSelect from '../program/ProgramSelect'
import BtnLinkProgram from '../btns/BtnLinkProgram'
import {
  studyFieldsCourses,
  studyFieldsProfessions,
  studyFieldsBachelor
} from 'constants/studyFieldsOnMain'

const ProgramsOnMain = () => {
  const { programs } = useContext(ContextStaticProps)
  const [currentType, setCurrentType] = useState('')
  const [selectedLabels, setSelectedLabels] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);
  console.log(programs, 'programs');
  
  const programsMap = {
  courses: studyFieldsCourses,
  professions: studyFieldsProfessions,
  bachelor: studyFieldsBachelor,
};

const programsOptions = programsMap[currentType];
const selectedSlug = programsOptions?.map(option => option.slug);

const filteredList = programs.filter(program => 
  selectedSlug?.includes(program.studyFieldSlug) &&
  (activeFilters.length === 0 || activeFilters.includes(program.studyField))
);
const handleFilterToggle = (label) => {
  if (activeFilters.includes(label)) {
    setActiveFilters([]); 
  } else {
    setActiveFilters([label]);
  }
};
const list = filteredList.slice(0, 3)

  return (
    <section className={stls.container}>
      <h2 className={stls.title}>Программы обучения</h2>
      <div className={stls.selects}>
        <ProgramSelect
          onChange={(selectedOption) => {setCurrentType(selectedOption.value)}}
          onMainPage
          options={levelOptions}
          placeholder='Уровень образования'
        />
        <ProgramSelect
          onChange={(selectedOption) => {
            setSelectedLabels(prev => [...prev, selectedOption.label]);
          }}
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
        <FilterTag onClick={() => setActiveFilters([])} isActive={activeFilters.length === 0} isProgram>
          Все курсы
        </FilterTag>
        <FilterTag onClick={() => handleFilterToggle('Консультирование')} isActive={activeFilters.includes('Консультирование')} isCategories>
          Консультирование
        </FilterTag>
        <FilterTag onClick={() => handleFilterToggle('Психотерапия')} isActive={activeFilters.includes('Психотерапия')} isCategories>
          Психотерапия
        </FilterTag>
        <FilterTag onClick={() => handleFilterToggle('Клиническая психология')} isActive={activeFilters.includes('Клиническая психология')} isCategories>
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
