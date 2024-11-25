import { links, staticLinks } from 'constants/sveden/documents'
import Link from 'next/link'
import stls from './Documents.module.sass'

const Documents = () => {
  return (
    <>
      {staticLinks.map(({ itemProp, href, label }) => (
        <Link
          key={itemProp}
          itemProp={itemProp}
          href={href}
          className={stls.link}>
          {label}
        </Link>
      ))}

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
