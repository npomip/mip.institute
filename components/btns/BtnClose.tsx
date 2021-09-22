import stls from '@/styles/components/btns/BtnClose.module.sass'
import { useContext } from 'react'

import MenuContext from '@/context/menu/menuContext'
import { IconClose } from '@/components/icons'

const BtnClose = ({ onClick = null }) => {
  const { closeMenu } = useContext(MenuContext)

  return (
    <button
      className={stls.container}
      onClick={onClick ? onClick : closeMenu}
      aria-label='Закрыть'>
      <IconClose />
    </button>
  )
}

export default BtnClose
