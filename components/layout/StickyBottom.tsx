import stls from '@/styles/components/layout/StickyBottom.module.sass'
import { discount, until } from '@/data/price'
import Wrapper from '@/components/layout/Wrapper'
import IconWavyShape from '@/components/icons/IconWavyShape'
import PopupTrigger from '@/components/general/PopupTrigger'

const StickyBottom = () => {
  return (
    <div className={stls.container}>
      <Wrapper>
        <div className={stls.icon}>
          <IconWavyShape />
        </div>
        <p className={stls.discount}>
          <span className={stls.highlight}>Скидка {discount}</span> на все
          программы {until}!
        </p>
        <div className={stls.btns}>
          <PopupTrigger btn='theta' cta='learnAboutUs' />
          <PopupTrigger btn='alpha' cta='consultMe' />
        </div>
      </Wrapper>
    </div>
  )
}

export default StickyBottom
