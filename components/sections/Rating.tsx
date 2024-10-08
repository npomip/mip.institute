import stls from '@/styles/components/sections/Rating.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import ratingList from 'constants/ratingList'
import RatingCard from '@/components/cards/RatingCard'

const Rating = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h1 className={stls.title}>
          Ваше мнение<span className={stls.coloredText}> важно </span>для нас
        </h1>
        <h2 className={stls.subTitle}>
          <span className={stls.strongText}>Оцените нас – </span>помогите нам
          стать лучше
        </h2>
        <div className={stls.ratingCards}>
          {ratingList.map((el, idx) => (
            <RatingCard
              key={`${el.quantity} + ${idx}`}
              rating={el.rating}
              quantity={el.quantity}
              img={el.image}
              link={el.link}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default Rating
