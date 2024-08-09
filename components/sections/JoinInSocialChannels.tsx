import stls from '@/styles/components/sections/JoinInSocialChannels.module.sass'
import channels from 'constants/joinInSocialChannels'
import TagWhite from '../general/TagWhite'
import IconSevenPetalOtanment from '../icons/IconSevenPetalOtanment'
import TwoColumns from '../layout/TwoColumns'
import Wrapper from '../layout/Wrapper'
import SocialChannels from './SocialChannel'

const JoinInSocialChannels = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <TwoColumns>
          <div className={stls.left}>
            <div className={stls.tag}>
              <TagWhite>Социальные сети</TagWhite>
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
