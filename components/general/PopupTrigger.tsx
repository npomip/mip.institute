import stls from '@/styles/components/general/PopupTrigger.module.sass'
import Popup from 'reactjs-popup'
import { PopupCta } from '@/components/popups'
import { BtnAlpha, BtnBeta, BtnEpsilon } from '@/components/btns'

const PopupTrigger = ({
  btnAlpha = false,
  btnBeta = false,
  btnEpsilon = false,
  text = false,
  question = false,
  callback = false,
  ctaAlpha = false
}) => {
  const strs = {
    trigger: text
      ? text.toString()
      : question
      ? 'Задать вопрос'
      : callback
      ? 'Обратный звонок'
      : ctaAlpha
      ? 'Записаться на курс'
      : '',
    title: text
      ? text.toString()
      : question
      ? 'Задать вопрос'
      : callback
      ? 'Обратный звонок'
      : ctaAlpha
      ? 'Записаться на курс'
      : '',
    desc: question ? (
      <>
        У Вас есть вопросы? Оставьте заявку! <br className={stls.phonetablet} />{' '}
        И мы перезвоним Вам в течение 5 минут!
      </>
    ) : callback ? (
      <>
        У Вас есть вопросы? Оставьте заявку! <br className={stls.phonetablet} />{' '}
        И мы перезвоним Вам в течение 5 минут!
      </>
    ) : ctaAlpha ? (
      <>
        У Вас есть вопросы? Оставьте заявку! <br className={stls.phonetablet} />{' '}
        И мы перезвоним Вам в течение 5 минут!
      </>
    ) : (
      <>
        У Вас есть вопросы? Оставьте заявку! <br className={stls.phonetablet} />{' '}
        И мы перезвоним Вам в течение 5 минут!
      </>
    ),
    cta: text
      ? text.toString()
      : question
      ? 'Перезвоните мне'
      : callback
      ? 'Перезвоните мне'
      : ctaAlpha
      ? 'Записаться на курс'
      : ''
  }

  return (
    <Popup
      trigger={
        <div>
          {btnAlpha ? (
            <BtnAlpha text={strs.trigger} />
          ) : btnBeta ? (
            <BtnBeta text={strs.trigger} />
          ) : btnEpsilon ? (
            <BtnEpsilon text={strs.trigger} />
          ) : (
            ''
          )}
        </div>
      }
      modal
      nested>
      {close => (
        <PopupCta
          title={strs.title}
          desc={strs.desc}
          cta={strs.cta}
          question={question}
          close={close}
        />
      )}
    </Popup>
  )
}

export default PopupTrigger
