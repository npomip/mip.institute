import stls from './SvedenSkeleton.module.sass'
import { ReactNode } from 'react'
import Links from '../Links/Links'
import Wrapper from '@/ui/Wrapper'

type Props = {
  children: ReactNode
}

const SvedenSkeleton = ({ children }: Props) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.innerContainer}>
          <div className={stls.links}>
            <Links />
          </div>
          <div className={stls.content}>{children}</div>
        </div>
      </Wrapper>
    </section>
  )
}

export default SvedenSkeleton
