import stls from '@/styles/components/cards/CardProfession.module.sass'
import Link from 'next/link'
import classNames from 'classnames'
import { routes } from '@/config/index'
import ProgramStudyDuration from '@/components/program/ProgramStudyDuration'
import { IconArrowRight } from '@/components/icons'

const CardProfession = ({ profession = null, threerow = false }) => {
  return (
    <Link
      href={`${routes.front.professions}/${
        profession.studyFieldSlug || 'studyfield'
      }/${profession.slug}`}>
      <a
        className={classNames({
          [stls.container]: true,
          [stls.threerow]: threerow,
          [stls.fourrow]: !threerow
        })}>
        <span className={stls.type}>{profession.typeLabel}</span>
        <h3 className={stls.title}>{profession.title}</h3>
        {profession.studyMounthsDuration && (
          <div className={stls.dur}>
            <ProgramStudyDuration
              studyMounthsDuration={profession.studyMounthsDuration}
              monthsOnly
            />
          </div>
        )}
        <div className={stls.arrowRight}>
          <IconArrowRight />{' '}
        </div>
      </a>
    </Link>
  )
}

export default CardProfession
