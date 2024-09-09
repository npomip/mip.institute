import stls from '@/styles/components/practicalTraining/PracticalWhoIsProgramFor.module.sass'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import parse from 'html-react-parser'
import marked from 'marked'
import TwoColumnsPractical from '../layout/TwoColumnsPractical'
import Wrapper from '../layout/Wrapper'
import src from '@/public/assets/imgs/practicalCarousel/Frame 40158.jpg'
import bubblesList from 'constants/practicalBubbles'
import Image from 'next/image'
import classNames from 'classnames'


type Props = {}
const list = [
  {
    text: '**У вас нет релевантного опыта консультирования,** вы не осмеливаетесь взять первого клиента, не чувствуете уверенности в собственных силах начать консультировать',
  },
  {
    text: '**У вас присутствует страх** неправильно выявить запрос и не оказать необходимую помощь клиенту, вы боитесь заявить о себе и получить негативные отклики',
  },
  {
    text: '**Вы хотите приобрести более глубокий практический опыт** для обретения веры в себя как психолога, получить обратную связь о своей работе от преподавателя',
  }
]
const PracticalWhoIsProgramFor = ({}: Props) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const renderer = new marked.Renderer()
  const bubblesListMob = bubblesList.slice(1, bubblesList.length - 4);
  renderer.strong = text => {
    return `<span className=${stls.strongText}>${text}</span>`
  }
  marked.setOptions({ renderer })
  return (
    <section className={stls.container}>
      <Wrapper>
        <TwoColumnsPractical leftViolet>
          <div className={stls.smallContainer}>
            <div className={stls.imageContainer}>
              <div className={stls.image}>
                <Image src={src} alt='Начинающий психолог' />
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
                {list.map((el, index) => (
                  <div className={stls.card} key={el.text}>
                    <span className={stls.number}>{index + 1}</span>
                    <div className={stls.text}>{parse(marked(el.text))}</div>
                  </div>
                ))}
            </div>
          </div>
            <div className={stls.bubbleContainer}>
                {bubblesList.map((src, index) => (
                  <div 
                    className={`${stls.bubbleImage} ${stls[`bubbleImage${index}`]}`}
                    key={index}
                  >
                    <Image
                      src={src} 
                      alt='Пузыри' 
                      width={src.width} 
                      height={src.height}
                    />
                  </div>
                ))}
            </div>
            {isMobileAndTabletLayout && 
            <div className={stls.bubbleContainerMob}>
                {bubblesListMob.map((src, index) => (
                  <div 
                    className={`${stls.bubbleImage} ${stls[`bubbleImage${index}`]}`}
                    key={index}
                  >
                    <Image
                      src={src} 
                      alt='Пузыри' 
                      width={src.width} 
                      height={src.height}
                    />
                  </div>
                ))}
            </div>
            }
          </div>
        </TwoColumnsPractical>
      </Wrapper>
    </section>
  )
}

export default PracticalWhoIsProgramFor
