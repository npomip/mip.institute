import stls from '@/styles/components/sections/LegalDocs.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { routesFront } from '@/config/index'
import { IconDoc } from '@/components/icons'

const LegalDocs = () => {
  const listLeft = [
    {
      href: `${routesFront.docs}/svidetelstvo-o-gosudarstvennoj-registracii-nano-mip.pdf`,
      val: 'Свидетельство о государственной регистрации НАНО МИП'
    },
    {
      href: `${routesFront.docs}/svidetelstvo-o-postanovke-na-uchet-nano-mip.pdf`,
      val: 'Свидетельство о постановке на учет НАНО МИП'
    }
  ]
  const listRight = [
    {
      href: `${routesFront.docs}/ustav-obrazovatelnoj-organizacii-nano-mip.pdf`,
      val: 'Устав образовательной  организации НАНО МИП'
    }
  ]
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Нормативные документы</h2>
        <div className={stls.content}>
          <ul className={stls.listLeft}>
            {listLeft.map((item, idx) => (
              <li key={item.val + idx} className={stls.itemLeft}>
                <a
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={stls.link}>
                  <div className={stls.icon}>
                    <IconDoc />
                  </div>
                  <span className={stls.text}>{item.val}</span>
                </a>
              </li>
            ))}
          </ul>
          <ul className={stls.listRight}>
            {listRight.map((item, idx) => (
              <li key={item.val + idx} className={stls.itemRight}>
                <a
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={stls.link}>
                  <div className={stls.icon}>
                    <IconDoc />
                  </div>
                  <span className={stls.text}>{item.val}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default LegalDocs
