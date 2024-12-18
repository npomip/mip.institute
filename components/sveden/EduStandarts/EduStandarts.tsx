import Table from '@/ui/Table'
import { educationStandartsRows } from 'constants/sveden/eduStandarts'

const EduStandarts = () => {
  return (
    <>
      <Table
        title='ОБРАЗОВАТЕЛЬНЫЕ СТАНДАРТЫ И ТРЕБОВАНИЯ'
        itemPropHeader='eduAccred'
        rows={educationStandartsRows}
      />
    </>
  )
}

export default EduStandarts
