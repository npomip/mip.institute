import stls from '@/styles/components/btns/BtnField.module.sass'
import Link from 'next/link'
import FieldsTooltipContext from '@/context/fieldsTooltip/fieldsTooltipContext'
import { useContext } from 'react'

const BtnField = ({ href, children }) => {
  const { closeFieldsTooltip } = useContext(FieldsTooltipContext)
  return (
    <Link href={href}>
      <a className={stls.link} onClick={closeFieldsTooltip}>
        {children}
      </a>
    </Link>
  )
}

export default BtnField
