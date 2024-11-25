import Table from '@/ui/Table'
import links from 'constants/sveden/documents'
import Link from 'next/link'
import stls from './Documents.module.sass'

const Documents = () => {
  return (
    <>
      <div className={stls.link}>
        <Link itemProp='ustavDocLink' href=''>
          Устав образовательной организации
        </Link>
      </div>
      <div className={stls.link}>
        <Link itemProp='localActStud' href=''>
          Правила внутреннего распорядка обучающихся
        </Link>
      </div>
      <div className={stls.link}>
        <Link itemProp='localActOrder' href=''>
          Правила внутреннего трудового распорядка
        </Link>
      </div>
      <div className={stls.link}>
        <Link itemProp='localActCollec' href=''>
          Коллективный договор (при наличии)
        </Link>
      </div>
      <div className={stls.link}>
        <Link itemProp='reportEduDocLink' href=''>
          Отчеты о результатах самообследования
        </Link>
      </div>
      <div className={stls.link}>
        <Link itemProp='prescriptionDocLink' href=''>
          Предписания органов, осуществляющих государственный контроль (надзор)
          в сфере образования, корпии отчетов об исполнении предписаний
        </Link>
      </div>
      <p className={stls.title}>Локальные нормативные акты</p>
      <ul className={stls.list}>
        {links.map((el, idx) => (
          <li key={`${el}-${idx}`}>
            <Link itemProp={el.itemProp} href={el.href} className={stls.line}>
              {el.val}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Documents
