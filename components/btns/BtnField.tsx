import stls from '@/styles/components/btns/BtnField.module.sass'
import Link from 'next/link'

const BtnField = ({ href, children }) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  )
}

export default BtnField
