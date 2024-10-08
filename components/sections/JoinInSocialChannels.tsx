import stls from '@/styles/components/sections/JoinInSocialChannels.module.sass'
import channels from 'constants/joinInSocialChannels'
import IconSevenPetalOtanment from '../icons/IconSevenPetalOtanment'
import TwoColumns from '../layout/TwoColumns'
import Wrapper from '../layout/Wrapper'
import SocialChannels from './SocialChannel'
import Tag from '@/ui/Tag'

const JoinInSocialChannels = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <TwoColumns>
          <div className={stls.left}>
            <div className={stls.tag}>
              <Tag type='white'>Социальные сети</Tag>
            </div>
            <h2>
              Присоединяйтесь к нам{' '}
              <span className={stls.orangeTitle}>в социальных сетях</span>
            </h2>
            <div className={stls.channelsList}>
              {channels.map((el, index) => (
                <SocialChannels key={index} channel={el} />
              ))}
            </div>
          </div>
          <div className={stls.right}>
            <IconSevenPetalOtanment />
          </div>
        </TwoColumns>
      </Wrapper>
    </section>
  )
}
export default JoinInSocialChannels
