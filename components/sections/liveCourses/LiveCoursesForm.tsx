import stls from '@/styles/components/sections/liveCourses/LiveCoursesForm.module.sass'
import Wrapper from '@/ui/Wrapper'
import ImgEntryForm from '@/components/imgs/general/ImgEntryForm'
import LivePaymentForm from '@/components/forms/LivePaymentForm'

type Props = {
  program: {
    price
    lmsId
  }
}

const LiveCoursesForm = ({ program }: Props) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.violetBlock}>
          <h2 className={stls.title}>Оплата обучения</h2>
          <div className={stls.blocks}>
            <div className={stls.leftBlock}>
              <div className={stls.card}>
                <div className={stls.topWhiteBlock}>
                  <div className={stls.topWhiteLeft}>
                    <p className={stls.courseName}>Стоимость обучения</p>
                    <p className={stls.oldPrice}>{program.price + 2499} ₽</p>
                    <p className={stls.newPrice}>
                      {program.price ?? '10.000'} ₽
                    </p>
                  </div>
                  <div className={stls.topWhiteRight}>
                    <div className={stls.flag}>-20%</div>
                  </div>
                </div>
                <div className={stls.bottomBlock}>
                  <ImgEntryForm isLiveCourse={true} />
                </div>
              </div>
            </div>
            <div className={stls.leftBlock}>
              <div className={stls.form}>
                <div className={stls.bgForm}>
                  <p>Заполни форму, чтобы получить доступ к курсу</p>
                  <LivePaymentForm
                    isLiveCourse
                    cta={'И разобраться с обидами'}
                    program={program}
                  />
                  {/* <PaymentForm program={program} onClose={close}/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default LiveCoursesForm
