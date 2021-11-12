import stls from '@/styles/components/layout/StickyBottom.module.sass'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { discount, until } from '@/data/price'
import { routePayment } from '@/data/routes'
import Wrapper from '@/components/layout/Wrapper'
import IconWavyShape from '@/components/icons/IconWavyShape'
import PopupTrigger from '@/components/general/PopupTrigger'
import { IconCloseCircle } from '@/components/icons'
import classNames from 'classnames'

const StickyBottom = () => {
  const router = useRouter()

  const [isShown, setIsShown] = useState(false)
  const [isClosed, setIsClosed] = useState(false)

  useEffect(() => {
    if (router.asPath !== routePayment) {
      document.addEventListener('scroll', () => {
        const scrollHeight = document.body.scrollHeight
        const pageYOffset = window.pageYOffset
        pageYOffset > (scrollHeight * 10) / 100 &&
        pageYOffset + window.innerHeight < (scrollHeight * 90) / 100 &&
        !isClosed
          ? setIsShown(true)
          : setIsShown(false)
      })
    }
  }, [router, setIsShown, isClosed])

  return (
    <div
      className={classNames({
        [stls.container]: true,
        [stls.isShown]: isShown,
        [stls.isClosed]: isClosed
      })}>
      <Wrapper>
        <div className={stls.icon}>
          <IconWavyShape />
        </div>
        <p className={stls.discount}>
          <span className={stls.highlight}>Скидка {discount}</span> на все
          программы {until}!
        </p>
        <div className={stls.btns}>
          <PopupTrigger btn='theta' cta='learnAboutUs' />
          <div className={stls.btn2}>
            <PopupTrigger btn='alpha' cta='consultMe' />
          </div>
        </div>
      </Wrapper>
      <button className={stls.close} onClick={() => setIsClosed(true)}>
        <IconCloseCircle blackCross />
      </button>
    </div>
  )
}

export default StickyBottom
