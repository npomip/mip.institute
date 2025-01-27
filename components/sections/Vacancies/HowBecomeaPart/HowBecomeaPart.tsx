import stls from './HowBecomeaPart.module.sass'
import Wrapper from '@/ui/Wrapper'
import ValueCard from '@/components/sections/Vacancies/Values/ValueCard/ValueCard'
import howBecomeaPart from 'constants/vacancies/howBecomeaPart'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import { CldImage } from 'next-cloudinary'

const HowBecomeaPart = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.cards}>
          <h2 className={stls.title}>Как стать частью команды МИП?</h2>
          {howBecomeaPart.map(({ id, description, title }, index) => (
            <ValueCard key={id} id={id} description={description} title={title} />
          ))}
          {isMobileAndTabletLayout && (
            <CldImage
              src='how_Becomea_Part_869976239c'
              alt='Нанять'
              width={400}
              height={400}
              style={{ width: '100%', height: '100%' }}
              className={stls.imageMobile}
            />
          )}
        </div>
        {!isMobileAndTabletLayout && (
          <div className={stls.imageWrapper}>
            <CldImage
              src='how_Becomea_Part_869976239c'
              alt='Нанять'
              width={400}
              height={400}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        )}
      </Wrapper>
    </section>
  )
}

export default HowBecomeaPart
