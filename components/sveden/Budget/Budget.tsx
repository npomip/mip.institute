import Table from '@/ui/Table'
import {
  budgetLevelsHeader,
  budgetLevelsRows,
  budgetWorkHeader,
  budgetWorkRows
} from 'constants/sveden/budget'
import Link from 'next/link'
import stls from './Budget.module.sass'

const Budget = () => {
  return (
    <>
      <Table
        title='План финансово-бюджетной деятельности или бюджетные системы ОО'
        headers={budgetLevelsHeader}
        rows={budgetLevelsRows}
        isBudget
        subTitle='Объем образовательной деятельности, финансовое обеспечение которой осуществляется'
      />
      <Table
        title='Объем образовательной деятельности, финансовое обеспечение которой осуществляется'
        itemPropHeader='volume'
        headers={budgetWorkHeader}
        rows={budgetWorkRows}
      />
      <div className={stls.link}>
        <Link itemProp='finPlanDocLink' href=''>
          Утвержденный план финансово-хозяйственной деятельности образовательной
          организации, утвержденный в установленном законодательством Российской
          Федерации порядке, или бюджетная смета образовательной организации
        </Link>
      </div>
    </>
  )
}

export default Budget
