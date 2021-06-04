import Link from 'next/link'

import stls from '@/styles/modules/general/Logo.module.sass'
import IconLogo from '@/components/icons/IconLogo'

const Logo = () => {
  return (
    <Link href='/'>
      <a className={stls.container}>
        <IconLogo />
        <p>Московский Институт Психологии</p>
      </a>
    </Link>
  )
}

export default Logo
