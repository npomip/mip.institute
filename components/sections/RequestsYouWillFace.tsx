import stls from '@/styles/components/sections/RequestsYouWillFace.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { useState } from 'react';
import IconCheck from '../icons/IconCheck';


const RequestsYouWillFace = ({title, description}) => {
  const double = [
    {title: '', description: ''},
    {title: '', description: ''},
    {title: '', description: ''},
    {title: '', description: ''},
  ]
  const [isFlipped, setFlipped] = useState(false);
  const handleCardClick = () => {
    setFlipped(!isFlipped);
  };

  return (
      <div className={`${stls.card} ${isFlipped ? stls.flipped : ''}`} onClick={handleCardClick}>
      <div className={stls.front}>
        <IconCheck />
        <p>{title}</p>
      </div>
      <div className={stls.back}>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default RequestsYouWillFace
