import ProgramStudyDuration from '@/components/program/ProgramStudyDuration'
import { routes } from '@/config/index'
import stls from '@/styles/components/cards/CardProfession.module.sass'
import Image from 'next/image'
import Link from 'next/link'

const CardProfession = ({ profession = null }) => {
  console.log(profession, 'profession');
  
  const getHref = () => {
    const baseRoute = 
      profession.type === "Course" ? routes.front.courses :
      profession.type === "Practice" ? routes.front.practice :
      profession.__typename === "Bachelor" ? routes.front.bachelors :
      routes.front.professions;

    const studyFieldSlug = profession.__typename === "Bachelor" ? '' : (profession.studyFieldSlug || 'studyfield');
  return `${baseRoute}/${studyFieldSlug}${studyFieldSlug ? '/' : ''}${profession.slug}`;
};
  return (
    <Link
      passHref
      href={getHref()}>
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
            <span className={stls.type}>
              {profession.typeLabel === 'Профессия'
                ? 'Профессиональная переподготовка'
                : 'Повышение квалификации'}
            </span>
            <span className={stls.type}>
              {profession.typeLabel === 'Профессия'
                ? 'Диплом'
                : 'Удостоверение'}
            </span>
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
