import stls from '@/styles/components/icons/IconArrowNew.module.sass'
import classNames from 'classnames'

type Props = {
  orange?: boolean
}
const IconArrowNew = ({ orange }: Props) => {
  return (
    <span
      className={classNames({
        [stls.container]: true,
        [stls.orange]: orange
      })}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='18'
        height='17'
        viewBox='0 0 18 17'
        fill='none'>
        <path
          d='M1.9307 15.2843L16.0728 1.14217M16.0728 1.14217V11.7488M16.0728 1.14217H5.46623'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </span>
  )
}

export default IconArrowNew
