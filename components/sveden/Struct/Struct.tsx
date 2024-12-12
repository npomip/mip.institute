import Table from '@/ui/Table'
import {
  filInfoHeaders,
  filInfoRows,
  repInfoHeaders,
  repInfoRows,
  structOrgUpravHeader,
  structOrgUpravRows
} from 'constants/sveden/struct'

const Struct = () => {
  return (
    <>
      <Table headers={structOrgUpravHeader} rows={structOrgUpravRows} />
      <Table headers={filInfoHeaders} rows={filInfoRows} />
      <Table headers={repInfoHeaders} rows={repInfoRows} />
    </>
  )
}

export default Struct
