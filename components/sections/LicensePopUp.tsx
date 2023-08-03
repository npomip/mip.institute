import stls from '@/styles/components/sections/LicensePopUp.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import Popup from 'reactjs-popup'
import IconRusLicense from '../icons/IconRusLicense'
import { IconAtom } from '../icons'
import License from '../imgs/programs/license'
import IconLoupe from '../icons/IconLoupe'
import { PopupImage } from '../popups'
import ImgLicence from '../imgs/legal/ImgLicence'

const LicensePopUp = () => {
  return (
    <div className={stls.btn}>
    <Popup
      trigger={
        <button className={stls.trig}>
          {/* <span className={stls.img}> */}
          <div className={stls.license}>
            <div className={stls.leftLicense}>
              <span className={stls.licenseTitle}>
                Образовательная
                <br />
                
                
              </span>
              <span className={stls.edu}>
                №041221
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
        </button>
      }
      modal
      lockScroll
      nested
      closeOnDocumentClick>
      {close => <PopupImage image={<ImgLicence />} close={close} />}
    </Popup>
    </div>
  )
}

export default LicensePopUp
