import stls from '@/styles/components/sections/CheckLicense.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { BtnAlpha } from '@/components/btns'
import { ImgFullProgram1 } from '@/components/imgs'

const CheckLicense = () => {
  return (
    <div className={stls.container}>
      <Wrapper>
        <div className={stls.wrapper}>
          <div className={stls.img}>
            <ImgFullProgram1 />
          </div>
          <div>
            <div className={stls.text}>
              <h3 className={stls.title}>Проверьте лицензии</h3>
              <p className={stls.p}>
                Вы можете проверить действующие лицензии на сайте РОСОБРНАДЗОРА
              </p>
            </div>
            <div className={stls.btn}>
              <BtnAlpha
                text='Проверить'
                href='http://isga.obrnadzor.gov.ru/rlic/details/67f7635c-5dbb-e9d7-c30c-950b7e64c838/'
                target='_blank'
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default CheckLicense
