import stls from '@/styles/components/general/Breadcrumbs.module.sass'
import Link from 'next/link'

const Breadcrumbs = ({breadcrumbs}) => {

  return (
    <div className={stls.container}>
      <ul className={stls.linkList}>
        <li>
          <Link href='/'>
          Главная
          </Link>
        </li>
        {breadcrumbs.map(el => (
          <li  key={el.path}>
            <span className={stls.triangle}></span>
            <Link className={stls.links} href={el.path}>
            {el.label}
            </Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Breadcrumbs
