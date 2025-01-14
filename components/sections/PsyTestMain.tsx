import TwoColumns from '@/ui/TwoColumns'
import Wrapper from '@/ui/Wrapper'
import stls from '@/styles/components/sections/PsyTestMain.module.sass'
import BtnAlpha from '@/components/btns/BtnAlpha'
import IconGratefullPortal from '../icons/IconGratefullPortal'
import ImgPsyTest from '../imgs/general/ImgPsyTest'
import loadIcon from '@/helpers/general/loadIcon'

interface Props {
  startHandler: () => void
}

const PsyTestMain = ({ startHandler }: Props) => {
  return (
    <section className={stls.container}>
      <div className={stls.bg}></div>
      <Wrapper>
        <div className={stls.content}>
          <TwoColumns>
            <div className={stls.left}>
              <h2 id='test' className={stls.title}>
                Пройдите опрос и узнайте, какая программа вам подойдет
              </h2>
              <div className={stls.btns}>
                <div className={stls.btn}>
                  <BtnAlpha text='Подобрать программу' onClick={startHandler} />
                </div>
              </div>
            </div>
            <div className={stls.right}>
              <div className={stls.img}>{loadIcon('IconPsyTest')}</div>
              <ImgPsyTest />
              <div className={stls.portals}>
                <div className={stls.smallOne}>
                  <IconGratefullPortal thirtyPx />
                </div>
                <div className={stls.pointShadow}></div>
                <div className={stls.xsmall}>
                  <IconGratefullPortal xsmall />
                </div>
                <div className={stls.medium}>
                  <IconGratefullPortal xsmall />
                </div>
                <div className={stls.big}>
                  <IconGratefullPortal medium />
                </div>
                <div className={stls.tenPx}>
                  <IconGratefullPortal xsmall />
                </div>
                <div className={stls.thirtyPx}>
                  <IconGratefullPortal thirtyPx />
                </div>
              </div>
              <div className={stls.mobileBtn}>
                <BtnAlpha text='Подобрать программу' onClick={startHandler} />
              </div>
            </div>
          </TwoColumns>
        </div>
      </Wrapper>
    </section>
  )
}

export default PsyTestMain
