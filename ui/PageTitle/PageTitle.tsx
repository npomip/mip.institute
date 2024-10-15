import stls from './PageTitle.module.sass'
import Wrapper from '@/ui/Wrapper'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const PageTitle = ({ children }: Props) => {
  return (
    <div className={stls.container}>
      <Wrapper>
        <h1 className={stls.title}>{children}</h1>
      </Wrapper>
    </div>
  )
}

export default PageTitle
