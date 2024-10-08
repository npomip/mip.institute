import stls from './Breadcrumbs.module.sass'
import Link from 'next/link'
import classNames from 'classnames'
import TBreadcrumb from '@/types/general/TBreadcrumb'

type Props = {
  breadcrumbs: TBreadcrumb[]
  isJournal?: boolean
}

const Breadcrumbs = ({ breadcrumbs, isJournal = false }: Props) => {
  const handleClick = bcrumbs => {
    localStorage.setItem('selectedFieldSlug', bcrumbs.slug)
  }
  return (
    <div className={stls.container}>
      <ul
        className={classNames({
          [stls.linkList]: true,
          [stls.isJournal]: isJournal
        })}>
        <li>
          <Link href='/'>Главная</Link>
        </li>
        {breadcrumbs.map(el => (
          <li key={el.label}>
            <span className={stls.triangle}></span>
            <Link
              className={stls.links}
              href={el.path}
              onClick={() => {
                if (isJournal) {
                  handleClick(el)
                }
              }}>
              {el.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Breadcrumbs
