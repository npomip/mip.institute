import stls from './SvedenSkeleton.module.sass'
import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const SvedenSkeleton = ({ children }: Props) => {
  return <div className={stls.container}>
    <div className={stls.links}>
      {/* <Link /> */}
    </div>
    {children}
    </div>
}

export default SvedenSkeleton
