import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import speaker from '@/public/assets/imgs/lectorium/speaker.png'
import speakerMobile from '@/public/assets/imgs/lectorium/speakerMobile.png'
import stls from '@/styles/components/sections/lectorium/DownloadProgram.module.sass'
import IconTextButton from '@/ui/IconTextButton'
import Tag from '@/ui/Tag'
import TwoColumns from '@/ui/TwoColumns'
import Wrapper from '@/ui/Wrapper'
import Image from 'next/image'

const DownloadProgram = () => {
  const isMobileLayout = useBetterMediaQuery('(max-width: 768px)')

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
                  src={isMobileLayout ? speakerMobile : speaker}
                  alt='Спикер мастер–класса'
                  className={stls.speaker}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <p className={stls.text}>
                <span className={stls.name}>Лодзь Анна Николаевна</span>
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
                полную версию программы мероприятия «Тест Роршаха: Исследование
                бессознательного через проективную диагностику»
              </p>
              <div className={stls.btn}>
                <IconTextButton onClick={() => {}} />
              </div>
            </div>
          </TwoColumns>
        </div>
      </Wrapper>
    </section>
  )
}

export default DownloadProgram
