import { ReactNode } from 'react'
import stls from './IconTextButton.module.sass'
import { IconPlus } from '@/components/icons'

type Props = {
  onClick: () => void
  text?: string
  backgroundColor?: string
  icon?: ReactNode
}

const IconTextButton = ({
  backgroundColor = '#F87E1B',
  icon = <IconPlus />,
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
