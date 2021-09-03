import stls from '@/styles/components/cards/CardProfession.module.sass'
import { ImgCourse1 } from '@/components/imgs'
import Link from 'next/link'
import { routeProfessions } from '@/data/routes'
import { getCasedRuMonthString } from '@/helpers/index'
import classNames from 'classnames'

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
        <div className={stls.img}>
          <ImgCourse1 />
        </div>
        <div className={stls.right}>
          <div className={stls.info}>
            <span className={stls.type}>{profession.typeLabel}</span>
            <span className={stls.dur}>
              {getCasedRuMonthString(profession.studyMounthsDuration)}
            </span>
          </div>
          <h4 className={stls.title}>{profession.title}</h4>
        </div>
      </a>
    </Link>
  )
}

export default CardProfession
