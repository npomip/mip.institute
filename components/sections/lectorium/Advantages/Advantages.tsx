import stls from './Advantages.module.sass'
import InfoPlate from '@/ui/InfoPlate'
import Wrapper from '@/ui/Wrapper'

const advantages = [
  {
    icon: <span className={stls.number}>1</span>,
    content: (
      <>
        <span className={stls.boldBr}>Работа </span>
        <span className={stls.text}>
          с реальными
          <br />
          кейсами
        </span>
      </>
    ),
    number: 1
  },
  {
    icon: <span className={stls.number}>2</span>,
    content: (
      <>
        <span className={stls.boldBr}>Глубокое погружение </span>
        <span className={stls.text}>в проективную диагностику</span>
      </>
    ),
    number: 2
  },
  {
    isImage: true,
    imageSrc: 'mip_building_4962833b4f'
  },
  {
    isImage: true,
    imageSrc: 'lectorium_meeting_4cf98b8491'
  },
  {
    icon: <span className={stls.number}>3</span>,
    content: (
      <>
        <span className={stls.boldBr}>Практическая </span>
        <span className={stls.text}>направленность</span>
      </>
    ),
    number: 3
  },
  {
    icon: <span className={stls.number}>4</span>,
    content: (
      <>
        <span className={stls.bold}>Возможность использования метода, </span>
        <span className={stls.text}>после прохождения мастер-класса</span>
      </>
    ),
    number: 4
  }
]

const Advantages = () => (
  <section className={stls.section}>
    <Wrapper>
      <h2 className={stls.title}>
        <span className={stls.colouredTitle}>Преимущества</span>
        мастер-класса:
      </h2>
      <div className={stls.advantages}>
        {advantages.map((advantage, idx) => (
          <InfoPlate
            key={idx}
            {...(advantage.isImage
              ? { isImage: advantage.isImage, imageSrc: advantage.imageSrc }
              : {
                  icon: advantage.icon,
                  content: advantage.content,
                  number: advantage.number,
                  isNumbered: true
                })}
          />
        ))}
      </div>
    </Wrapper>
  </section>
)

export default Advantages
