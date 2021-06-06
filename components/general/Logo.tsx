import Link from 'next/link'

import stls from '@/styles/modules/general/Logo.module.sass'
import IconLogo from '@/components/icons/IconLogo'

const Logo = () => {
  return (
    <div className={stls.container}>
      <Link href='/'>
        <a className={stls.logo}>
          <div className={stls.icon}>
            <IconLogo />
          </div>
          <p className={stls.title}>
            Московский <br />
            Институт <br />
            Психологии
          </p>
        </a>
      </Link>
    </div>
  )
}

export default Logo
