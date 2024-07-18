import stls from '@/styles/components/higherEducation/ForWhomHE.module.sass'
import Wrapper from '../layout/Wrapper'
import CardForWhom from '../cards/CardForWhom'
import forWhomList from 'constants/forWhomHE'

export const ForWhomHE = () => {
  return (
    <section className={stls.section}>
      <Wrapper>
        <h2 className={stls.title}>Для кого эта программа?</h2>
        <div className={stls.content}>
          {forWhomList.map(item => (
            <CardForWhom
              src={item.image}
              title={item.title}
              description={item.description}
              key={item.title}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default ForWhomHE
