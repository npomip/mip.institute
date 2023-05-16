import stls from '@/styles/components/layout/Header.module.sass'
import { useEffect, useContext } from 'react'
import Link from 'next/link'
import { routes, company } from '@/config/index'
import { IconLocation } from '@/components/icons'
import { handleSwipedEvt } from '@/helpers/index'
import MenuContext from '@/context/menu/menuContext'
import Wrapper from '@/components/layout/Wrapper'
import MenuMobile from '@/components/layout/MenuMobile'
import PopupTrigger from '@/components/general/PopupTrigger'
import Logo from '@/components/general/Logo'
import BtnPhone from '@/components/btns/BtnPhone'
import BtnHumburger from '@/components/btns/BtnHumburger'
import { BtnFields } from '@/components/btns'
import { GeneralAddress } from '@/components/general'

const Header = () => {
  const { menuIsOpen, openMenu, closeMenu, toggleMenu } =
    useContext(MenuContext)

  useEffect(() => {
    handleSwipedEvt({ menuIsOpen, closeMenu })
  }, [menuIsOpen, closeMenu])

  const list = [
    {
      href: routes.front.webinars,
      val: 'Вебинары'
    },
    {
      href: routes.front.teachers,
      val: 'Преподаватели'
    },
    {
      href: routes.front.about,
      val: 'Об университете'
    }
  ]

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
            <div className={stls.location}>
              <div className={stls.icon}>
                <IconLocation />
              </div>
              <GeneralAddress classNames={[stls.p]} />
            </div>
          </div>
          <div className={stls.topright}>
            <div className={stls.phone}>
              <BtnPhone withNumber />
            </div>
            <div className={stls.phoneNoNum}>
              <BtnPhone />
            </div>
            <PopupTrigger btn='epsilon' cta='callMeBack' />
          </div>
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
          {list.map(item => (
            <Link key={item.href + item.val} href={item.href}>
              <a className={stls.link}>{item.val}</a>
            </Link>
          ))}
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
