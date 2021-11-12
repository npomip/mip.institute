import stls from '@/styles/components/layout/StickyBottom.module.sass'
import { discount, until } from '@/data/price'
import Wrapper from '@/components/layout/Wrapper'

const StickyBottom = () => {
  return (
    <div className={stls.container}>
      <Wrapper>
        <p className={stls.discount}>
          Скидка {discount} на все программы {until}!
        </p>
      </Wrapper>
    </div>
  )
}

export default StickyBottom
