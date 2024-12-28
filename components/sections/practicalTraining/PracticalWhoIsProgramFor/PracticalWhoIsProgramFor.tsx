import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from './PracticalWhoIsProgramFor.module.sass'
import bubblesList from 'constants/practicalBubbles'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import TwoColumnsPractical from '@/components/sections/practicalTraining/TwoColumnsPractical/TwoColumnsPractical'
import Wrapper from '@/ui/Wrapper'
import renderedList from 'constants/practicalWhoIsProgramFor'
import { CldImage } from 'next-cloudinary'

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
                <CldImage
                  src='practical_beginner_5167240f17'
                  alt='Начинающий психолог'
                  width={780}
                  height={740}
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
                  <div className={stls.card} key={index}>
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
              {bubblesList.map((image, index) =>
                [3, 6, 9].includes(index) ? (
                  <div
                    className={`${stls.bubbleImage} ${
                      stls[`bubbleImage${index}`]
                    }`}
                    key={index}>
                    <Image
                      src={image.src}
                      alt='Пузыри'
                      width={image.width}
                      height={image.height}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                ) : (
                  <div
                    className={`${stls.bubbleImage} ${
                      stls[`bubbleImage${index}`]
                    }`}
                    key={index}>
                    <CldImage
                      src={image.src}
                      alt='Пузыри'
                      width={image.width}
                      height={image.height}
                      restore
                    />
                  </div>
                )
              )}
            </div>
            {isMobileAndTabletLayout && (
              <div className={stls.bubbleContainerMob}>
                {mobileBubblesList.map((image, index) =>
                  [2, 5].includes(index) ? (
                    <div
                      className={`${stls.bubbleImage} ${
                        stls[`bubbleImage${index}`]
                      }`}
                      key={index}>
                      <Image
                        src={image.src}
                        alt='Пузыри'
                        width={image.width}
                        height={image.height}
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                  ) : (
                    <div
                      className={`${stls.bubbleImage} ${
                        stls[`bubbleImage${index}`]
                      }`}
                      key={index}>
                      <CldImage
                        src={image.src}
                        alt='Пузыри'
                        width={image.width}
                        height={image.height}
                        restore
                      />
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </TwoColumnsPractical>
      </Wrapper>
    </section>
  )
}

export default PracticalWhoIsProgramFor
