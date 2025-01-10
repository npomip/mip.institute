import stls from '@/styles/components/popups/BachelorFullProgramPopup.module.sass'

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
