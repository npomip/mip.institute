import { IconDoc } from '@/components/icons'
import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/sections/LegalDocs.module.sass'
import { TypeDataDocs } from '@/types/index'
import ExpandableListItem from '../general/ExpandableListItem'
import {
  listAdditional,
  listEntrance,
  listGeneral,
  listProgram,
  listHigherEducation
} from 'constants/legalInfo'

type TypeLegalDocsProps = {
  title: string
  listLeft?: TypeDataDocs
  listRight?: TypeDataDocs
  isOchuVoMip?: boolean
  isRulesBlock?: boolean
}

const LegalDocs = ({
  title,
  listLeft,
  listRight,
  isOchuVoMip,
  isRulesBlock
}: TypeLegalDocsProps) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>{title}</h2>
        <>
          {isRulesBlock ? (
            <div>
              {listGeneral.map((el, idx) => (
                <ExpandableListItem
                  title={el.title}
                  key={el.title + idx}
                  contentLeft={el.contentLeft}
                  contentRight={el.contentRight}
                />
              ))}

              {listHigherEducation.map((el, idx) => (
                <ExpandableListItem
                  title={el.title}
                  key={el.title + idx}
                  contentLeft={el.contentLeft}
                  contentRight={el.contentRight}
                />
              ))}
            </div>
          ) : (
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
          )}
        </>
        {isOchuVoMip && (
          <div className={stls.listBlock}>
            <h2 className={stls.listTitle}>
              Приемная кампания по образовательным программам высшего
              образования
            </h2>
            {listAdditional.map((el, idx) => (
              <ExpandableListItem
                title={el.title}
                key={el.title + idx}
                contentLeft={el.contentLeft}
                contentRight={el.contentRight}
              />
            ))}

            {listEntrance.map((el, idx) => (
              <ExpandableListItem
                title={el.title}
                key={el.title + idx}
                contentLeft={el.contentLeft}
                contentRight={el.contentRight}
              />
            ))}

            {listProgram.map((el, idx) => (
              <ExpandableListItem
                title={el.title}
                key={el.title + idx}
                contentLeft={el.contentLeft}
                contentRight={el.contentRight}
              />
            ))}
          </div>
        )}
      </Wrapper>
    </section>
  )
}

export default LegalDocs
