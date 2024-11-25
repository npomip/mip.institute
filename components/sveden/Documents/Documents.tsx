import links from 'constants/sveden/documents'
import Link from 'next/link'
import stls from './Documents.module.sass'

const Documents = () => {
  return (
    <>
      <Link itemProp='ustavDocLink' href='' className={stls.link}>
        Устав образовательной организации
      </Link>

      <Link itemProp='localActStud' href='' className={stls.link}>
        Правила внутреннего распорядка обучающихся
      </Link>

      <Link itemProp='localActOrder' href='' className={stls.link}>
        Правила внутреннего трудового распорядка
      </Link>

      <Link itemProp='localActCollec' href='' className={stls.link}>
        Коллективный договор (при наличии)
      </Link>

      <Link itemProp='reportEduDocLink' href='' className={stls.link}>
        Отчеты о результатах самообследования
      </Link>

      <Link itemProp='prescriptionDocLink' href='' className={stls.link}>
        Предписания органов, осуществляющих государственный контроль (надзор) в
        сфере образования, корпии отчетов об исполнении предписаний
      </Link>

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
