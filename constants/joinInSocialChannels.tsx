import { IconOk, IconTelegram, IconVk, IconYt } from '@/components/icons'
import routes from '@/config/routes'

const channels = [
  {
    name: 'Telegram',
    href: routes.external.telegram,
    icon: <IconTelegram inContacts />
  },
  {
    name: 'YouTube',
    href: routes.external.youtube,
    icon: <IconYt inContacts />
  },
  {
    name: 'Одноклассники',
    href: routes.external.ok,
    icon: <IconOk inContacts />
  },
  { name: 'Вконтакте', href: routes.external.vk, icon: <IconVk inContacts /> }
]

export default channels
