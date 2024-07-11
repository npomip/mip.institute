import {
  ProgramTypes,
  useFilter,
  useFilterDispatch
} from '@/context/FilterContext/FilterContext'
import stls from '@/styles/components/general/ProgramType.module.sass'
import cn from 'classnames'

const ProgramType = () => {
  const dispatch = useFilterDispatch()
  const filters = useFilter()

  const handleCourses = () => {
    dispatch({
      type: 'setPrograms',
      payload: ProgramTypes.Courses
    })
  }

  const handleProfessions = () => {
    dispatch({
      type: 'setPrograms',
      payload: ProgramTypes.Professions
    })
  }

  return (
    <div className={stls.container}>
      <p className={stls.title}>Выдаваемый документ:</p>
      <div className={stls.radioButton}>
        <input
          type='radio'
          className={stls.radioBtn}
          value='professions'
          id='professions'
          checked={filters.filters.type === ProgramTypes.Professions}
          onChange={handleProfessions}
        />
        <label htmlFor='professions' className={stls.radioLabel}>
          Диплом о профессиональной переподготовке
        </label>
      </div>

      <div className={stls.radioButton}>
        <input
          type='radio'
          className={stls.radioBtn}
          value='courses'
          id='courses'
          checked={filters.filters.type === ProgramTypes.Courses}
          onChange={handleCourses}
        />
        <label htmlFor='courses' className={stls.radioLabel}>
          Удостоверение о повышении квалификации
        </label>
      </div>
    </div>
  )
}

export default ProgramType
