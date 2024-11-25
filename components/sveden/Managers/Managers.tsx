import Table from '@/ui/Table'
import {
  filialsHeader,
  filialsRows,
  managersHeader,
  managersRows,
  zamsHeader,
  zamsRows
} from 'constants/sveden/managers'

const Managers = () => {
  return (
    <>
      <Table
        title='Информация о руководителе образовательной организации'
        itemPropHeader='rucovodstvo'
        headers={managersHeader}
        rows={managersRows}
      />
      <Table
        title='Информация о заместителях руководителя образовательной организации'
        itemPropHeader='rucovodstvoZam'
        headers={zamsHeader}
        rows={zamsRows}
      />
      <Table
        title='Информация о руководителях филиалов образовательной организации'
        itemPropHeader='rucovodstvoFil'
        headers={filialsHeader}
        rows={filialsRows}
      />
    </>
  )
}

export default Managers
