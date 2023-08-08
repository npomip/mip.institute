import stls from '@/styles/components/cards/CardReview.module.sass'
import truncate from 'truncate'
import Popup from 'reactjs-popup'
import { BtnText } from '@/components/btns'
import { PopupReview } from '@/components/popups'

const CardReview = ({ title, photo, name, occupation, story }) => {
  return (
    <article className={stls.container}>
      <div className={stls.upperContainer}>
        <div className={stls.img}>{photo}</div>
      <div className={stls.content}>
        <p className={stls.title} title={title}>
          {truncate(title, 65)}
        </p>
        <div className={stls.text}>
          <p className={stls.name}>{name}</p>
          <p className={stls.occupation}>{occupation}</p>
        </div>
      </div>
      </div>
      <div className={stls.bottom}>
        <p className={stls.story}>{story}</p>
      </div>
        {/* <Popup
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
        </Popup> */}
      
      {/* <p>{story}</p> */}
    </article>
  )
}

export default CardReview
