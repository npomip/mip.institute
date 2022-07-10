import stls from '@/styles/components/btns/BtnField.module.sass'
import Link from 'next/link'
import FieldsTooltipContext from '@/context/fieldsTooltip/fieldsTooltipContext'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import classNames from 'classnames'

const BtnField = ({ href, aside = false, slug = null, children }) => {
  const { closeFieldsTooltip } = useContext(FieldsTooltipContext)
  const { curProgramsStudyFieldSlug } = useContext(ContextStaticProps)

  return (
    <Link href={href}>
      <a
        className={classNames({
          [stls.container]: true,
          [stls.tooltip]: !aside,
          [stls.aside]: aside,
          [stls.active]:
            aside &&
            (slug === curProgramsStudyFieldSlug ||
              (!slug && !curProgramsStudyFieldSlug))
        })}
        onClick={!aside && closeFieldsTooltip}>
        {children}
      </a>
    </Link>
  )
}

export default BtnField
