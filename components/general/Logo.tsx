import stls from '@/styles/modules/general/Logo.module.sass'
import classNames from 'classnames'
import Link from 'next/link'
import IconLogo from '@/components/icons/IconLogo'

const Logo = ({ atHeader = false }) => {
  return (
    <Link href='/'>
      <a
        className={classNames({
          [stls.logo]: true,
          [stls.atHeader]: atHeader
        })}>
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
  )
}

export default Logo
