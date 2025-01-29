import React from 'react'
import Wrapper from '@/ui/Wrapper'
import styles from './SliderWithImg.module.sass'
import Image from 'next/image'

type ArticleAuthorsType = {
  props: SliderProps
}
type SlideType = {
  id: number
  title: string
  body: string
}
type SliderProps = {
  title: string
  slide: SlideType[]
}

const SliderWithImg = ({ props }: ArticleAuthorsType) => {
  return (
    <section className={styles.container}>
      <Wrapper>
        <h2 className={styles.title}>{props.title}</h2>
        <div className={styles.containerTwoColumns}>
          <div className={styles.container_slides}>
            {props.slide.map((slide, index) => (
              <div key={slide.id} className={styles.slide}>
                <p className={styles.index}>
                  {index + 1} / {props.slide.length}
                </p>
                <h3 className={styles.subtitle}>{slide.title}</h3>
                <p className={styles.description}>{slide.body}</p>
              </div>
            ))}
          </div>
          <Image
            className={styles.chatImage}
            alt='фотография чата'
            src='https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738053062/dialog_1_7703856a2d.jpg'
            width={570}
            height={320}
            quality={100}
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default SliderWithImg
