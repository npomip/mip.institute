import stls from '@/styles/components/general/StudyFields.module.sass'
import { Fragment, useContext } from 'react'
import ProgramsContext from '@/context/programs/programsContext'
import { BtnField } from '@/components/btns'
import { routePrograms } from '@/data/routes'

const StudyFields = () => {
  const { studyFields } = useContext(ProgramsContext)

  return (
    <ul className={stls.container}>
      {studyFields.map(({ label, slug }, idx) => (
        <Fragment key={slug + idx}>
          {idx === 0 && (
            <li className={stls.studyField}>
              <BtnField href={`${routePrograms}`}>Все направления</BtnField>
            </li>
          )}
          <li className={stls.studyField}>
            <BtnField href={`${routePrograms}/${slug}`}>{label}</BtnField>
          </li>
        </Fragment>
      ))}
    </ul>
  )
}

export default StudyFields
