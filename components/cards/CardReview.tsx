import stls from '@/styles/components/cards/CardReview.module.sass'
import truncate from 'truncate'
import Popup from 'reactjs-popup'
import { BtnText } from '@/components/btns'
import { PopupReview } from '../popups'

const CardReview = ({ title, photo, name, occupation, story }) => {
  return (
    <article className={stls.container}>
      <div className={stls.img}>{photo}</div>
      <div className={stls.content}>
        <h3 className={stls.title} title={title}>
          {truncate(title, 65)}
        </h3>
        <div className={stls.text}>
          <p className={stls.name}>{name}</p>
          <p className={stls.occupation}>{occupation}</p>
        </div>
        <Popup
          trigger={
            <div>
              <BtnText text='Читать историю' />
            </div>
          }
          modal
          nested>
          {close => (
            <PopupReview
              title={title}
              photo={photo}
              name={name}
              occupation={occupation}
              story={story}
              close={close}
            />
          )}
        </Popup>
      </div>
    </article>
  )
}

export default CardReview
