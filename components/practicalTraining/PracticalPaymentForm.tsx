import stls from '@/styles/components/practicalTraining/PracticalPaymentForm.module.sass'
import Wrapper from '../layout/Wrapper'
import formList from 'constants/practicalPaymentForm'
import IconThickRedRound from '../icons/IconThickRedRound'
import classNames from 'classnames'
import { FormAlpha } from '../forms'

type Props = {
  price: number
}

const PracticalPaymentForm = ({ price }: Props) => {
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
                    <p className={stls.courseName}>
                      Стоимость обучения
                      <br />
                      (1 ступень)
                    </p>
                    <p className={stls.oldPrice}>{price + 5000} ₽</p>
                    <p className={stls.newPrice}>{price ?? '30.000'} ₽</p>
                    <p className={stls.credit}>
                      Можно в рассрочку через банк-партнер
                    </p>
                  </div>
                  <div className={stls.topWhiteRight}>
                    <div className={stls.flag}>-10%*</div>
                    <p
                      className={classNames({
                        [stls.credit]: true,
                        [stls.atCorner]: true
                      })}>
                      *Дополнительная скидка при приобретении
                      <br />
                      3-х ступеней сразу
                    </p>
                  </div>
                </div>

                <div className={stls.bottomBlock}>
                  <ul className={stls.leftColumn}>
                    {formList.map(el => (
                      <li className={stls.item} key={el.title}>
                        <div className={stls.icon}>
                          <IconThickRedRound />
                        </div>
                        <div className={stls.itemText}>
                          <span className={stls.itemTitle}>{el.title}</span>
                          <p className={stls.itemDescription}>
                            {el.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className={stls.rightColumn}>
                    <li className={stls.item}>
                      <div className={stls.icon}>
                        <IconThickRedRound />
                      </div>
                      <div className={stls.itemText}>
                        <span className={stls.itemTitle}>
                          Остались вопросы?
                        </span>
                        <div className={stls.itemDescription}>
                          <p className={stls.number}>
                            Позвоните нам:
                            <a
                              href='tel:+7(499) 110-86-32'
                              className={stls.link}
                              title='Позвонить по номеру +7(499) 110-86-32'>
                              +7(499) 110-86-32
                            </a>{' '}
                          </p>
                          или напишите на{' '}
                          <a
                            className={stls.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            href='https://api.whatsapp.com/send/?phone=%2B74991108211&amp;text&amp;type=phone_number&amp;app_absent=0'>
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className={stls.leftBlock}>
              <div className={stls.form}>
                <div className={stls.bgForm}>
                  <p>
                    Заполни заявку, чтобы узнать детали и купить на лучших
                    условиях
                  </p>
                  <FormAlpha isViolet cta={'Записаться'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default PracticalPaymentForm
