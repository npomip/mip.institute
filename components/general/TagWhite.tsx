import stls from '@/styles/components/general/TagWhite.module.sass'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const TagWhite = ({ children }: Props) => {
  return <div className={stls.container}>{children}</div>
}

export default TagWhite
