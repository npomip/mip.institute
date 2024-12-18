import Table from '@/ui/Table'
import { grantsRows } from 'constants/sveden/grants'
import stls from './Grants.module.sass'

const Grants = () => {
  return (
    <>
      <Table rows={grantsRows} />
      <p className={stls.text}>Выплата стипендий не предусмотрена</p>
    </>
  )
}

export default Grants
