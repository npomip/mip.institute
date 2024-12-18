import Table from '@/ui/Table'
import {
  healthRows,
  healthHeader,
  mealsRows,
  mealsHeader
} from 'constants/sveden/catering'

const Catering = () => {
  return (
    <>
      <Table
        title='Сведения об условиях питания обучающихся'
        itemPropHeader='meals'
        headers={mealsHeader}
        rows={mealsRows}
      />
      <Table
        title='Сведения об условиях охраны здоровья обучающихся'
        itemPropHeader='health'
        headers={healthHeader}
        rows={healthRows}
      />
    </>
  )
}

export default Catering
