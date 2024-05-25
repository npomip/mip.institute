import stls from '@/styles/components/general/ProgramType.module.sass'
import { useContext } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { routes } from '@/config/index'
import { ContextStaticProps } from '@/context/index'

const ProgramType = ({ close = null }) => {
  const { curProgramsType, curProgramsStudyFieldSlug } =
    useContext(ContextStaticProps)
  const value = curProgramsType === null ? 'profession' : curProgramsType
  const slug = curProgramsStudyFieldSlug ? curProgramsStudyFieldSlug : ''

  return (
    <div className={stls.container}>
      <p className={stls.p}>Выдаваемый документ:</p>

      {/* <Link href={`${routes.front.programs}/${slug}`}>
        <a className={stls.item} onClick={close && close}>
          <div
            className={cn({
              [stls.circle]: true,
              [stls.active]: curProgramsType === null
            })}></div>{' '}
          <span className={stls.text}>Любой</span>
        </a>
      </Link> */}

      <Link href={`${routes.front.professions}/${slug}`}>
        <a className={stls.item} onClick={close && close}>
          <div
            className={cn({
              [stls.circle]: true,
              [stls.active]: value === 'profession'
            })}></div>
          <span className={stls.text}>
            Диплом о профессиональной переподготовке
          </span>
        </a>
      </Link>

      <Link href={`${routes.front.courses}/${slug}`}>
        <a className={stls.item} onClick={close && close}>
          <div
            className={cn({
              [stls.circle]: true,
              [stls.active]: value === 'course'
            })}></div>
          <span className={stls.text}>
            Удостоверение о повышении квалификации
          </span>
        </a>
      </Link>
    </div>
  )
}

export default ProgramType
