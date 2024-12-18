import { IconCalendarAlt, IconLocation } from '@/components/icons'
import IconInfo from '@/components/icons/IconInfo'
import { calculateEventTimeAndDate } from '@/helpers/calculateEventTimeAndDate'
import stls from './LectoriumHero.module.sass'
import { Lectorium } from '@/types/page/lectorium/TypePageLectoriumPropsQuery'
import Breadcrumbs from '@/ui/Breadcrumbs'
import InfoPlate from '@/ui/InfoPlate'
import PopupTrigger from '@/ui/PopupTrigger'
import Wrapper from '@/ui/Wrapper'
import Image from 'next/image'

type Props = {
  lectorium: Lectorium
}

const LectoriumHero = ({ lectorium }: Props) => {
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
      content: lectorium.isInternal ?(lectorium.type === 'online' && 'Онлайн') || (
        <>
          Очный
          <br />
          г. Москва, Докучаев переулок, 8
        </>
      ) : (<>
        Очный
        <br />
        {lectorium.eventAddress}
      </>)
    },
    {
      icon: <span className={stls.currency}>₽</span>,
      header: 'стоимость:',
      content: <>{lectorium.price}</>
    },
    {
      icon: <IconInfo isWhite />,
      header: 'всего мест:',
      content: <>{lectorium.places}</>
    }
  ]

  return (
    <section className={stls.container}>
      <Wrapper>
        <Breadcrumbs isJournal lastLabel={lectorium.isInternal ? 'Внутренние мероприятия' : 'Внешние мероприятия'} />
        <p className={stls.event}>{lectorium.label}</p>
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
