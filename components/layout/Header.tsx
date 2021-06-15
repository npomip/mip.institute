import { useContext } from 'react'
import stls from '@/styles/modules/layout/Header.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import Logo from '@/components/general/Logo'
import MenuContext from '@/context/menu/menuContext'

const Header = () => {
  const menuContext = useContext(MenuContext)

  const { menuTests } = menuContext
  return (
    <header className={stls.header}>
      <Wrapper flex>
        <Logo atHeader />
        <div className={stls.btns}></div>
      </Wrapper>
    </header>
  )
}

export default Header
