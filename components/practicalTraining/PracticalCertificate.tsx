import stls from '@/styles/components/practicalTraining/PracticalCertificate.module.sass'
import { PracticalDiploma } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import classNames from 'classnames'
import Image from 'next/image'
import PopupTrigger from '../general/PopupTrigger'
import Wrapper from '../layout/Wrapper'

type Props = {
  image: PracticalDiploma
}

const PracticalCertificate = ({ image }: Props) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.blocks}>
          <div
            className={classNames({
              [stls.layout]: true,
              [stls.left]: true
            })}>
            <div className={stls.text}>
              <h2 className={stls.title}>Сертификат после обучения</h2>
              <p className={stls.description}>
                Удостоверение о повышении квалификации выдается после освоения всех 3-х ступеней
              </p>
            </div>
            <div className={stls.img}>
              <Image
                src={image?.url}
                width={image?.width}
                height={image?.height}
                alt='Сертификат'
              />
            </div>
          </div>
          <div
            className={classNames({
              [stls.layout]: true,
              [stls.right]: true
            })}>
            <span
              className={classNames({
                [stls.title]: true,
                [stls.white]: true
              })}>
              Остались вопросы?
            </span>
            <p
              className={classNames({
                [stls.description]: true,
                [stls.white]: true
              })}>
              Ответы на вопросы и консультация по обучению
            </p>
            <div className={stls.btn}>
              <PopupTrigger btn='zeta' cta='askQuestion' />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default PracticalCertificate
