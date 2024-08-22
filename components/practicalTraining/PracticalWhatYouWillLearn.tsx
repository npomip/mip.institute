import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/practicalTraining/PracticalWhatYouWillLearn.module.sass'
import { WhatYouWillLearn, WhatYouWillLearnPhoto } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import Image from 'next/image'
import PracticalWhatYouWillLearnItem from './PracticalWhatYouWillLearnItem'

type Props = {
  listLearn: WhatYouWillLearn
  photo: WhatYouWillLearnPhoto
}

const PracticalWhatYouWillLearn = ({ listLearn, photo }: Props) => {  
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          Чему вы научитесь
        </h2>
        <div className={stls.columns}>
          <div className={stls.imageBlock}>
            <Image src={photo?.url} width={photo?.width} height={photo?.height} alt='Чему вы научитесь'/>
          </div>
          <div className={stls.cardsBlock}>
                {listLearn.list.map((el, index) => (
                  <PracticalWhatYouWillLearnItem block={el} number={index + 1} key={el.text}/>
                ))}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default PracticalWhatYouWillLearn
