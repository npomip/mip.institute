import stls from '@/styles/components/sections/ButtonToTop.module.sass'
import { IconArrowRight } from '@/components/icons'
import { useEffect, useState } from 'react';

const ButtonToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
console.log(window.scrollY)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div onClick={scrollToTop} className={`${stls.scrollToTop} ${isVisible ? stls.show : ''}`}>
      <div className={stls.icon}>

        <IconArrowRight />
      </div>
    </div>
  )
}

export default ButtonToTop