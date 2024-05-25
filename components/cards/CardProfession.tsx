import ProgramStudyDuration from '@/components/program/ProgramStudyDuration'
import { routes } from '@/config/index'
import stls from '@/styles/components/cards/CardProfession.module.sass'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'

const CardProfession = ({ profession = null }) => {
  const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 768 })
  const isSmallTablet = useMediaQuery({ minWidth: 426, maxWidth: 600 })
  return (
    <Link
      href={`${routes.front.professions}/${
        profession.studyFieldSlug || 'studyfield'
      }/${profession.slug}`}>
      <a className={stls.container}>
        <div className={stls.hot}>ХИТ</div>
        <Image
          src={profession.heroPicture.url}
          width={300}
          height={isTablet ? 360 : isSmallTablet ? 310 : 230}
          alt='Фото программы'
          className={stls.img}
        />
        <div className={stls.content}>
          <span className={stls.type}>{profession.typeLabel}</span>
          <h4 className={stls.title}>{profession.title}</h4>
          {profession.studyMounthsDuration && (
            <div className={stls.duration}>
              <span className={stls.months}>
                <ProgramStudyDuration
                  studyMounthsDuration={profession.studyMounthsDuration}
                  monthsOnly
                />{' '}
              </span>
              <span className={stls.hours}>/ 900 часов</span>
            </div>
          )}
        </div>
      </a>
    </Link>
  )
}

export default CardProfession
