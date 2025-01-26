import stls from './Values.module.sass'
import Wrapper from '@/ui/Wrapper'
import ValueCard from '@/components/sections/Vacancies/Values/ValueCard/ValueCard'
import values from 'constants/vacancies/values'
import ValuesIcons from '@/components/sections/Vacancies/Values/ValuesIcons/ValuesIcons'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const Values = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Наши ценности</h2>
        <div className={stls.cards}>
          {isMobileAndTabletLayout
            ? values.map(({ id, description, title }, index) =>
                index === 2 ? (
                  <div className={stls.mobImages} key={id}>
                    <ValuesIcons likeJob />
                    <ValuesIcons />
                  </div>
                ) : index === 4 ? null : (
                  <ValueCard key={id} id={id} description={description} title={title} />
                )
              )
            : values.map(({ id, description, title }, index) =>
                index === 2 ? (
                  <div className={stls.cardImage} key={id}>
                    <ValuesIcons likeJob />
                  </div>
                ) : index === 4 ? (
                  <div className={stls.cardImage} key={id}>
                    <ValuesIcons />
                  </div>
                ) : (
                  <ValueCard key={id} id={id} description={description} title={title} />
                )
              )}
        </div>
      </Wrapper>
    </section>
  )
}

export default Values
