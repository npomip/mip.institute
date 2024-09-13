import stls from '@/styles/components/sections/ActiveLicenses.module.sass'
import Popup from 'reactjs-popup'
import Wrapper from '@/components/layout/Wrapper'
import { CheckLicense } from '@/components/sections'
import { IconDoc } from '@/components/icons'
import { PopupImage } from '@/components/popups'
import ImgLicence from '@/components/imgs/legal/ImgLicence'
import { BtnAlpha } from '@/components/btns'
import routes from '@/config/routes'
import { dataOchuVoMipDocsConstituentRight } from '@/data/index'

type Props = {
  isOchuVoMip?: boolean
}

const ActiveLicenses = ({ isOchuVoMip }: Props) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        {isOchuVoMip ? (
          <div className={stls.header}>
            <h2 className={stls.title}>Действующие лицензии</h2>
            <BtnAlpha text='Реквизиты НАНО «МИП»' href={routes.front.legal} />
          </div>
        ) : (
          <div className={stls.header}>
            <h2 className={stls.title}>Действующие лицензии</h2>
            <BtnAlpha
              text='Реквизиты ОЧУ ВО «МИП»'
              href={routes.front.legal_edu}
            />
          </div>
        )}
        <p className={stls.p}>
          Лицензия департамента образования города Москвы на осуществление
          образовательной деятельности:
        </p>
        <div className={stls.content}>
          <div className={stls.left}>
            <Popup
              trigger={
                <button className={stls.trigger}>
                  <span className={stls.img}>
                    <ImgLicence isOchuVoMip={isOchuVoMip} />
                  </span>
                </button>
              }
              modal
              nested>
              {close => (
                <PopupImage
                  image={<ImgLicence isOchuVoMip={isOchuVoMip} />}
                  close={close}
                />
              )}
            </Popup>
            <span className={stls.label}>
              <span className={stls.labelIcon}>
                <IconDoc />
              </span>
              <a
                href={dataOchuVoMipDocsConstituentRight[1].href}
                target='_blank'
                rel='noopener noreferrer'>
                <span className={stls.diplomaTitle}>Лицензия</span>
              </a>
            </span>
          </div>
          <div className={stls.right}>
            <CheckLicense isOchuVoMip={isOchuVoMip} />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default ActiveLicenses
