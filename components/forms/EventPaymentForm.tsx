import routes from '@/config/routes'
import stls from '@/styles/components/forms/EventPaymentForm.module.sass'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import 'react-phone-input-2/lib/style.css'
import { useEffect, useState } from 'react'
import loadIcon from '@/helpers/general/loadIcon'

type Props = {
  timepadHref: string
}

const EventPaymentForm = ({ timepadHref }: Props) => {
  const router = useRouter()
  const [currentUrl, setCurrentUrl] = useState('')
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(`${window.location.origin}${router.asPath}`)
    }
  }, [router.asPath])

  const shareText = 'Рекомендую ознакомиться с этим мероприятием!'
  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }
  const socialLinks = [
    {
      id: 'vk',
      icon: loadIcon('IconVk'),
      link: routes.share.vk(currentUrl, shareText)
    },
    {
      id: 'whatsapp',
      icon: loadIcon('IconWhatsapp'),
      link: routes.share.whatsapp(currentUrl, shareText)
    },
    {
      id: 'telegram',
      icon: loadIcon('IconTelegram'),
      link: routes.share.telegram(currentUrl, shareText)
    },
    {
      id: 'copyLink',
      icon: loadIcon('IconCopyLink'),
      link: '#',
      onClick: e => {
        e.preventDefault()
        handleCopyLink()
      }
    }
  ]

  const onBuyClick = () => {
    window.open(timepadHref, '_blank')
  }

  const handleClick = (e, onClick) => {
    e.preventDefault()
    onClick(e)
  }

  const getClassName = (isCopied, id) =>
    classNames(stls.link, {
      [stls.green]: id === 'copyLink' && isCopied
    })

  return (
    <div className={stls.container}>
      <h2 className={stls.title}>
        <span className={stls.colouredTitle}>примите участие</span> в мероприятии
      </h2>
      <p className={stls.description}>
        Всего пара кликов отделяет вас от участия в нашем мероприятии! Регистрация и оплата доступны
        по кнопке ниже
      </p>
      <button className={stls.btn} onClick={onBuyClick}>
        Оплатить
      </button>
      <div className={stls.footer}>
        <p className={stls.share}>Поделиться мероприятием:</p>
        <div className={stls.socials}>
          {socialLinks.map(social => (
            <a
              key={social.id}
              className={getClassName(isCopied, social.id)}
              href={social.link}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={social.id}
              onClick={social.onClick ? e => handleClick(e, social.onClick) : undefined}>
              {social.id === 'copyLink' && isCopied ? loadIcon('IconCheck') : social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventPaymentForm
