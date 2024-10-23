import { ReactNode } from 'react'
import stls from './InfoPlate.module.sass'

type Props = {
  icon: ReactNode
  header: string
  content: string | ReactNode
}

const InfoPlate = ({ icon, header, content }: Props) => {
  return (
    <div className={stls.container}>
      <div className={stls.icon}>{icon}</div>
      <div>
        <p className={stls.header}>{header}</p>
        <div className={stls.content}>{content}</div>
      </div>
    </div>
  )
}

export default InfoPlate
