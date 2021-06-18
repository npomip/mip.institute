import stls from '@/styles/modules/layout/Header.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import Logo from '@/components/general/Logo'
import BtnPhone from '@/components/btns/BtnPhone'
import BtnHumburger from '@/components/btns/BtnHumburger'
// import MenuContext from '@/context/menu/menuContext'

const Header = () => {
  // const menuContext = useContext(MenuContext)

  // const { menuTests } = menuContext
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
