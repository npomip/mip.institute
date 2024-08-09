import { BtnFields } from '@/components/btns'
import BtnHumburger from '@/components/btns/BtnHumburger'
import BtnPhone from '@/components/btns/BtnPhone'
import Logo from '@/components/general/Logo'
import MenuMobile from '@/components/layout/MenuMobile'
import Wrapper from '@/components/layout/Wrapper'
import { routes } from '@/config/index'
import MenuContext from '@/context/menu/menuContext'
import { handleSwipedEvt } from '@/helpers/index'
import stls from '@/styles/components/layout/Header.module.sass'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import IconsDropDown from '../dropdown/IconsDropDown'
import SearchProgramsDropDown from '../dropdown/SearchProgramsDropDown'

type Props = {
  isPromo?: boolean
}

const Header = ({ isPromo }: Props) => {
  const { menuIsOpen, closeMenu } = useContext(MenuContext)
  const router = useRouter()

  useEffect(() => {
    handleSwipedEvt({ menuIsOpen, closeMenu })
  }, [menuIsOpen, closeMenu])
  return (
    <header
      className={classNames({
        [stls.container]: true,
        [stls.promo]: isPromo
      })}>
      <MenuMobile />
      <Wrapper>
        {router.route === '/' && (
          <div className={stls.top}>
            <div className={stls.topleft}>
              <Link href={routes.front.legal}>
                <a className={stls.linkInfo}>
                  Сведения об образовательной организации
                </a>
              </Link>
            </div>
          </div>
        )}
        <div className={stls.row}>
          <Logo atHeader />
          <div className={stls.btns}>
            <BtnPhone />
            <BtnHumburger />
          </div>
          <div className={stls.btnFields}>
            <BtnFields />
          </div>
          <SearchProgramsDropDown />
          <IconsDropDown />
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
