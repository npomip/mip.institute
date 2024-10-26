import IconOctopus from '@/components/icons/IconOctopus'
import Topology from '@/components/icons/Topology'
import stls from '@/styles/components/sections/lectorium/Speaker.module.sass'
import { SpeakerType } from '@/types/page/lectorium/TypePageLectoriumPropsQuery'
import Tag from '@/ui/Tag'
import Wrapper from '@/ui/Wrapper'
import Image from 'next/image'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

type Props = {
  speaker: SpeakerType
}

const Speaker = ({ speaker }: Props) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Спикер:</h2>
        <div className={stls.block}>
          <div className={stls.imageBlock}>
            <Image
              src={speaker.picture.url}
              width={speaker.picture.width}
              height={speaker.picture.height}
              alt='Спикер'
              className={stls.image}
            />
          </div>
          {isMobileAndTabletLayout && (
            <div className={stls.tag}>
              <Tag type='purple'>Эксперт МИП</Tag>
            </div>
          )}
          <div className={stls.infoBlock}>
            <p className={stls.name}>
              {isMobileAndTabletLayout
                ? speaker.title.replace(/.*?–\s*/, '')
                : speaker.title}
            </p>
            <div className={stls.lines}>
              {speaker.text.map((el, idx) => (
                <div className={stls.line} key={el.text + idx}>
                  <div className={stls.icon}>
                    <IconOctopus />
                  </div>
                  <p className={stls.text}>{el.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={stls.background}>
            <Topology />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Speaker
