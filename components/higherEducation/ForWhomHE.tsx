import stls from '@/styles/components/higherEducation/ForWhomHE.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import CardForWhom from '@/components/cards/CardForWhom'
import forWhomList from 'constants/forWhomHE'
import NoteBlock from '@/ui/NoteBlock'
import pic from '@/public/assets/imgs/forWhom/hasDoubtsImage.png'

export const ForWhomHE = () => {
  return (
    <section className={stls.section}>
      <Wrapper>
        <div className={stls.violetCloud}></div>
        <div className={stls.violetCloudMobile}></div>
        <h2 className={stls.title}>Для кого эта программа?</h2>
        <div className={stls.content}>
          {forWhomList.map(item => (
            <CardForWhom
              imageSrc={item.image}
              title={item.title}
              description={item.description}
              key={item.title}
            />
          ))}
        </div>
        <div className={stls.note}>
          <NoteBlock
            imageSrc={pic}
            title={
              <>
                Сомневаешься <br className={stls.mobileOnly} /> в своих баллах?
              </>
            }
            description='Оцени свои шансы на поступление и узнай проходной балл!'
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default ForWhomHE
