import ProgramStudyDuration from '@/components/program/ProgramStudyDuration'
import { routes } from '@/config/index'
import stls from '@/styles/components/cards/CardProfession.module.sass'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Popup from 'reactjs-popup'
import Button from '../btns/Button'
import ProgramPaymentForm from '../forms/ProgramPaymentForm'

type Props = {
  profession: any
  onMain?: boolean
}

const CardProfession = ({ profession = null, onMain = false }: Props) => {
  const router = useRouter()
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
    <>
      {onMain ? (
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
                <Button text='Поступить' onClick={handleOpen} isVioletBg />
                <Button
                  text='Подробнее'
                  onClick={() => router.push(getHref())}
                />
              </div>
            </div>
          </div>
        </div>
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
            showMore={() => router.push(getHref())}
          />
        )}
      </Popup>
    </>
  )
}

export default CardProfession
