import Table from '@/ui/Table'
import {
  commonMainTableHeader,
  commonMainTableRows,
  dopHeader,
  dopRows,
  giaHeader,
  giaRows,
  platformHeader,
  platformRows,
  podgHeader,
  podgRows,
  practiceHeader,
  practiceRows,
  profHeader,
  profRows,
  uchredHeader,
  uchredRows
} from 'constants/sveden/common'

const Common = () => {
  return (
    <>
      <Table headers={commonMainTableHeader} rows={commonMainTableRows} />
      <Table
        title='Сведения об учредителях'
        headers={uchredHeader}
        rows={uchredRows}
      />
      <Table
        title='Места осуществления образовательной деятельности при использовании
        сетевой формы реализации образовательных программ'
        headers={platformHeader}
        rows={platformRows}
      />
      <Table
        title='Места проведения практики'
        headers={practiceHeader}
        rows={practiceRows}
      />
      <Table
        title='Места проведения практической подготовки обучающихся'
        headers={podgHeader}
        rows={podgRows}
      />
      <Table
        title='Места проведения государственной итоговой аттестации'
        headers={giaHeader}
        rows={giaRows}
      />
      <Table
        title='Места осуществления образовательной деятельности по дополнительным образовательным программам'
        headers={dopHeader}
        rows={dopRows}
      />
      <Table
        title='Места осуществления образовательной деятельности по основным программам профессионального обучения'
        headers={profHeader}
        rows={profRows}
      />
    </>
  )
}

export default Common
