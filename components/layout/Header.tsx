import stls from '@/styles/modules/layout/Header.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import Logo from '@/components/general/Logo'

const Header = () => {
  return (
    <header className={stls.header}>
      <Wrapper>
        <Logo />
      </Wrapper>
    </header>
  )
}

export default Header
