import Table from '@/ui/Table'
import {
  educationInfoHeader,
  educationInfoRows,
  educationLevelsHeader,
  educationLevelsRows,
  educationScienceHeader,
  educationScienceRows,
  educationWorkHeader,
  educationWorkRows
} from 'constants/sveden/education'
import Link from 'next/link'
import stls from './Education.module.sass'

const Education = () => {
  return (
    <>
      <Table
        title='Информация о реализуемых уровнях образования, о формах обучения, нормативных сроках обучения'
        itemPropHeader='eduAccred'
        headers={educationLevelsHeader}
        rows={educationLevelsRows}
      />
      <div className={stls.link}>
        <Link itemProp='eduChislenEl' href=''>
          Информация о численности обучающихся по реализуемым образовательным
          программам за счет бюджетных ассигнований федерального бюджета,
          бюджетов субъектов Российской Федерации, местных бюджетов и по
          договорам об образовании за счет средств физических и (или)
          юридических лиц, в том числе информация о численности обучающихся,
          являющихся иностранными гражданами, по каждой образовательной
          программе и каждой профессии, специальности, в том числе научной,
          направлению подготовки или укрупненной группе профессий,
          специальностей и направлений подготовки (для профессиональных
          образовательных программ)
        </Link>
      </div>
      <div className={stls.link}>
        <Link itemProp='languageEl' href=''>
          Информация о языках, на которых осуществляется образование (обучение)
        </Link>
      </div>
      <div className={stls.link}>
        <Link itemProp='eduPriemEl' href=''>
          Информация о результатах приема по каждой профессии, специальности
          среднего профессионального образования (при наличии вступительных
          испытаний), каждому направлению подготовки или специальности высшего
          образования, каждой научной специальности с различными условиями
          приема (на места, финансируемые за счет бюджетных ассигнований
          федерального бюджета, бюджетов субъектов Российской Федерации, местных
          бюджетов, по договорам об образовании за счет средств физических и
          (или) юридических лиц) с указанием средней суммы набранных баллов по
          всем вступительным испытаниям
        </Link>
      </div>
      <div className={stls.link}>
        <Link itemProp='eduPerevodEl' href=''>
          Информация о результатах перевода, восстановления и отчисления
        </Link>
      </div>
      <Table
        title='Информация об образовательной программе'
        itemPropHeader='eduOp'
        headers={educationInfoHeader}
        rows={educationInfoRows}
      />
      <Table
        title='Информация об адаптированной образовательной программе'
        itemPropHeader='eduAdOp'
        headers={educationInfoHeader}
        rows={educationInfoRows}
      />
      <Table
        title='Информация о направлениях и результатах научной (научно-исследовательской) деятельности и научно-исследовательской базе для ее осуществления (для образовательных организаций высшего образования и организаций дополнительного профессионального образования)'
        itemPropHeader='eduNir'
        headers={educationScienceHeader}
        rows={educationScienceRows}
      />
      <Table
        title='Информация о трудоустройстве выпускников для каждой реализуемой образовательной программы, по которой состоялся выпуск'
        itemPropHeader='graduateJob'
        headers={educationWorkHeader}
        rows={educationWorkRows}
      />
    </>
  )
}

export default Education
