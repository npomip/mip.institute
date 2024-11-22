import stls from './Links.module.sass'
import Link from 'next/link'
import { ReactNode } from 'react'
import links from 'constants/sveden/links'
import { useRouter } from 'next/router'

const Links = () => {
  const router = useRouter()
  return (
    <div className={stls.container}>
      <ul className={stls.list}>
        {links.map((el, idx) => {
          const isActive = router.pathname === `/sveden${el.href}`
          return (
            <li key={el.val + idx} className={stls.line}>
              <Link
                href={`/sveden${el.href}`}
                className={`${stls.link} ${isActive ? stls.active : ''}`}>
                <span className={stls.icon}>{'>'}</span>
                <span className={stls.text}>{el.val}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Links
