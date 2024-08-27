import { formOptions, levelOptions } from 'constants/customSelect'
import {
  studyFieldsBachelor,
  studyFieldsCourses,
  studyFieldsProfessions
} from 'constants/studyFieldsOnMain'
import { useEffect, useState } from 'react'
import stls from 'styles/components/sections/ProgramsOnMain.module.sass'
import BtnLinkProgram from '../btns/BtnLinkProgram'
import CardProfession from '../cards/CardProfession'
import FilterTag from '../filters/FilterTag'
import CustomSelect, { SelectOption } from '../general/CustomSelect'

type Props = {
  allPrograms: any[]
}

const ProgramsOnMain = ({ allPrograms }: Props) => {
  const [currentType, setCurrentType] = useState<SelectOption | null>(null)
  const [selectedLabel, setSelectedLabel] = useState<SelectOption | null>(null)
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [programs, setPrograms] = useState(allPrograms)
  const programsMap = {
    course: studyFieldsCourses,
    profession: studyFieldsProfessions,
    bachelor: studyFieldsBachelor
  }

  const filterPrograms = () => {
  return allPrograms.filter(program => {
    const typeMatch = currentType
      ? currentType.value === 'Bachelor'
        ? program.__typename === 'Bachelor'
        : program.type === currentType.value
      : true;

    const labelMatch = selectedLabel
      ? currentType?.value === 'Bachelor'
        ? program.slug === selectedLabel.value
        : program.studyFieldSlug === selectedLabel.value
      : true;

    const filterMatch =
      activeFilters.length > 0
        ? activeFilters.includes(program.studyField)
        : true; 

    return typeMatch && labelMatch && filterMatch;
  });
};


  useEffect(() => {
    const newPrograms = filterPrograms()
    setPrograms(newPrograms)
  }, [currentType, selectedLabel, activeFilters, allPrograms])

  const handleSetCurrentType = (selectedOption: SelectOption) => {
    setCurrentType(selectedOption)
    setSelectedLabel(null)
    setActiveFilters([])
  }

  const handleSelectedLabel = (selectedOption: SelectOption) => {
    setSelectedLabel(selectedOption)
  }

  const handleFilterToggle = (label: string) => {
  setActiveFilters(prev => {
    if (label === '') {
      return [];
    } else if (prev.includes(label)) {
      return prev;
    } else {
      return [label];
    }
  });
};


  return (
    <section className={stls.container}>
      <h2 className={stls.title}>Программы обучения</h2>
      <div className={stls.selects}>
        <CustomSelect
          onChange={handleSetCurrentType}
          options={levelOptions}
          placeholder='Уровень образования'
          value={currentType}
        />
        <CustomSelect
          onChange={handleSelectedLabel}
          options={programsMap[currentType?.value.toLowerCase()] || []}
          placeholder='Направления'
          value={selectedLabel}
          isDisabled={!currentType}
        />
        <CustomSelect
          onChange={() => {}}
          options={formOptions}
          placeholder='Форма обучения'
          isDisabled={!selectedLabel}
        />
      </div>
      <div className={stls.tags}>
        {['', 'Консультирование', 'Психотерапия', 'Клиническая психология'].map(
          label => (
            <FilterTag
              key={label}
              onClick={() => handleFilterToggle(label)}
              isActive={activeFilters.includes(label)}
              isProgram={label === ''}
              isCategories={label !== ''}>
              {label || 'Все курсы'}
            </FilterTag>
          )
        )}
      </div>
      <div className={stls.cards}>
        {programs.slice(0, 3).map(el => (
          <CardProfession key={el.id} profession={el} />
        ))}
      </div>
      {programs.length > 3 && (
        <div className={stls.btnContainer}>
          <BtnLinkProgram
            text='Показать еще'
            amount={programs.length}
            isVisibleMobile
          />
        </div>
      )}
    </section>
  )
}

export default ProgramsOnMain
