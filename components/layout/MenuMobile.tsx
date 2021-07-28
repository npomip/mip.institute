import stls from '@/styles/components/layout/MenuMobile.module.sass'
import { useContext } from 'react'
import Link from 'next/link'
import MenuContext from '@/context/menu/menuContext'
import Wrapper from '@/components/layout/Wrapper'
import Logo from '@/components/general/Logo'
import { BtnClose, BtnPhone, BtnEpsilon } from '@/components/btns'
import { IconMoreThan } from '@/components/icons'
import classNames from 'classnames'

const MenuMobile = () => {
  const { menuIsOpen, openMenu, closeMenu, toggleMenu } =
    useContext(MenuContext)

  const links = [
    { text: 'Направления обучения', href: '/', withIcon: true },
    { text: 'Вебинары', href: '/', withIcon: false },
    { text: 'Отзывы', href: '/', withIcon: false },
    { text: 'Об институте', href: '/', withIcon: false }
  ]

  return (
    <div
      className={classNames({
        [stls.container]: true,
        [stls.menuIsOpen]: menuIsOpen
      })}>
      <Wrapper>
        <div className={stls.row}>
          <Logo atHeader />
          <BtnClose />
        </div>
        <nav className={stls.nav}>
          <ul className={stls.navList}>
            {links.map((item, idx) => (
              <li key={item.text + idx} className={stls.navItem}>
                <Link href={item.href}>
                  <a>
                    <span>{item.text}</span>
                    {item.withIcon && <IconMoreThan small cnu />}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={stls.cta}>
          <BtnPhone withNumber />
          <BtnEpsilon text={'Обратный звонок'} />
        </div>
        <div className={stls.sm}>sm</div>
      </Wrapper>
    </div>
  )
}

export default MenuMobile
