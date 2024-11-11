import stls from './Breadcrumbs.module.sass'
import Link from 'next/link'
import classNames from 'classnames'
import { Fragment, useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import { breadcrumbsConfig, programsConfig } from '@/ui/Breadcrumbs/constants'

type Props = {
  lastLabel?: string
  isJournal?: boolean
  journalSlug?: string
}

const Breadcrumbs = ({ lastLabel, isJournal = false, journalSlug }: Props) => {
  const { asPath } = useRouter()

  const breadcrumbs = useMemo(() => {
    const segments = asPath.split('?')[0].split('/').filter(Boolean)
    const paths = segments.map(
      (_, index) => `/${segments.slice(0, index + 1).join('/')}`
    )

    return paths.map(path => {
      const segment = path.split('/').pop()
      const label =
        breadcrumbsConfig[path] || programsConfig[`/${segment}`] || lastLabel

      return {
        path,
        label
      }
    })
  }, [lastLabel, asPath])

  const handleClick = useCallback(() => {
    if (typeof window !== 'undefined' && journalSlug) {
      localStorage.setItem('selectedFieldSlug', journalSlug)
    }
  }, [journalSlug])

  return (
    <nav
      aria-label='Breadcrumbs'
      className={classNames(stls.linkList, {
        [stls.isJournal]: isJournal
      })}>
      <Link href='/' className={stls.homeLink}>
        Главная
      </Link>

      {breadcrumbs.map((breadcrumb, index) => (
        <Fragment key={breadcrumb.path}>
          {index === breadcrumbs.length - 1 ? (
            <span
              className={classNames(stls.link, stls.disabled, {
                [stls.isJournal]: isJournal
              })}
              aria-current='page'>
              {breadcrumb.label}
            </span>
          ) : (
            <Link
              className={classNames(stls.link, {
                [stls.isJournal]: isJournal
              })}
              href={breadcrumb.path}
              onClick={() => {
                if (isJournal) {
                  handleClick()
                }
              }}>
              {breadcrumb.label}
            </Link>
          )}
        </Fragment>
      ))}
    </nav>
  )
}

export default Breadcrumbs
