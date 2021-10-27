import stls from '@/styles/components/cards/CardProfession.module.sass'
import Link from 'next/link'
import { routeProfessions } from '@/data/routes'
import { getCasedRuMonthString } from '@/helpers/index'
import classNames from 'classnames'
import { IconArrowRight } from '@/components/icons'

const CardProfession = ({ profession = null, threerow = false }) => {
  return (
    <Link
      href={`${routeProfessions}/${profession.studyFieldSlug || 'studyfield'}/${
        profession.slug
      }`}>
      <a
        className={classNames({
          [stls.container]: true,
          [stls.threerow]: threerow,
          [stls.fourrow]: !threerow
        })}>
        <span className={stls.type}>{profession.typeLabel}</span>
        <h4 className={stls.title}>{profession.title}</h4>
        {profession.studyMounthsDuration && (
          <div className={stls.dur}>
            {getCasedRuMonthString(profession.studyMounthsDuration)}
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
