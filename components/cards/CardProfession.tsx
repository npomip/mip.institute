import ProgramStudyDuration from '@/components/program/ProgramStudyDuration'
import { routes } from '@/config/index'
import stls from '@/styles/components/cards/CardProfession.module.sass'
import Image from 'next/image'
import Link from 'next/link'

const CardProfession = ({ profession = null }) => {
  const getHref = () => {
    let baseRoute
    switch (profession.type) {
      case 'Course':
        baseRoute = routes.front.courses
        break
      case 'Practice':
        baseRoute = routes.front.practice
        break
      default:
        baseRoute =
          profession.__typename === 'Bachelor'
            ? routes.front.bachelors
            : routes.front.professions
    }

    const studyFieldSlug =
      profession.__typename === 'Bachelor'
        ? ''
        : profession.studyFieldSlug || 'studyfield'

    return `${baseRoute}/${studyFieldSlug}${studyFieldSlug ? '/' : ''}${
      profession.slug
    }`
  }

  const renderTypeTag = () => {
    switch (profession.typeLabel) {
      case 'Профессия':
        return 'Профессиональная переподготовка'
      case 'Курс':
        return 'Повышение квалификации'
      default:
        return 'Высшее образование'
    }
  }

  const renderDocTag = () => {
    switch (profession.typeLabel) {
      case 'Курс':
        return 'Удостоверение'
      default:
        return 'Диплом'
    }
  }

  return (
    <Link passHref href={getHref()}>
      <a className={stls.container}>
        {profession.isPopular && <div className={stls.hot}>ХИТ</div>}
        <div className={stls.imgCard}>
          <Image
            src={profession.heroPicture.url}
            width={760}
            height={430}
            alt='Фото программы'
            className={stls.img}
          />
        </div>
        <div className={stls.content}>
          <div className={stls.tags}>
            <span className={stls.type}>{renderTypeTag()}</span>
            <span className={stls.type}>{renderDocTag()}</span>
          </div>
          <h2 className={stls.title}>{profession.title}</h2>
          {profession.studyMounthsDuration && (
            <div className={stls.duration}>
              <span className={stls.months}>
                <ProgramStudyDuration
                  studyMounthsDuration={profession.studyMounthsDuration}
                  monthsOnly
                />{' '}
              </span>
              <span
                className={
                  stls.hours
                }>{`/ ${profession.studyHours} часов`}</span>
            </div>
          )}
        </div>
      </a>
    </Link>
  )
}

export default CardProfession
