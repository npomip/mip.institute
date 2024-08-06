import stls from '@/styles/components/general/TagOrange.module.sass'
import classNames from 'classnames'

interface Props {
  children: string
  isWhiteText?: boolean
}

const TagOrange = ({ children, isWhiteText }: Props) => {
  return (
    <div
      className={classNames({
        [stls.container]: true,
        [stls.whiteText]: isWhiteText
      })}>
      {children}
    </div>
  )
}

export default TagOrange
