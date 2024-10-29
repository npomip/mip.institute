import IconLocationArrow from '@/components/icons/IconLocationArrow'
import stls from '@/styles/components/sections/lectorium/Maps.module.sass'
import Accordion from '@/ui/Accordion'
import IconTextButton from '@/ui/IconTextButton'
import Tag from '@/ui/Tag'
import TwoColumns from '@/ui/TwoColumns'
import Wrapper from '@/ui/Wrapper'
import { stationData, stationImages } from 'constants/maps'
import dataLectoriumRoutes from '@/data/docs/nano-mip/general/lectoriumRoutes/dataLectoriumRoutes'
import routes from '@/config/routes'

const Maps = () => {
  const handleOpenInNewTab = index => {
    if (index >= 0 && index < dataLectoriumRoutes.length) {
      window.open(dataLectoriumRoutes[index].href, '_blank')
    }
  }

  const makeRoute = () => window.open(routes.external.yandex, '_blank')

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
                onClick={() => makeRoute()}
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
              <IconTextButton onClick={() => handleOpenInNewTab(0)} />
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
                onClick={() => makeRoute()}
                icon={
                  <span className={stls.location}>
                    <IconLocationArrow />
                  </span>
                }
              />
              <div className={stls.mobBtn}>
                <IconTextButton onClick={() => handleOpenInNewTab(index + 1)} />
              </div>
            </Accordion>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default Maps
