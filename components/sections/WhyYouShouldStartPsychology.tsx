import stls from '@/styles/components/sections/WhyYouShouldStartPsychology.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { ContextStaticProps } from '@/context/index'
import { useContext, useEffect, useRef, useState } from 'react'


const WhyYouShouldStartPsychology = () => {
  const { program } = useContext(ContextStaticProps)
  const sectionRef = useRef(null);

  useEffect(() => {
    let startY = 0;
    let sectionStartScrollLeft = 0;
  
    const handleScroll = (e) => {
      const section = sectionRef.current;
      const isMouseInside = section && section.contains(e.target);
      const isScrollAtStart = section.scrollLeft === 0;
      const isScrollAtEnd = section.scrollLeft + section.clientWidth >= section.scrollWidth;
  
      if (isMouseInside) {
        if (isScrollAtStart && e.deltaY < 0) {
          return;
        }
  
        if (isScrollAtEnd && e.deltaY > 0) {
          return;
        }
  
        e.preventDefault();
        section.scrollLeft += e.deltaY * 2; // Adjust scrolling speed here
      }
    };
  
    const handleTouchMove = (e) => {
      const section = sectionRef.current;
      const isTouchInside = section && section.contains(e.target);
  
      if (isTouchInside) {
        e.preventDefault();
  
        const deltaY = startY - e.touches[0].clientY;
        startY = e.touches[0].clientY;
  
        section.scrollLeft += deltaY * 2; // Adjust scrolling speed here
      }
    };
  
    const handleTouchStart = (e) => {
      const section = sectionRef.current;
      const isTouchInside = section && section.contains(e.target);
  
      if (isTouchInside) {
        startY = e.touches[0].clientY;
        sectionStartScrollLeft = section.scrollLeft;
      }
    };
  
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
  
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
  
  
  
  // console.log(sectionRef)
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.innerContainer} ref={sectionRef}
        >

          <div className={stls.one}>

          </div>
          <div className={stls.two}>
            
          </div>
          <div className={stls.three}>
            
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default WhyYouShouldStartPsychology