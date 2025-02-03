import React, { useState } from 'react'
import styles from './TopBlockParallax.module.sass'
import Image from 'next/image'
import { images, parseTopBlockData, TopBlockDataType } from './const'

type PropsType = {
  props: TopBlockDataType
}

const TopBlockParallax = ({ props }: PropsType) => {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  const parsedData = parseTopBlockData(props)
  if (!parsedData) return null

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e
    const { width, height, left, top } = currentTarget.getBoundingClientRect()

    const x = (clientX - left - width / 2) / width
    const y = (clientY - top - height / 2) / height

    setMouseX(x)
    setMouseY(y)
  }

  return (
    <section className={styles.container} onMouseMove={handleMouseMove}>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>{parsedData.title}</h2>
          <p className={styles.description}>{parsedData.description}</p>
          {parsedData.link && (
            <a
              href={parsedData.link}
              className={styles.button}
              target='_blank'
              rel='noopener noreferrer'>
              {parsedData.linkText}
            </a>
          )}
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='669'
              height='540'
              viewBox='0 0 669 540'
              fill='none'>
              <path
                d='M278.246 173.526C235.517 210.631 75.4655 73.6228 0.780605 0.481113C52.452 56.8519 158.803 184.319 170.836 243.217C182.871 302.115 63.0099 386.139 1.57503 420.787C75.3171 395.09 231.773 348.296 267.661 366.702C303.549 385.109 316.029 456.92 317.783 490.525C320.796 462.946 337.612 403.917 380.767 388.424C423.921 372.932 566.344 482.553 632.158 539.299C583.386 485.393 485.064 363.487 481.971 307.126C478.877 250.765 605.184 169.856 668.723 136.447C606.283 163.497 466.913 212.928 408.953 194.251C350.993 175.574 337.823 91.0087 338.482 51.0605C336.207 76.4228 320.975 136.422 278.246 173.526Z'
                fill='#DCC8FF'
              />
            </svg>
            {images.map(img => (
              <Image
                key={img.id}
                className={styles.parallaxImage}
                alt='Параллакс изображение'
                src={img.src}
                width={img.width}
                height={img.height}
                quality={100}
                style={{
                  transform: `translate(${mouseX * img.xFactor}px, ${mouseY * img.yFactor}px) scale(1.1)`,
                  position: 'absolute',
                  top: img.top,
                  bottom: img.bottom,
                  left: img.left,
                  right: img.right
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopBlockParallax
