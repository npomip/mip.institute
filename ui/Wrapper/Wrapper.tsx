import stls from './Wrapper.module.sass'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Wrapper = ({ children }: Props) => {
  return <div className={stls.container}>{children}</div>
}

export default Wrapper
