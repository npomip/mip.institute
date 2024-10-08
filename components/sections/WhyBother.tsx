import TwoColumns from '@/components/layout/TwoColumns'
import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/sections/WhyBother.module.sass'
import Tag from '@/ui/Tag'
import whyBotherPoints from 'constants/whyBother'

const WhyBother = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          Почему стоит осваивать профессию психолога?
        </h2>
        <div className={stls.filterImg}>
          <span className={stls.filter}></span>
          <div className={stls.content}>
            <TwoColumns>
              <div className={stls.img}>
                <div className={stls.tagOne}>
                  <Tag type='white'>Психология</Tag>
                </div>
                <div className={stls.tagTwo}>
                  <Tag type='orange'>Преимущества</Tag>
                </div>
              </div>
              <div className={stls.points}>
                <div className={stls.mobileTags}>
                  <div className={stls.tagOneMobile}>
                    <Tag type='white'>Психология</Tag>
                  </div>
                  <div className={stls.tagTwoMobile}>
                    <Tag type='orange'>Преимущества</Tag>
                  </div>
                </div>
                {whyBotherPoints.map((el, i) => (
                  <div key={i} className={stls.wrapItem}>
                    <p className={stls.pointTitle}>{el.title}</p>
                    <p className={stls.decs}>{el.desc}</p>
                    {el?.subdesc && (
                      <p className={stls.subdesc}>{el.subdesc}</p>
                    )}
                  </div>
                ))}
              </div>
            </TwoColumns>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default WhyBother
