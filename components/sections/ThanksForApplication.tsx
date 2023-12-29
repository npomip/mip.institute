import stls from '@/styles/components/sections/ThanksForApplication.module.sass'
import IconArrowLeft from '../icons/IconArrowLeft'
import { IconArrowRight } from '../icons'
import IconGratefullPortal from '../icons/IconGratefullPortal'

const ThanksForApplication = () => {
  return (
    <section className={stls.container}>
      <div className={stls.insideContainer}>
{/* // added in NY */}
        {/* <div className={stls.upperPortalSmall}>
          <IconGratefullPortal medium />
        </div>
        <div className={stls.bottomPortalSmall}>
          <IconGratefullPortal medium />
        </div>
        <div className={stls.bottomPortal}>
          <IconGratefullPortal />
        </div> */}

        {/* <div className={stls.toHome} onClick={() => {
            window.location.href = '/'
          }}>
          <div className={stls.icon}>
            <IconArrowLeft />
          </div>
          <span className={stls.homespanage}>вернуться на главную</span>
        </div> */}

{/* // added in NY */}
        <div className={stls.label}>
          <p>Поздравляем!</p>
        </div>
        <h2 className={stls.title}>Спасибо за заявку</h2>
        <div className={stls.iconArrow}>
          <IconArrowRight />
        </div>
        <div className={stls.content}>
          {/* <p>
            <span>Ваши данные переданы в приемную комиссию,</span> специалист по
            поступлению скоро позвонит вам, а пока… нам есть, что вам сказать
            перед тем, как вы примете окончательное решение стать человеком,
            который будет помогать другим людям.
          </p> */}
          {/* // added in NY  */}
          <p>
            <span>Ваши данные переданы в приемную комиссию,</span> Время ответа/звонка приемной комиссии в праздничные дни может быть увеличено. Пока вы ждете, <strong>рекомендуем забрать пользу</strong> в нашем телеграм-канале института, так время ожидания пролетит незаметно.
          </p>
          {/* // added in NY  */}
        </div>
      </div>
    </section>
  )
}

export default ThanksForApplication
