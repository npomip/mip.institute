import stls from '@/styles/components/sections/JoinInSocialChannels.module.sass'
import Link from 'next/link'
import loadIcon from '@/helpers/general/loadIcon'

const SocialChannels = ({ channel }) => {
  return (
    <Link
      href={channel.href}
      passHref
      target='_blank'
      rel='noopener noreferrer'
      className={stls.oneChannel}>
      <div className={stls.channelSource}>
        {channel.icon}
        <p className={stls.channelName}>{channel.name}</p>
      </div>
      <span className={stls.arrowIcon}>
        {loadIcon('IconArrowRight', { inContacts: true })}
      </span>
    </Link>
  )
}
export default SocialChannels
