import stls from '@/styles/components/popups/PopupFooterReviews.module.sass';
import FooterReviews from './FooterReviews';
import routes from '@/config/routes';
import Ya from '../imgs/footerReviews/Ya';
import Tutortop from '../imgs/footerReviews/Tutortop';
import Otzovic from '../imgs/footerReviews/Otzovic';
import TwoGis from '../imgs/footerReviews/TwoGis';
import Ucheba from '../imgs/footerReviews/Ucheba';
import Popup from 'reactjs-popup';
import IconRating from '../icons/IconRating';
import { useEffect, useState, useRef } from 'react';

const PopupFooterReviews = () => {
  const contentStyle = {
    background: '#ffffff',
    paddingLeft: '30px',
    paddingRight: '30px',
    paddingTop: '9px',
    paddingBottom: '9px',
  };
  const [popupOpen, setPopupOpen] = useState(false);
  const edduRef = useRef(null);

  const loadRatingScript = () => {
    // if (!edduRef.current) {
      // Находим элемент с классом 'eddu'
      const eddu = document.querySelector('.eddu');
      
      if (eddu) {
        // Создаем элемент с id 'getRatingFromEddu'
        const newEddu = document.createElement('div');
        newEddu.id = 'getRatingFromEddu';
        newEddu.setAttribute('data-id', '71158');
        
        // Создаем скрипт
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://eddu.pro/getRating.js';
        script.async = true;
        script.defer = true;
        script.onload = () => {
          // Скрипт успешно загружен
        };
        
        // Вставляем элемент 'getRatingFromEddu' и скрипт внутрь 'eddu'
        eddu.appendChild(newEddu);
        eddu.appendChild(script);
        
        // Запоминаем скрипт в ref
        edduRef.current = script;
      }
    // }
  };

  useEffect(() => {
    if (popupOpen) {
      loadRatingScript();
    }
  }, [popupOpen]);

  return (
    <div className={stls.container}>
      <Popup
        trigger={(open) => (
          <div className={stls.rating} onClick={() => setPopupOpen(open)}>
            <IconRating />
          </div>
        )}
        onOpen={() => setPopupOpen(true)}
        onClose={() => setPopupOpen(false)}
        position="right center"
        {...{ contentStyle }}
        className={stls.reviews}
      >
        <FooterReviews href={routes.external.yandex}>
          <Ya />
        </FooterReviews>
        <FooterReviews href={routes.external.turtop}>
          <Tutortop />
        </FooterReviews>
        <FooterReviews href={routes.external.otzovic}>
          <Otzovic />
        </FooterReviews>
        <FooterReviews href={routes.external.twoGis}>
          <TwoGis />
        </FooterReviews>
        <FooterReviews href={routes.external.ucheba}>
          <Ucheba />
        </FooterReviews>
        
        {/* Вставляем div eddu, который будет заполнен скриптом */}
        <div className='eddu' ref={edduRef}></div>
      </Popup>
    </div>
  );
};

export default PopupFooterReviews;
