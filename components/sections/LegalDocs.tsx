import stls from '@/styles/components/sections/LegalDocs.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { IconDoc } from '@/components/icons'

const LegalDocs = () => {
  const listLeft = [
    {
      href: '',
      val: 'Положение о порядке оказания платных образовательных услуг в'
    },
    {
      href: '',
      val: 'Положение о порядке оказания платных образовательных услуг в организации дополнительного профессионального образования'
    },
    {
      href: '',
      val: 'Положение о порядке оказания платных образовательных услуг в организации дополнительного профессионального образования'
    },
    {
      href: '',
      val: 'Положение о порядке оказания платных образовательных услуг в'
    },
    {
      href: '',
      val: 'Положение о порядке оказания платных образовательных услуг в организации дополнительного профессионального образования'
    }
  ]
  const listRight = [
    {
      href: '',
      val: 'Положение о порядке оказания платных образовательных услуг в'
    },
    {
      href: '',
      val: 'Положение о порядке оказания платных образовательных услуг в организации дополнительного профессионального образования'
    },
    {
      href: '',
      val: 'Положение о порядке оказания платных образовательных услуг в организации дополнительного профессионального образования'
    }
  ]
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Нормативные документы</h2>
        <div className={stls.content}>
          <ul className={stls.listLeft}>
            {listLeft.map(item => (
              <li key={item.val} className={stls.itemLeft}>
                <a href='#' className={stls.link}>
                  <div className={stls.icon}>
                    <IconDoc />
                  </div>
                  <span className={stls.text}>{item.val}</span>
                </a>
              </li>
            ))}
          </ul>
          <ul className={stls.listRight}>
            {listRight.map(item => (
              <li key={item.val} className={stls.itemRight}>
                <a href='#' className={stls.link}>
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
