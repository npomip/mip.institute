import React, { forwardRef } from 'react'
import KinescopePlayer, {
  PlayerPropsTypes
} from '@kinescope/react-kinescope-player'

export { KinescopePlayer }

type Props = PlayerPropsTypes

const isServer = () => typeof window === 'undefined'

const Player = forwardRef<KinescopePlayer, Props>((props, ref) => {
  if (isServer()) {
    return null
  }
  return <KinescopePlayer {...props} ref={ref} />
})

Player.displayName = 'Player'

export default Player
