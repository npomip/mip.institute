import routes from '@/config/routes'
import loadIcon from '@/helpers/general/loadIcon'

const channels = [
  {
    name: 'Telegram',
    href: routes.external.telegram,
    icon: loadIcon('IconTelegram', { inContacts: true })
  },
  {
    name: 'YouTube',
    href: routes.external.youtube,
    icon: loadIcon('IconYt', { inContacts: true })
  },
  {
    name: 'Одноклассники',
    href: routes.external.ok,
    icon: loadIcon('IconOk', { inContacts: true })
  },
  {
    name: 'Вконтакте',
    href: routes.external.vk,
    icon: loadIcon('IconVk', { inContacts: true })
  }
]

export default channels
