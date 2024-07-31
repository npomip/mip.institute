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
  BtnEta,
  BtnText,
  BtnTheta
} from '@/components/btns'

type PopupTriggerType = {
  btn:
    | 'alpha'
    | 'beta'
    | 'gamma'
    | 'delta'
    | 'epsilon'
    | 'zeta'
    | 'eta'
    | 'theta'
    | 'text'
    | 'test'
  cta:
    | 'askQuestion'
    | 'callMeBack'
    | 'signUpForCourse'
    | 'signUpForProgramm'
    | 'signUpForProfession'
    | 'signUp'
    | 'chooseProgram'
    | 'learnAboutUs'
    | 'submitApplication'
    | 'getFullProgram'
    | 'reserve'
    | 'learnAboutTeachers'
    | 'help'
    | 'getFullList'
    | 'seeAllWebinars'
    | 'learnMore'
    | 'consultMe'
    | 'programQuestion'
    | '2for1'
    | 'buyTicket'
    | 'participate'
    | 'familiarize'
    | 'use'
    | 'knowRequirement'
  testProgram?: string
  isActivePromocode?: string
}

const PopupTrigger = ({
  btn,
  cta,
  testProgram = null,
  isActivePromocode
}: PopupTriggerType) => {
  const promoCtaList = [
    'signUpForCourse',
    'signUpForProgramm',
    'signUpForProfession',
    'submitApplication',
    'chooseProgram',
    'reserve',
    'buyTicket',
    'familiarize',
    'use'
  ]

  const questionCtaList = ['askQuestion', 'programQuestion']

  const promo = promoCtaList.includes(cta)
  const question = questionCtaList.includes(cta)

  const strings = {
    trigger: {
      askQuestion: 'Задать вопрос',
      callMeBack: 'Обратный звонок',
      signUpForCourse: 'Записаться на курс',
      signUpForProgramm: 'Записаться на программу',
      signUpForProfession: 'Записаться на курс',
      signUp: 'Записаться',
      chooseProgram: 'Подобрать программу',
      learnAboutUs: 'Узнать об институте',
      submitApplication: 'Оставить заявку',
      getFullProgram: 'Получить полную программу',
      reserve: 'Забронировать',
      learnAboutTeachers: 'Узнать всех',
      help: 'Помощь',
      getFullList: 'Запросить полный список',
      seeAllWebinars: 'Смотреть все вебинары',
      learnMore: 'Подробнее',
      consultMe: 'Хочу консультацию',
      programQuestion: 'Вопрос по программе',
      '2for1': 'Получить 2 по цене 1',
      buyTicket: 'Купить билет',
      participate: 'Участвовать',
      familiarize: 'Ознакомиться с программой',
      use: 'Применить',
      knowRequirement: 'Узнать'
    },
    title: {
      askQuestion: 'Задать вопрос',
      callMeBack: 'Обратный звонок',
      signUpForCourse: 'Записаться на курс',
      signUpForProgramm: 'Записаться на программу',
      signUpForProfession: 'Записаться на курс',
      signUp: 'Записаться',
      chooseProgram: 'Подобрать программу',
      learnAboutUs: 'Узнать об институте',
      submitApplication: 'Оставить заявку',
      getFullProgram: 'Получить программу',
      reserve: 'Забронировать',
      learnAboutTeachers: 'Узнать всех',
      help: 'Оставить заявку',
      getFullList: 'Оставить заявку',
      seeAllWebinars: 'Оставить заявку',
      learnMore: 'Узнать подробнее',
      consultMe: 'Получить консультацию',
      programQuestion: 'Задать вопрос',
      '2for1': 'Оставить заявку',
      buyTicket: 'Выбрать билеты',
      participate: 'Участвовать',
      familiarize: 'Ознакомиться с программой',
      use: 'Применить',
      knowRequirement: 'Узнать проходной балл'
    },
    desc: {
      askQuestion: (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И сотрудник приемной комиссии
          свяжется с вами, чтобы рассказать все подробности
        </>
      ),
      callMeBack: (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И сотрудник приемной комиссии
          свяжется с вами, чтобы рассказать все подробности
        </>
      ),
      signUpForCourse: (
        <>
          У Вас есть вопросы? Оставьте заявку!{' '}
          <br className={stls.phonetablet} /> И сотрудник приемной комиссии
          свяжется с вами, чтобы рассказать все подробности
        </>
      ),
      getFullProgram: (
        <>
          Заполните форму. <br className={stls.phonetablet} /> И получите полную
          программу!
        </>
      ),
      help: (
        <>
          Оставьте заявку, мы свяжемся с Вами в рабочие часы, ответим на Ваши
          вопросы и решим проблему
        </>
      ),
      getFullList: (
        <>
          Оставьте заявку, мы свяжемся с Вами в рабочие часы и предоставим
          полный список преподавателей
        </>
      ),
      seeAllWebinars: (
        <>
          Оставьте заявку, мы свяжемся с Вами в рабочие часы и предоставим
          полный список вебинаров
        </>
      ),
      learnMore: (
        <>
          Оставьте заявку, мы свяжемся с Вами в рабочие часы и расскажем
          подробнее о вебинаре
        </>
      ),
      programQuestion: (
        <>
          У вас появились вопросы по программе или конкретному модулю?{' '}
          <br className={stls.phonetablet} /> Напишите нам в форме обратной
          связи
        </>
      ),
      participate: (
        <>
          Оставьте заявку и сотрудник приемной комиссии свяжется с вами, чтобы
          рассказать все условия акции!
        </>
      ),
      familiarize: (
        <>
          Оставьте заявку и сотрудник приемной комиссии свяжется с вами, чтобы
          рассказать все о программе
        </>
      )
    },
    blockForAmo: {
      askQuestion: 'Задать вопрос',
      callMeBack: 'Обратный звонок',
      signUpForCourse: 'Записаться на курс',
      signUpForProfession: 'Записаться на курс',
      signUp: 'Записаться',
      chooseProgram: 'Подобрать программу',
      learnAboutUs: 'Узнать об институте',
      submitApplication: 'Оставить заявку',
      getFullProgram: 'Получить программу',
      reserve: 'Забронировать',
      learnAboutTeachers: 'Узнать всех преподавателей',
      help: 'Оставить заявку',
      getFullList: 'Оставить заявку',
      seeAllWebinars: 'Смотреть вебинары',
      learnMore: 'Узнать подробнее',
      consultMe: 'Получить консультацию',
      programQuestion: 'Вопрос по программе',
      '2for1': 'Баннер 2 по цене одного',
      participate: 'Участвовать',
      familiarize: `Психологический тест ${testProgram}`
    }
  }

  const ButtonComponent = {
    alpha: BtnAlpha,
    beta: BtnBeta,
    gamma: BtnGamma,
    delta: BtnDelta,
    epsilon: BtnEpsilon,
    zeta: BtnZeta,
    eta: BtnEta,
    theta: BtnTheta,
    text: BtnText,
    test: BtnGamma
  }[btn]

  return (
    <Popup
      trigger={
        <div>
          <ButtonComponent
            text={strings.trigger[cta]}
            ctheta={btn === 'text'}
            test={btn === 'test'}
          />
        </div>
      }
      modal
      nested>
      {close => (
        <PopupCta
          promo={promo}
          title={strings.title[cta]}
          desc={strings.desc[cta]}
          cta={strings.trigger[cta]}
          question={question}
          close={close}
          blockForAmo={strings.blockForAmo[cta]}
          isActivePromocode={isActivePromocode}
        />
      )}
    </Popup>
  )
}

export default PopupTrigger
