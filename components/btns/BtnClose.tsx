import stls from '@/styles/components/btns/BtnClose.module.sass'
import { useContext } from 'react'

import MenuContext from '@/context/menu/menuContext'
import { IconClose } from '@/components/icons'

const BtnClose = () => {
  const { closeMenu } = useContext(MenuContext)

  return (
    <button className={stls.container} onClick={closeMenu}>
      <IconClose />
    </button>
  )
}

export default BtnClose
