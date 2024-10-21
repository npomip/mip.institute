import stls from '@/styles/components/sections/lectorium/LectoriumWhatYouWillLearn.module.sass'
import Image, { StaticImageData } from 'next/image'
import Wrapper from '@/ui/Wrapper'
import ReactMarkdown from 'react-markdown'

type Props = {
  whatYouWillLearn: {
    image: StaticImageData
    blocks: string[]
  }
}

const LectoriumWhatYouWillLearn = ({ whatYouWillLearn }: Props) => {
  const customRenderers = {
    strong: ({ children }: { children: React.ReactNode }) => (
      <span className={stls.strongText}>{children}</span>
    )
  }
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          ЧТО ВЫ
          <span className={stls.colouredTitle}> ПОЛУЧИТЕ И УЗНАЕТЕ</span>
        </h2>
        <div className={stls.layout}>
          <div className={stls.imageBlock}>
            <Image
              src={whatYouWillLearn.image}
              alt='Занятие'
              className={stls.image}
            />
          </div>
          <div className={stls.blocks}>
            {whatYouWillLearn.blocks.map((el, idx) => (
              <div className={stls.item} key={el + idx}>
                <div className={stls.circles}>
                  {Array.from({ length: idx + 1 }, (_, circleIdx) => (
                    <span
                      key={circleIdx}
                      className={
                        circleIdx < idx
                          ? stls.circle
                          : `${stls.circle} ${stls.filled}`
                      }></span>
                  ))}
                </div>
                <ReactMarkdown
                  className={stls.text}
                  components={customRenderers}>
                  {el}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default LectoriumWhatYouWillLearn
