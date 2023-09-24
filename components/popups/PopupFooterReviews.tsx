import stls from '@/styles/components/popups/PopupFooterReviews.module.sass'
import FooterReviews from './FooterReviews'
import routes from '@/config/routes'
import Ya from '../imgs/footerReviews/Ya'
import Tutortop from '../imgs/footerReviews/Tutortop'
import Otzovic from '../imgs/footerReviews/Otzovic'
import TwoGis from '../imgs/footerReviews/TwoGis'
import Ucheba from '../imgs/footerReviews/Ucheba'
import Popup from 'reactjs-popup'
import IconRating from '../icons/IconRating'
import { useEffect, useState } from 'react'
import Script from 'next/script'

const PopupFooterReviews = () => {
  const contentStyle = { background: '#ffffff', paddingLeft: '30px', paddingRight: '30px', paddingTop: '9px', paddingBottom: '9px' }
  const [rating, setRating] = useState(false)

  const loadRatingScript = () => {

  };



  return (
    <div className={stls.container} >
      <Popup
    trigger={open => (
      <div className={stls.rating} >
        <IconRating />
      </div>
    )}
    onOpen={loadRatingScript}
    position="right center"
    {...{contentStyle}}
    className={stls.reviews}
  >
    <FooterReviews href={routes.external.yandex}>
      <Ya />
    </FooterReviews>
    <FooterReviews href={routes.external.turtop}>
      <Tutortop />
    </FooterReviews>
    
    <FooterReviews href={routes.external}>
      <Otzovic />
    </FooterReviews>
    <FooterReviews href={routes.external.twoGis}>
      <TwoGis />
    </FooterReviews>
    <FooterReviews href={routes.external.ucheba}>
      <Ucheba />
    </FooterReviews>
    <script type="text/javascript" defer src="https://eddu.pro/getRating.js"/>
    <div className={stls.eddu} id="getRatingFromEddu" data-id="71158"></div>
    {/* <FooterReviews href='/'>
      <script type="text/javascript" defer src="https://eddu.pro/getRating.js"/>
      <div className={stls.eddu} id="getRatingFromEddu" data-id="71158"></div>
    </FooterReviews> */}
          

    
  {/* for test only */}
    
  </Popup>
  {/* <script type="text/javascript" defer src="https://eddu.pro/getRating.js"/>
  <div className={stls.eddu} id="getRatingFromEddu" data-id="71158"></div> */}
  
    </div>
  )
}

export default PopupFooterReviews