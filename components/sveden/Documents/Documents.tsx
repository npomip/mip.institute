import { links, staticLinks } from 'constants/sveden/documents'
import stls from './Documents.module.sass'

const Documents = () => {
  return (
    <>
      {staticLinks.map(({ itemProp, href, label }) => (
        <a
          key={itemProp}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className={stls.link}
          itemProp={itemProp}>
          {label}
        </a>
      ))}

      <p className={stls.title}>Локальные нормативные акты</p>
      <ul className={stls.list}>
        {links.map((el, idx) => (
          <li key={`${el}-${idx}`}>
            <a
              key={el.itemProp}
              href={el.href}
              target='_blank'
              rel='noopener noreferrer'
              className={stls.line}
              itemProp={el.itemProp}>
              {el.val}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Documents
