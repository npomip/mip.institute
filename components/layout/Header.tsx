import stls from '@/styles/components/layout/Header.module.sass'
import { useEffect, useContext } from 'react'
import Link from 'next/link'
import { routes, company } from '@/config/index'
import { handleSwipedEvt } from '@/helpers/index'
import MenuContext from '@/context/menu/menuContext'
import Wrapper from '@/components/layout/Wrapper'
import MenuMobile from '@/components/layout/MenuMobile'
import Logo from '@/components/general/Logo'
import BtnPhone from '@/components/btns/BtnPhone'
import BtnHumburger from '@/components/btns/BtnHumburger'
import { BtnFields } from '@/components/btns'
import IconsDropDown from '../dropdown/IconsDropDown'
import SearchProgramsDropDown from '../dropdown/SearchProgramsDropDown'
import PopupTrigger from '../general/PopupTrigger'


const Header = () => {
  const { menuIsOpen, openMenu, closeMenu, toggleMenu } =
    useContext(MenuContext)

  useEffect(() => {
    handleSwipedEvt({ menuIsOpen, closeMenu })
  }, [menuIsOpen, closeMenu])


  return (
    <header className={stls.container}>
      <MenuMobile />
      <Wrapper>
        <div className={stls.top}>
          <div className={stls.topleft}>
            <Link href={routes.front.legal}>
              <a className={stls.linkInfo}>
                Сведения об образовательной организации
              </a>
            </Link>
            {/* <div className={stls.location}>
              <div className={stls.icon}>
                <IconLocation />
              </div>
              <GeneralAddress classNames={[stls.p]} />
            </div> */}
          </div>
          {/* <div className={stls.topright}>
            <div className={stls.phone}>
              <BtnPhone withNumber />
            </div>
            <div className={stls.phoneNoNum}>
              <BtnPhone />
            </div> */}
            {/* <PopupTrigger btn='epsilon' cta='callMeBack' /> */}
          {/* </div> */}
        </div>
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
