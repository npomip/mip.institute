import stls from '@/styles/components/general/Breadcrumbs.module.sass'
import Link from 'next/link'
import classNames from 'classnames'

const Breadcrumbs = ({ breadcrumbs, isJournal = false }) => {
  return (
    <div className={stls.container}>
      <ul
        className={classNames({
          [stls.linkList]: true,
          [stls.isJournal]: isJournal
        })}
        // className={stls.linkList}
      >
        <li>
          <Link href='/'>Главная</Link>
        </li>
        {breadcrumbs.map(el => (
          <li
            // className={classNames({ [stls.isJournalLi]: isJournal })}
            key={el.path}>
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
