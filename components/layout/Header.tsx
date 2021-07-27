import stls from '@/styles/components/layout/Header.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import Logo from '@/components/general/Logo'
import BtnPhone from '@/components/btns/BtnPhone'
import BtnHumburger from '@/components/btns/BtnHumburger'

const Header = () => {
  return (
    <header className={stls.header}>
      <Wrapper>
        <div className={stls.container}>
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
