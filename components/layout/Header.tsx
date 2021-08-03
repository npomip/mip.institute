import stls from '@/styles/components/layout/Header.module.sass'
import Link from 'next/link'
import Wrapper from '@/components/layout/Wrapper'
import Logo from '@/components/general/Logo'
import BtnPhone from '@/components/btns/BtnPhone'
import BtnHumburger from '@/components/btns/BtnHumburger'
import MenuMobile from '@/components/layout/MenuMobile'
import { city, street } from '@/data/location'
import { IconLocation } from '@/components/icons'
import { BtnEpsilon } from '../btns'

const Header = () => {
  return (
    <header className={stls.container}>
      <MenuMobile />
      <Wrapper>
        <div className={stls.top}>
          <div className={stls.topleft}>
            <Link href='/'>
              <a className={stls.linkInfo}>
                Сведения об образовательной организации
              </a>
            </Link>
            <div className={stls.location}>
              <div className={stls.icon}>
                <IconLocation />
              </div>
              <p className={stls.p}>
                {city}, {street}
              </p>
            </div>
          </div>
          <div className={stls.topright}>
            <div className={stls.phone}>
              <BtnPhone withNumber />
            </div>
            <BtnEpsilon text='Обратный звонок' />
          </div>
        </div>
        <div className={stls.row}>
          <Logo atHeader />
          <div className={stls.btns}>
            <BtnPhone />
            <BtnHumburger />
          </div>
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
