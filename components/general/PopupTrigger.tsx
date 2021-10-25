import stls from '@/styles/components/general/PopupTrigger.module.sass'
import Popup from 'reactjs-popup'
import { PopupCta } from '@/components/popups'
import {
  BtnAlpha,
  BtnBeta,
  BtnGamma,
  BtnDelta,
  BtnEpsilon,
  BtnZeta,
  BtnEta
} from '@/components/btns'

type PopupTriggerType = {
  btn: 'alpha' | 'beta' | 'gamma' | 'delta' | 'epsilon' | 'zeta' | 'eta'
  cta:
    | 'askQuestion'
    | 'callMeBack'
    | 'signUpForCourse'
    | 'signUpForProfession'
    | 'signUp'
    | 'chooseProgram'
    | 'learnAboutUs'
    | 'submitApplication'
    | 'reserve'
    | 'learnAboutTeachers'
    | 'help'
    | 'getFullList'
}

const PopupTrigger = ({ btn, cta }: PopupTriggerType) => {
  const question = cta === 'askQuestion'

  const strs = {
    trigger:
      cta === 'askQuestion'
        ? 'Задать вопрос'
        : cta === 'callMeBack'
        ? 'Обратный звонок'
        : cta === 'signUpForCourse'
        ? 'Записаться на курс'
        : cta === 'signUpForProfession'
        ? 'Записаться на профессию'
        : cta === 'signUp'
        ? 'Записаться'
        : cta === 'chooseProgram'
        ? 'Подобрать программу'
        : cta === 'learnAboutUs'
        ? 'Узнать об институте'
        : cta === 'submitApplication'
        ? 'Оставить заявку'
        : cta === 'reserve'
        ? 'Забронировать'
        : cta === 'learnAboutTeachers'
        ? 'Узнать всех'
        : cta === 'help'
        ? 'Помощь'
        : cta === 'getFullList'
        ? 'Запросить полный список'
        : '',
    title:
      cta === 'askQuestion'
        ? 'Задать вопрос'
        : cta === 'callMeBack'
        ? 'Обратный звонок'
        : cta === 'signUpForCourse'
        ? 'Записаться на курс'
        : cta === 'signUpForProfession'
        ? 'Записаться на профессию'
        : cta === 'signUp'
        ? 'Записаться'
        : cta === 'chooseProgram'
        ? 'Подобрать программу'
        : cta === 'learnAboutUs'
        ? 'Узнать об институте'
        : cta === 'submitApplication'
        ? 'Оставить заявку'
        : cta === 'reserve'
        ? 'Забронировать'
        : cta === 'learnAboutTeachers'
        ? 'Узнать всех'
        : cta === 'help'
        ? 'Помощь'
        : cta === 'getFullList'
        ? 'Запросить полный список'
        : '',
    desc:
      cta === 'askQuestion' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И мы перезвоним Вам в течение 5
          минут!
        </>
      ) : cta === 'callMeBack' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И мы перезвоним Вам в течение 5
          минут!
        </>
      ) : cta === 'signUpForCourse' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И мы перезвоним Вам в течение 5
          минут!
        </>
      ) : cta === 'signUpForProfession' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И мы перезвоним Вам в течение 5
          минут!
        </>
      ) : cta === 'signUp' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И мы перезвоним Вам в течение 5
          минут!
        </>
      ) : cta === 'chooseProgram' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И мы перезвоним Вам в течение 5
          минут!
        </>
      ) : cta === 'learnAboutUs' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И мы перезвоним Вам в течение 5
          минут!
        </>
      ) : cta === 'submitApplication' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И мы перезвоним Вам в течение 5
          минут!
        </>
      ) : cta === 'reserve' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И мы перезвоним Вам в течение 5
          минут!
        </>
      ) : cta === 'learnAboutTeachers' ? (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И мы перезвоним Вам в течение 5
          минут!
        </>
      ) : cta === 'help' ? (
        <>
          Оставьте заявку, мы свяжемся с Вами в рабочие часы, ответим на Ваши
          вопросы и решим проблему
        </>
      ) : cta === 'getFullList' ? (
        <>
          Оставьте заявку, мы свяжемся с Вами в рабочие часы и предоставим
          полный список преподавателей
        </>
      ) : (
        ''
      ),
    cta:
      cta === 'askQuestion'
        ? 'Задать вопрос'
        : cta === 'callMeBack'
        ? 'Обратный звонок'
        : cta === 'signUpForCourse'
        ? 'Записаться на курс'
        : cta === 'signUpForProfession'
        ? 'Записаться на профессию'
        : cta === 'signUp'
        ? 'Записаться'
        : cta === 'chooseProgram'
        ? 'Подобрать программу'
        : cta === 'learnAboutUs'
        ? 'Узнать об институте'
        : cta === 'submitApplication'
        ? 'Оставить заявку'
        : cta === 'reserve'
        ? 'Забронировать'
        : cta === 'learnAboutTeachers'
        ? 'Узнать всех'
        : cta === 'help'
        ? 'Оставить заявку'
        : cta === 'getFullList'
        ? 'Оставить заявку'
        : ''
  }

  return (
    <Popup
      trigger={
        <div>
          {btn === 'alpha' ? (
            <BtnAlpha text={strs.trigger} />
          ) : btn === 'beta' ? (
            <BtnBeta text={strs.trigger} />
          ) : btn === 'gamma' ? (
            <BtnGamma text={strs.trigger} />
          ) : btn === 'delta' ? (
            <BtnDelta text={strs.trigger} />
          ) : btn === 'epsilon' ? (
            <BtnEpsilon text={strs.trigger} />
          ) : btn === 'zeta' ? (
            <BtnZeta text={strs.trigger} />
          ) : btn === 'eta' ? (
            <BtnEta text={strs.trigger} />
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
