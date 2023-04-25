import stls from '@/styles/components/layout/Footer.module.sass'
import classNames from 'classnames'
import { useContext } from 'react'
import { company, routes } from '@/config/index'
import { ContextStaticProps } from '@/context/index'
import Link from 'next/link'
import Wrapper from '@/components/layout/Wrapper'
import {
  BtnVk,
  BtnWhatsapp,
  BtnTelegram,
  BtnYt,
  BtnOk
} from '@/components/btns'
import PopupTrigger from '@/components/general/PopupTrigger'
import FooterBottom from '@/components/general/FooterBottom'
import { GeneralAddress } from '@/components/general'
import { FormAlpha } from '@/components/forms'

const Footer = () => {
  const { studyFields } = useContext(ContextStaticProps)

  const staticLinks = [
    {
      val: 'Курсы',
      href: routes.front.courses
    },
    {
      val: 'Профессии',
      href: routes.front.professions
    },
    {
      val: 'Вебинары',
      href: routes.front.webinars
    },
    {
      val: 'Преподаватели',
      href: routes.front.teachers
    },
    {
      val: 'Отзывы',
      href: routes.front.reviews
    },
    {
      val: 'Главная',
      href: routes.front.home
    },
    {
      val: 'Об институте',
      href: routes.front.about
    },
    {
      val: 'Сведения об образовательной организации',
      href: routes.front.legal
    },
    {
      val: 'Контакты',
      href: routes.front.contact
    },
    {
      val: 'Оплата',
      href: routes.front.payment
    }
  ]

  const fieldsLinks = []

  studyFields.forEach(field => {
    fieldsLinks.push({ val: field.label, href: `/programs/${field.slug}` })
  })

  return (
    <footer className={stls.container}>
      <Wrapper>
        <div className={stls.left}>
          <div className={stls.top}>
            <ul
              className={classNames({
                [stls.links]: true,
                [stls.staticLinks]: true
              })}>
              {staticLinks.map(link => (
                <li
                  key={link.val + link.href}
                  className={classNames({
                    [stls.linkItem]: true,
                    [stls.staticLinkItem]: true
                  })}>
                  <Link href={link.href}>
                    <a
                      className={classNames({
                        [stls.link]: true,
                        [stls.staticLink]: true
                      })}>
                      {link.val}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <ul
              className={classNames({
                [stls.links]: true,
                [stls.fieldsLinks]: true
              })}>
              {fieldsLinks.map(link => (
                <li
                  key={link.val + link.href}
                  className={classNames({
                    [stls.linkItem]: true,
                    [stls.fieldsLinkItem]: true
                  })}>
                  <Link href={link.href}>
                    <a
                      className={classNames({
                        [stls.link]: true,
                        [stls.fieldsLink]: true
                      })}>
                      {link.val}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className={stls.contact}>
              {/* оставил хардкод, но можно взять из company.phoneNumbers.studyPart.contactType в company.tsx */}
              <p >Приемная комиссия:</p>
              <div className={stls.numbers}>
                <a
                  href={company.phoneNumbers.default.href}
                  className={stls.number}>
                  {company.phoneNumbers.default.val}
                </a>
                <a
                  href={company.phoneNumbers.defaultAlt.href}
                  className={stls.number}>
                  {company.phoneNumbers.defaultAlt.val}
                </a>
                <p >Учебный отдел:</p>
                <a
                  href={company.phoneNumbers.studyPart.href}
                  className={stls.number}>
                  {company.phoneNumbers.studyPart.val}
                </a>
              </div>
              <GeneralAddress classNames={[stls.address]} />

              <div className={stls.sm}>
                <BtnVk dark mlzero />
                <BtnWhatsapp dark />
                <BtnTelegram dark />
                <BtnYt dark />
                <BtnOk dark />
              </div>
              <div className={stls.btn}>
                <PopupTrigger btn='beta' cta='askQuestion' />
              </div>
            </div>
          </div>
          <div className={stls.bottom}>
            <FooterBottom />
          </div>
        </div>
        <div className={stls.right}>
          <div className={stls.formTitles}>
            <p className={stls.formTitle}>Остались вопросы?</p>
            <p className={stls.formTitle}>Свяжитесь с нами!</p>
          </div>

          <FormAlpha cta={'Связаться'} atFooter agreement />
        </div>
      </Wrapper>
      <div className={stls.footerBottom}>
        <FooterBottom />
      </div>
      <div className={stls.bgRight}></div>
    </footer>
  )
}

export default Footer
