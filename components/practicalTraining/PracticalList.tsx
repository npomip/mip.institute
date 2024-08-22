import TagOrange from '@/components/general/TagOrange'
import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/practicalTraining/PracticalList.module.sass'
import { PracticalListItem } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import parse from 'html-react-parser'

type Props = {
  list: PracticalListItem[]
}

const PracticalList = ({ list }: Props) => {
  const renderIcon = (el: string) => {
    const svg = parse(el)
    return <span>{svg}</span>
  }

  const totalItems = list.length
  const splitPoint = Math.ceil(totalItems / 2)
  const leftColumnItems = list.slice(0, splitPoint)
  const rightColumnItems = list.slice(splitPoint)

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.whiteBlock}>
          <div className={stls.tag}>
            <TagOrange isWhiteText>Образование</TagOrange>
          </div>
          <h2 className={stls.title}>
            Зачем
            <span className={stls.colouredTitle}> нужна практика </span>
            будущему психологу во время обучения?
          </h2>
          <div className={stls.violetBlock}>
            <div className={stls.columns}>
              <ul className={stls.listMainLeft}>
                {leftColumnItems.map(el => (
                  <li className={stls.itemOnMain} key={el.title}>
                    <div className={stls.icon}>{renderIcon(el.icon)}</div>
                    <div className={stls.listText}>
                      <div className={stls.listTitle}>{el.title}</div>
                      <div className={stls.text}>{el.text}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <ul className={stls.listMainRight}>
                {rightColumnItems.map(el => (
                  <li className={stls.itemOnMain} key={el.title}>
                    <div className={stls.icon}>{renderIcon(el.icon)}</div>
                    <div className={stls.listText}>
                      <div className={stls.listTitle}>{el.title}</div>
                      <div className={stls.text}>{el.text}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default PracticalList
