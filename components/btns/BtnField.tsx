import stls from '@/styles/components/btns/BtnField.module.sass'
import Link from 'next/link'

const BtnField = ({ children }) => {
  return (
    <Link href='/'>
      <a>{children}</a>
    </Link>
  )
}

export default BtnField
