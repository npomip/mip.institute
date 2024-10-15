import stls from './FullWrapper.module.sass'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const FullWrapper = ({ children }: Props) => {
  return <div className={stls.container}>{children}</div>
}

export default FullWrapper
