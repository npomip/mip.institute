import { routes } from '@/config/index'
import { ContextStaticProps } from '@/context/index'
import stls from '@/styles/components/general/ProgramSorting.module.sass'
import { useContext } from 'react'
import { BtnField } from '../btns'
import ProgramSelect from '../program/ProgramSelect'

const ProgramSorting = () => {
  const { curProgramsType, curProgramsStudyFieldSlug } =
    useContext(ContextStaticProps)

  const slug = curProgramsStudyFieldSlug ? curProgramsStudyFieldSlug : ''

  return (
    <div className={stls.container}>
      <BtnField href={`${routes.front.programs}/${slug}`} isViolet>
        Все курсы
      </BtnField>

      <BtnField href={`${routes.front.professions}/${slug}`} isViolet>
        Профессиональная переподготовка
      </BtnField>

      <BtnField href={`${routes.front.courses}/${slug}`} isViolet>
        Повышение квалификации
      </BtnField>

      <BtnField href={`${routes.front.courses}/${slug}`} isViolet>
        Популярные курсы
      </BtnField>

      <ProgramSelect />
    </div>
  )
}

export default ProgramSorting
