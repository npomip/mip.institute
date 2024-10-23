import { IconCalendarAlt, IconLocation } from '@/components/icons'
import IconInfo from '@/components/icons/IconInfo'
import stls from '@/styles/components/sections/lectorium/LectoriumHero.module.sass'
import { Lectorium } from '@/types/page/lectorium/TypePageLectoriumPropsQuery'
import InfoPlate from '@/ui/PointPlate'
import PopupTrigger from '@/ui/PopupTrigger'
import Wrapper from '@/ui/Wrapper'
import Image from 'next/image'

type Props = {
  lectorium: Lectorium
}

const LectoriumHero = ({ lectorium }: Props) => {
  const plates = [
    {
      icon: <IconCalendarAlt isWhite />,
      header: 'дата:',
      content: (
        <>
          {lectorium.date},
          <br />
          {lectorium.time}
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
        {/* <Breadcrumbs breadcrumbs={breadcrumbs} /> */}
        <p className={stls.event}>Очный мастер-класс</p>
        <h1 className={stls.title}>{lectorium.title}</h1>
        <h2 className={stls.subTitle}>{lectorium.subtitle}</h2>
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
