import Table from '@/ui/Table'
import {
  commonMainTableHeader,
  commonMainTableRows
} from 'constants/sveden/common'

const Common = () => {
  return <Table headers={commonMainTableHeader} rows={commonMainTableRows} />
}

export default Common
