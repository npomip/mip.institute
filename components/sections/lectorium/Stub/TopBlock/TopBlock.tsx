import stls from './TopBlock.module.sass'
import Wrapper from '@/ui/Wrapper'
import { CldImage } from 'next-cloudinary'

type TopBlockProps = {
  onClick: () => void
}
const TopBlock = ({ onClick }: TopBlockProps) => {
  return (
      <div className={stls.section}>
        <Wrapper>
          <div className={stls.container}>
            <div className={stls.text}>
              <h2 className={stls.title}>
                Пока у нас нет <br />
                запланированных мероприятий,
                <br /> но это лишь временно!
              </h2>
              <p className={stls.description}>
                Мы активно работаем над созданием программы, которая точно вас удивит и вдохновит.
                Заглядывайте сюда позже — мы обязательно порадуем вас новыми событиями
              </p>
              <p className={stls.buttomDescription}>
                По кнопке ниже, вы можете ознакомиться прошедшими мероприятиями
              </p>
              <button className={stls.btn} onClick={onClick}>Прошедшие мероприятия</button>
            </div>
            <div>
            <CldImage
              src='lectorium_have_Questions_658f74e67a'
              alt='Вопросы?'
              className={stls.img}
              // style={{ width: '100%', height: '100%' }}
              width='580'
              height='500'
              crop='fit'
            />
            </div>
          </div>
        </Wrapper>
      </div>
  )
}

export default TopBlock
