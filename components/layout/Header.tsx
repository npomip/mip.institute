import stls from '@/styles/modules/layout/Header.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import Logo from '@/components/general/Logo'
import IconPhone from '@/components/icons/IconPhone'
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
            <IconPhone />
          </div>
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
