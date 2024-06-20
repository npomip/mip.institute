import { IconDoc } from '@/components/icons'
import Wrapper from '@/components/layout/Wrapper'
import {
  dataOchuVoMipAdditionalLeft,
  dataOchuVoMipAdditionalRight,
  dataOchuVoMipEntranceLeft,
  dataOchuVoMipEntranceRight
} from '@/data/index'
import stls from '@/styles/components/sections/LegalDocs.module.sass'
import { TypeDataDocs } from '@/types/index'

type TypeLegalDocsProps = {
  title: string
  listLeft: TypeDataDocs
  listRight: TypeDataDocs
  isOchuVoMip?: boolean
}

const LegalDocs = ({
  title,
  listLeft,
  listRight,
  isOchuVoMip
}: TypeLegalDocsProps) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>{title}</h2>
        <div className={stls.content}>
          <ul className={stls.listLeft}>
            {listLeft.map((item, idx) => (
              <li key={item.val + idx} className={stls.itemLeft}>
                <a
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={stls.link}>
                  <div className={stls.icon}>
                    <IconDoc />
                  </div>
                  <span className={stls.text}>{item.val}</span>
                </a>
              </li>
            ))}
          </ul>
          <ul className={stls.listRight}>
            {listRight.map((item, idx) => (
              <li key={item.val + idx} className={stls.itemRight}>
                <a
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={stls.link}>
                  <div className={stls.icon}>
                    <IconDoc />
                  </div>
                  <span className={stls.text}>{item.val}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {isOchuVoMip && (
          <div className={stls.listBlock}>
            <h2 className={stls.listTitle}>
              Приемная кампания по образовательным программам высшего
              образования
            </h2>
            <h3 className={stls.subTitle}>Нормативные документы</h3>
            <div className={stls.content}>
              <ul className={stls.listLeft}>
                {dataOchuVoMipAdditionalLeft.map((item, idx) => (
                  <li key={item.val + idx} className={stls.itemLeft}>
                    <a
                      href={item.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={stls.link}>
                      <div className={stls.icon}>
                        <IconDoc />
                      </div>
                      <span className={stls.text}>{item.val}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <ul className={stls.listRight}>
                {dataOchuVoMipAdditionalRight.map((item, idx) => (
                  <li key={item.val + idx} className={stls.itemRight}>
                    <a
                      href={item.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={stls.link}>
                      <div className={stls.icon}>
                        <IconDoc />
                      </div>
                      <span className={stls.text}>{item.val}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <h3 className={stls.subTitle}>Вступительные испытания</h3>
            <div className={stls.content}>
              <ul className={stls.listLeft}>
                {dataOchuVoMipEntranceLeft.map((item, idx) => (
                  <li key={item.val + idx} className={stls.itemLeft}>
                    <a
                      href={item.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={stls.link}>
                      <div className={stls.icon}>
                        <IconDoc />
                      </div>
                      <span className={stls.text}>{item.val}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <ul className={stls.listRight}>
                {dataOchuVoMipEntranceRight.map((item, idx) => (
                  <li key={item.val + idx} className={stls.itemRight}>
                    <a
                      href={item.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={stls.link}>
                      <div className={stls.icon}>
                        <IconDoc />
                      </div>
                      <span className={stls.text}>{item.val}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Wrapper>
    </section>
  )
}

export default LegalDocs
