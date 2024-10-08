import stls from '@/styles/components/sections/GeneralAddress.module.sass'
import { TPropClassNames } from '@/types/index'
import cn from 'classnames'
import { company } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeGeneralAddressProps = TPropClassNames

const GeneralAddress = ({ classNames }: TypeGeneralAddressProps) => {
  return (
    <address
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <div>
        <span className='locality'>{company.addresses.default.city}</span>,{' '}
        <span className='street-address'>
          <br />
          {company.addresses.default.street.name} {'переулок, '}
          {company.addresses.default.street.door}
        </span>
      </div>
    </address>
  )
}

export default GeneralAddress
