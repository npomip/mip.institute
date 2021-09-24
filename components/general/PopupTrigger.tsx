import stls from '@/styles/components/general/PopupTrigger.module.sass'
import Popup from 'reactjs-popup'
import { PopupCta } from '@/components/popups'
import { BtnBeta } from '@/components/btns'

const PopupTrigger = ({ btnBeta, question }) => {
  return (
    <Popup
      trigger={
        <div>{btnBeta && <BtnBeta text={question && 'Задать вопрос'} />}</div>
      }
      modal
      nested>
      {close => (
        <PopupCta
          title={question && 'Задать вопрос'}
          desc={
            question && (
              <>
                У Вас есть вопросы? Оставьте заявку!{' '}
                <br className={stls.phonetablet} /> И мы перезвоним Вам в
                течение 5 минут!
              </>
            )
          }
          cta={question && 'Перезвоните мне'}
          question
          close={close}
        />
      )}
    </Popup>
  )
}

export default PopupTrigger
