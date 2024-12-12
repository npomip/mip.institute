import Table from '@/ui/Table'
import { employeesHeader, employeesRows } from 'constants/sveden/employees'

const Employees = () => {
  return (
    <>
      <Table
        title='Информация о персональном составе педагогических работников образовательной программы'
        itemPropHeader='teachingStaff'
        headers={employeesHeader}
        rows={employeesRows}
      />
    </>
  )
}

export default Employees
