import ProgramStudyDuration from '@/components/program/ProgramStudyDuration'
import { routes } from '@/config/index'
import stls from '@/styles/components/cards/CardProfession.module.sass'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Popup from 'reactjs-popup'
import Button from '../btns/Button'
import ProgramPaymentForm from '../forms/ProgramPaymentForm'

type Props = {
  profession: any
  onMain?: boolean
}
const CardProfession = ({ profession = null, onMain = false }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const handleOpen = () => {
    setIsModalOpen(true)
  }

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
            : profession.__typename === 'PracticalTraining'
            ? routes.front.practicalTrainings
            : routes.front.professions
    }

    const studyFieldSlug =
      profession.__typename === 'Bachelor' ||
      profession.__typename === 'PracticalTraining'
        ? ''
        : profession.studyFieldSlug || 'studyfield'

    return `${baseRoute}/${studyFieldSlug}${studyFieldSlug ? '/' : ''}${
      profession.slug
    }`
  }

  const renderTypeTag = () => {
    const type =
      profession.type === 'Profession' || profession.type === 'Course'
        ? profession.type
        : profession.__typename

    switch (type) {
      case 'Profession':
        return 'Профессиональная переподготовка'
      case 'Course':
        return 'Повышение квалификации'
      case 'PracticalTraining':
        return 'Практическая подготовка'
      default:
        return 'Высшее образование'
    }
  }

  const renderDocTag = () => {
    const type =
      profession.type === 'Profession' || profession.type === 'Course'
        ? profession.type
        : profession.__typename

    switch (type) {
      case 'Course':
        return 'Удостоверение'
      case 'PracticalTraining':
        return 'Сертификат'
      default:
        return 'Диплом'
    }
  }

  const showMoreHandler = () => {
    window.open(getHref(), '_blank')
  }

  return (
    <>
      {onMain ? (
        <Link passHref href={getHref()}>
          <a>
            <div className={stls.container}>
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
                <p className={stls.title}>{profession.title}</p>
                <div>
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
                  <div className={stls.btns}>
                    <Button text='Поступить' onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      handleOpen(); 
                    }} 
                    isVioletBg 
                    />
                    <Button text='Подробнее' onClick={showMoreHandler} />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>
      ) : (
        <Link passHref href={getHref()}>
          <a className={stls.containerLink}>
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
              <p className={stls.title}>{profession.title}</p>
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
      )}
      <Popup
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        position={'center center'}>
        {close => (
          <ProgramPaymentForm
            program={profession}
            onClose={close}
            showMore={showMoreHandler}
          />
        )}
      </Popup>
    </>
  )
}

export default CardProfession
