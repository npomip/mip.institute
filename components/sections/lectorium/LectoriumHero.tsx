import { IconCalendarAlt, IconLocation } from '@/components/icons'
import IconInfo from '@/components/icons/IconInfo'
import { calculateEventTimeAndDate } from '@/helpers/calculateEventTimeAndDate'
import stls from '@/styles/components/sections/lectorium/LectoriumHero.module.sass'
import TBreadcrumb from '@/types/general/TBreadcrumb'
import { Lectorium } from '@/types/page/lectorium/TypePageLectoriumPropsQuery'
import Breadcrumbs from '@/ui/Breadcrumbs'
import InfoPlate from '@/ui/InfoPlate'
import PopupTrigger from '@/ui/PopupTrigger'
import Wrapper from '@/ui/Wrapper'
import Image from 'next/image'

type Props = {
  lectorium: Lectorium
  breadcrumbs: TBreadcrumb[]
}

const LectoriumHero = ({ lectorium, breadcrumbs }: Props) => {
  const { formattedDate, startTime } = calculateEventTimeAndDate(
    lectorium.targetDate
  )
  const endTime = lectorium.endTime.slice(0, 5)

  const plates = [
    {
      icon: <IconCalendarAlt isWhite />,
      header: 'дата:',
      content: (
        <>
          {formattedDate},
          <br />
          {startTime}-{endTime}
        </>
      )
    },
    {
      icon: <IconLocation isEmpty />,
      header: 'формат:',
      content: (
        <>
          Очный
          <br />
          г. Москва, Докучаев переулок, 8
        </>
      )
    },
    {
      icon: <span className={stls.currency}>₽</span>,
      header: 'стоимость:',
      content: <>{lectorium.price}</>
    },
    {
      icon: <IconInfo isWhite />,
      header: 'осталось мест:',
      content: <>{lectorium.places}</>
    }
  ]

  return (
    <section className={stls.container}>
      <Wrapper>
        <Breadcrumbs isJournal breadcrumbs={breadcrumbs} />
        <p className={stls.event}>Очный мастер-класс</p>
        <h1 className={stls.subTitle}>
          <span className={stls.title}>{lectorium.title}</span>
          {lectorium.subtitle}
        </h1>
        <Image
          src={lectorium.picture.url}
          alt='Лекториум'
          width={lectorium.picture.width}
          height={lectorium.picture.height}
          style={{ width: '100%', height: 'auto' }}
          className={stls.image}
        />
        <div className={stls.description}>
          <p className={stls.descriptionTitle}>О мероприятии</p>
          <p className={stls.descriptionText}>{lectorium.description}</p>
        </div>
        <div className={stls.information}>
          {plates.map((plate, index) => (
            <InfoPlate
              key={index}
              icon={plate.icon}
              header={plate.header}
              content={plate.content}
            />
          ))}
        </div>
        <div className={stls.btn}>
          <PopupTrigger btn='alpha' cta='participate' />
        </div>
      </Wrapper>
    </section>
  )
}

export default LectoriumHero
