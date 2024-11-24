import Table from '@/ui/Table'
import stls from './EduStandarts.module.sass'
import { educationStandartsHeader, educationStandartsRows } from 'constants/sveden/eduStandarts'


const EduStandarts = () => {
  return (
    <>
      <Table title='ОБРАЗОВАТЕЛЬНЫЕ СТАНДАРТЫ И ТРЕБОВАНИЯ' itemPropHeader='eduAccred' headers={educationStandartsHeader} rows={educationStandartsRows} />
      

    </>
  )
}

export default EduStandarts
