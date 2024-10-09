import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import src from '@/public/assets/imgs/practicalCarousel/beginner.png'
import stls from '@/styles/components/sections/practicalTraining/PracticalWhoIsProgramFor.module.sass'
import bubblesList from 'constants/practicalBubbles'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import TwoColumnsPractical from '@/components/sections/practicalTraining/TwoColumnsPractical'
import Wrapper from '@/ui/Wrapper'
import renderedList from 'constants/practicalWhoIsProgramFor'

const PracticalWhoIsProgramFor = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const mobileBubblesList = bubblesList.slice(1, bubblesList.length - 4)

  const customRenderers = {
    strong: ({ children }: { children: React.ReactNode }) => (
      <span className={stls.strongText}>{children}</span>
    )
  }

  return (
    <section className={stls.container}>
      <Wrapper>
        <TwoColumnsPractical leftViolet fixHeight isMobileReversed>
          <div className={stls.smallContainer}>
            <div className={stls.imageContainer}>
              <div className={stls.image}>
                <Image
                  src={src}
                  alt='Начинающий психолог'
                  style={{ width: '100%', height: 'auto' }}
                />
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
                    <div className={stls.text}>
                      <ReactMarkdown components={customRenderers}>
                        {item}
                      </ReactMarkdown>
                    </div>
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
                    style={{ width: '100%', height: 'auto' }}
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
