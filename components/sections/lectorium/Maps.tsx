import IconLocationArrow from '@/components/icons/IconLocationArrow'
import stls from '@/styles/components/sections/lectorium/Maps.module.sass'
import Accordion from '@/ui/Accordion'
import IconTextButton from '@/ui/IconTextButton'
import Tag from '@/ui/Tag'
import TwoColumns from '@/ui/TwoColumns'
import Wrapper from '@/ui/Wrapper'
import { stationData, stationImages } from 'constants/maps'

const Maps = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.header}>
          <div className={stls.tag}>
            <Tag type='purple'>Навигация</Tag>
          </div>
          <h2 className={stls.title}>
            <span className={stls.coloured}>как </span>
            до нас
            <span className={stls.coloured}> добраться?</span>
          </h2>
        </div>
        <div className={stls.contentDesktop}>
          <TwoColumns>
            <div className={stls.leftBlock}>
              <IconTextButton
                backgroundColor='#8F60FF'
                text='Построить маршрут'
                onClick={() => {}}
                icon={
                  <span className={stls.location}>
                    <IconLocationArrow />
                  </span>
                }
              />
              {stationImages.krasnyeVorota}
              {stationImages.suharevskaya}
            </div>
            <div className={stls.rightBlock}>
              <IconTextButton onClick={() => {}} />
              {stationImages.komsomolskaya}
            </div>
          </TwoColumns>
        </div>
        <div className={stls.contentMobile}>
          {stationData.map((station, index) => (
            <Accordion
              key={index}
              title={
                <span className={stls.station}>&nbsp;{station.title}</span>
              }
              isOpened={index === 0}
              isIconWithBg>
              <div className={stls.violetDivider}></div>
              {station.image}
              <IconTextButton
                backgroundColor='#8F60FF'
                text='Построить маршрут'
                onClick={() => {}}
                icon={
                  <span className={stls.location}>
                    <IconLocationArrow />
                  </span>
                }
              />
              <div className={stls.mobBtn}>
                <IconTextButton onClick={() => {}} />
              </div>
            </Accordion>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default Maps
