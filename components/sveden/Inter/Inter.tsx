import Table from '@/ui/Table'
import { interLevelsHeader, interLevelsRows } from 'constants/sveden/inter'

const Inter = () => {
  return (
    <>
      <Table
        title='Информация о заключенных и планируемых к заключению договорах с иностранными и (или) международными организациями по вопросам образования и науки'
        itemPropHeader='internationalDo g'
        headers={interLevelsHeader}
        rows={interLevelsRows}
      />
    </>
  )
}

export default Inter
