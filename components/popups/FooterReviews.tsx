import stls from '@/styles/components/popups/FooterReviews.module.sass'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  href: string
}

const FooterReviews = ({ children, href }: Props) => {
  return (
    <div className={stls.container}>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        {children}
      </a>
    </div>
  )
}

export default FooterReviews
