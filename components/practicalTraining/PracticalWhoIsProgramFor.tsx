import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import src from '@/public/assets/imgs/practicalCarousel/Frame 40158.jpg'
import stls from '@/styles/components/practicalTraining/PracticalWhoIsProgramFor.module.sass'
import bubblesList from 'constants/practicalBubbles'
import parse from 'html-react-parser'
import marked from 'marked'
import Image from 'next/image'
import TwoColumnsPractical from '../layout/TwoColumnsPractical'
import Wrapper from '../layout/Wrapper'
import renderedList from 'constants/practicalWhoIsProgramFor'

const PracticalWhoIsProgramFor = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const renderer = new marked.Renderer()
  const mobileBubblesList = bubblesList.slice(1, bubblesList.length - 4)
  renderer.strong = text => `<span className=${stls.strongText}>${text}</span>`
  marked.setOptions({ renderer })

  return (
    <section className={stls.container}>
      <Wrapper>
        <TwoColumnsPractical leftViolet>
          <div className={stls.smallContainer}>
            <div className={stls.imageContainer}>
              <div className={stls.image}>
                <Image src={src} alt='Начинающий психолог' />
              </div>
              <p className={stls.subTitleImage}>Начинающий психолог</p>
            </div>
          </div>
          <div className={stls.bigContainer}>
            <div className={stls.textContainer}>
              <h2 className={stls.title}>
                <span className={stls.colouredTitle}>Для кого </span>
                программа
              </h2>
              <p className={stls.subTitle}>Начинающий психолог</p>
              <div className={stls.cardsBlock}>
                {renderedList.map((item, index) => (
                  <div className={stls.card} key={item}>
                    <span className={stls.number}>{index + 1}</span>
                    <div className={stls.text}>{parse(marked(item))}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={stls.bubbleContainer}>
              {bubblesList.map((src, index) => (
                <div
                  className={`${stls.bubbleImage} ${
                    stls[`bubbleImage${index}`]
                  }`}
                  key={index}>
                  <Image
                    src={src}
                    alt='Пузыри'
                    width={src.width}
                    height={src.height}
                  />
                </div>
              ))}
            </div>
            {isMobileAndTabletLayout && (
              <div className={stls.bubbleContainerMob}>
                {mobileBubblesList.map((src, index) => (
                  <div
                    className={`${stls.bubbleImage} ${
                      stls[`bubbleImage${index}`]
                    }`}
                    key={index}>
                    <Image
                      src={src}
                      alt='Пузыри'
                      width={src.width}
                      height={src.height}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </TwoColumnsPractical>
      </Wrapper>
    </section>
  )
}

export default PracticalWhoIsProgramFor
