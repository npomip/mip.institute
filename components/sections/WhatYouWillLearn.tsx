import Wrapper from '@/components/layout/Wrapper'
import { ContextStaticProps } from '@/context/index'
import { getListItemsInnerHtml } from '@/helpers/index'
import stls from '@/styles/components/sections/WhatYouWillLearn.module.sass'
import marked from 'marked'
import { useContext } from 'react'
import TagOrange from '@/components/general/TagOrange'
import IconPortalViolet from '@/components/icons/IconPortalViolet'
import classNames from 'classnames'
import IconSun from '../icons/IconSun'
import IconStarLong from '../icons/IconStarLong'
import IconFlower from '../icons/IconFlower'
import IconClever from '../icons/IconClever'
import IconStar from '../icons/IconStar'

const WhatYouWillLearn = ({ onMain = false, title }) => {
  const { program } = useContext(ContextStaticProps)
  let list =
    program?.WhatYouWillLearn?.length > 0 &&
    getListItemsInnerHtml(marked(program.WhatYouWillLearn))

  let content = [
    {
      title: 'Применять психотерапевтические методы',
      content:
        'Освоите научно-ориентированные инструменты, подходящие для решения личностных проблем, обеспечивая эффективный терапевтический процесс с клиентами'
    },
    {
      title: 'Подбирать индивидуальную терапию',
      content:
        'Узнаете, как адаптировать психотерапию к уникальным запросам и особенностям каждого клиента'
    },
    {
      title: 'Понимать отличия в работе со взрослыми и детьми',
      content:
        'Изучите психологические аспекты, которые необходимо учитывать при взаимодействии с клиентами разных возрастов'
    },
    {
      title: 'Анализировать особенности психики человека',
      content:
        'Научитесь помогать людям обретать поддержку и успокоение, понимать сложные жизненные ситуации и находить пути их решения'
    },
    {
      title: 'Определять собственный вектор развития',
      content:
        'Мы с радостью окажем содействие в стремлении изменить направление развития твоей жизни, пересмотреть ценности и смыслы'
    },
    {
      title: 'Развивать свой личный бренд и вдохновлять других',
      content:
        'Сможете заявить о себе, привлечь клиентов и создать очередь на консультации'
    }
  ]

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
              <TagOrange>Знания</TagOrange>
            </div>
          )}
          {onMain ? (
            <div className={stls.orangeBlock}>
              <div className={stls.orangeCloudLeft}></div>
              <ul className={stls.listLeft}>
                {content.map((el, i) => (
                  <li className={stls.itemOnMain}>
                    {renderIcon(i)}
                    <div className={stls.listText}>
                      <div className={stls.listTitle}>{el.title}</div>
                      <div className={stls.text}>{el.content}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className={stls.orangeCloudRight}></div>
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
