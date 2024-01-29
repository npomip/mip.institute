import stls from '@/styles/pages/404.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/general/404.png'
import Wrapper from '@/components/layout/Wrapper'
import { BtnAlpha } from '@/components/btns'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className={stls.bg}>
      <Wrapper>
        <div className={stls.mobile}>
          <span>Упс</span>
          <p>Что-то пошло не так. Страница не найдена.</p>
        </div>
        <div className={stls.image}>
          <Image src={pic} alt='Страница не найдена' />
        </div>
        <div className={stls.errorText}>
          <div className={stls.message}>
            <p className={stls.oops}>Упс</p>
            <div className={stls.notFound}>
              Что-то пошло не так. Страница не найдена.
            </div>
            <div className={stls.desktopBtn}>
              <BtnAlpha href={'/'} text='Вернуться на главную' />
            </div>
            <div className={stls.mobileBtn}>
              <Link href={'/'}>Вернуться на главную</Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
