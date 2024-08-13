import stls from '@/styles/components/popups/BachelorFullProgramPopup.module.sass'
import { FormAlpha } from '@/components/forms'
import { BtnClose } from '@/components/btns'
import Link from 'next/link'

type Props = {
  content: string
  close?: () => void
}

const BachelorFullProgramPopup = ({ content, close }: Props) => {
  return (
    <div className={stls.container}>
      <button onClick={close}>Закрыть окно X</button>
      <p>{content}</p>
    </div>
  )
}

export default BachelorFullProgramPopup
