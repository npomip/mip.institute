import { ReactNode } from 'react'
import stls from './IconTextButton.module.sass'
import loadIcon from '@/helpers/general/loadIcon'

type Props = {
  onClick: () => void
  text?: string
  backgroundColor?: string
  icon?: ReactNode
}

const IconTextButton = ({
  backgroundColor = '#F87E1B',
  icon = loadIcon('IconPlus'),
  text = 'Скачать PDF',
  onClick
}: Props) => {
  return (
    <button className={stls.btn} style={{ backgroundColor }} onClick={onClick}>
      {text}
      {icon}
    </button>
  )
}

export default IconTextButton
