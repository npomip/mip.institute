import stls from './DownloadProgram.module.sass'
import { Lectorium } from '@/types/page/lectorium/TypePageLectoriumPropsQuery'
import IconTextButton from '@/ui/IconTextButton'
import Tag from '@/ui/Tag'
import TwoColumns from '@/ui/TwoColumns'
import Wrapper from '@/ui/Wrapper'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  lectorium: Lectorium
}

const DownloadProgram = ({ lectorium }: Props) => {
  return (
    <section>
      <Wrapper>
        <div className={stls.container}>
          <div className={stls.tag}>
            <Tag type='purple'>Подробная программа</Tag>
          </div>
          <TwoColumns>
            <div className={stls.leftBlock}>
              <div className={stls.image}>
                <Image
                  src={lectorium.speaker.picture.url}
                  width={lectorium.speaker.picture.width}
                  height={lectorium.speaker.picture.height}
                  alt='Спикер мастер–класса'
                  className={stls.speaker}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <p className={stls.text}>
                <span className={stls.name}>
                  {lectorium.speaker.title.replace(/.*?–\s*/, '')}
                </span>
                <span className={stls.rank}>Спикер мастер–класса</span>
              </p>
            </div>

            <div>
              <h2 className={stls.title}>
                <span className={stls.colouredTitle}>Скачайте</span> программу
                мероприятия
              </h2>
              <p className={stls.description}>
                <span className={stls.bold}>Нажмите на кнопку</span> и скачайте
                полную версию программы мероприятия «{lectorium.title}{' '}
                {lectorium.subtitle}»
              </p>
              <Link
                className={stls.btn}
                href={lectorium.pdf.url}
                target='_blank'
                download>
                <IconTextButton onClick={() => {}} />
              </Link>
            </div>
          </TwoColumns>
        </div>
      </Wrapper>
    </section>
  )
}

export default DownloadProgram
