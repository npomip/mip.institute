import stls from '@/styles/components/sections/Gratefull.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import TwoColumns from '../layout/TwoColumns'
import ThanksForApplication from './ThanksForApplication'
import JoinTgChannel from './JoinTgChannel'
import Snowfall from 'react-snowfall'
import IconArrowLeft from '../icons/IconArrowLeft'
import IconHat from '../icons/IconHat'

const Gratefull = () => {
  return (
    <section className={stls.container}>
      <Snowfall />
      <Wrapper>
        <div
          className={stls.toHome}
          onClick={() => {
            window.location.href = '/'
          }}>
          <div className={stls.icon}>
            <IconArrowLeft />
          </div>
          <span className={stls.homespanage}>вернуться на главную</span>
        </div>

        <div className={stls.heading}>
          <h1>
            Спешим поздравить вас <br />с новогодними праздниками!
          </h1>
          <div className={stls.iconHat}>
            <IconHat />
          </div>
        </div>

        <TwoColumns>
          <ThanksForApplication />
          <JoinTgChannel />
        </TwoColumns>
      </Wrapper>
    </section>
  )
}

export default Gratefull
