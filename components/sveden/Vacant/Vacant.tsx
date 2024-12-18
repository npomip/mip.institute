import Table from '@/ui/Table'
import { vacantLevelsHeader, vacantLevelsRows } from 'constants/sveden/vacant'

const Vacant = () => {
  return (
    <>
      <Table
        title='Информация о количестве вакантных мест для приема (перевода) обучающихся'
        itemPropHeader='vacant'
        headers={vacantLevelsHeader}
        rows={vacantLevelsRows}
      />
    </>
  )
}

export default Vacant
