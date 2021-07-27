import stls from '@/styles/components/btns/BtnHumburger.module.sass'
import { useContext } from 'react'

import MenuContext from '@/context/menu/menuContext'
import { IconHumburger } from '@/components/icons'

const BtnHumburger = () => {
  const { menuIsOpen, openMenu, closeMenu, toggleMenu } =
    useContext(MenuContext)

  return (
    <button className={stls.container} onClick={toggleMenu}>
      <IconHumburger />
    </button>
  )
}

export default BtnHumburger
