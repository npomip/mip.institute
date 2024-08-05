import Wrapper from '@/components/layout/Wrapper'
import { ContextStaticProps } from '@/context/index'
import { getListItemsInnerHtml } from '@/helpers/index'
import stls from '@/styles/components/sections/WhatYouWillLearn.module.sass'
import marked from 'marked'
import { useContext } from 'react'
import TagOrange from '@/components/general/TagOrange'
import IconPortalViolet from '@/components/icons/IconPortalViolet'
import classNames from 'classnames'
import IconSun from '@/components/icons/IconSun'
import IconStarLong from '@/components/icons/IconStarLong'
import IconFlower from '@/components/icons/IconFlower'
import IconClever from '@/components/icons/IconClever'
import IconStar from '@/components/icons/IconStar'
import content from 'constants/whatYouWillLearn'

const WhatYouWillLearn = ({ onMain = false, title }) => {
  const { program } = useContext(ContextStaticProps)
  let list =
    program?.WhatYouWillLearn?.length > 0 &&
    getListItemsInnerHtml(marked(program.WhatYouWillLearn))

  const renderIcon = (x: number) => {
    switch (x) {
      case 0:
        return <IconSun />
      case 1:
        return <IconStarLong />
      case 2:
        return <IconFlower />
      case 3:
        return <IconClever />
      case 4:
        return <IconStarLong isOrangeFilled />
      default:
        return <IconStar isOrangeEmpty />
    }
  }

  const renderFirstWord = (word: string) => {
    return word
      .split(' ')
      .filter((_, index) => index !== 0)
      .join(' ')
  }

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.block}>
          <h2 className={stls.title}>{title}</h2>
          {onMain && (
            <div className={stls.tag}>
              <TagOrange isWhiteText>Знания</TagOrange>
            </div>
          )}
          {onMain ? (
            <div className={stls.orangeBlock}>
              <ul className={stls.listMain}>
                {content.map((el, i) => (
                  <li className={stls.itemOnMain} key={title}>
                    <div className={stls.icon}>{renderIcon(i)}</div>
                    <div className={stls.listText}>
                      <div className={stls.listTitle}>{el.title}</div>
                      <div className={stls.text}>{el.content}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <ul className={stls.list}>
              {list &&
                list[0].map((item, idx) => (
                  <li key={item + idx} className={stls.item}>
                    <IconPortalViolet />
                    <div
                      className={classNames({
                        [stls.description]: true,
                        [stls.main]: onMain
                      })}>
                      <span
                        className={stls.firstWord}
                        style={{
                          display: onMain ? 'inline' : 'block'
                        }}>
                        {`${item.split(' ')[0]} `}
                      </span>
                      <span className={stls.p}>{renderFirstWord(item)}</span>
                    </div>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </Wrapper>
    </section>
  )
}

export default WhatYouWillLearn
