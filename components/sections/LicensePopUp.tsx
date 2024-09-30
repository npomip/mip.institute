import stls from '@/styles/components/sections/LicensePopUp.module.sass'

import Popup from 'reactjs-popup'
import IconRusLicense from '../icons/IconRusLicense'
import { IconAtom } from '../icons'
import IconLoupe from '../icons/IconLoupe'
import { PopupImage } from '../popups'
import ImgLicence from '../imgs/legal/ImgLicence'
import ImgLicenceBachelor from '../imgs/legal/ImgLicence'
import License from '../imgs/legal/License'

type Props = {
  showFullText?: boolean
  onBachelor?: boolean
}

const LicensePopUp = ({ showFullText = false, onBachelor = false }: Props) => {
  return (
    <div className={stls.btn}>
      <Popup
        trigger={
          <div className={stls.trig}>
            <div className={!showFullText ? stls.license : stls.cuttedLicense}>
              <div className={stls.leftLicense}>
                <span className={stls.licenseTitle}>
                  Образовательная
                  <br />
                </span>
                <span className={stls.edu}>
                  {onBachelor ? ' №041221' : ' №041363'}
                </span>
                <div className={stls.iconRus}>
                  <IconRusLicense />
                </div>
                <div className={stls.iconAtom}>
                  <IconAtom />
                </div>
              </div>
              <div className={stls.rightLicense}>
                <div className={stls.card}>
                  <License />
                </div>
                <div className={stls.loupe}>
                  <IconLoupe />
                </div>
              </div>
            </div>
          </div>
        }
        modal
        lockScroll
        nested
        closeOnDocumentClick>
        {
          // @ts-ignore
          close => (
            <PopupImage
              image={onBachelor ? <ImgLicence isOchuVoMip /> : <ImgLicence />}
              close={close}
            />
          )
        }
      </Popup>
    </div>
  )
}

export default LicensePopUp
