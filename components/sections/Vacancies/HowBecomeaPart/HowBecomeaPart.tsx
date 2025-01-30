import stls from './HowBecomeaPart.module.sass'
import Wrapper from '@/ui/Wrapper'
import ValueCard from '@/components/sections/Vacancies/Values/ValueCard/ValueCard'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import { CldImage } from 'next-cloudinary'
import { VacanciesCommonCardProps } from '@/types/page/vacancies/TypePageVacanciesPropsQuery'

type Props = {
  props: VacanciesCommonCardProps
}

const HowBecomeaPart = ({ props: { title, quote } }: Props) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.cards}>
          <h2 className={stls.title}>{title}</h2>
          {quote?.map(({ body, title }, index) => (
            <ValueCard key={index} description={body} title={title} />
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
