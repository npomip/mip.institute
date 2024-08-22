import stls from '@/styles/components/icons/IconPrevButton.module.sass'
import classNames from 'classnames'

interface Props {
  fourtyPx?: boolean
  fourtyPxViolet?: boolean
  isLiveCourse?: boolean
  isSquareBtn?: boolean
}

const IconPrevButton = ({
  fourtyPx = false,
  fourtyPxViolet = false,
  isLiveCourse = false,
  isSquareBtn = false
}: Props) => {
  return (
    <>
      {isSquareBtn ? (
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='47'
            height='47'
            viewBox='0 0 47 47'
            fill='none'>
            <rect width='47' height='47' rx='5' fill='#6F01C6' />
            <path
              d='M19.2929 22.2929C18.9024 22.6834 18.9024 23.3166 19.2929 23.7071L25.6569 30.0711C26.0474 30.4616 26.6805 30.4616 27.0711 30.0711C27.4616 29.6805 27.4616 29.0474 27.0711 28.6569L21.4142 23L27.0711 17.3431C27.4616 16.9526 27.4616 16.3195 27.0711 15.9289C26.6805 15.5384 26.0474 15.5384 25.6569 15.9289L19.2929 22.2929ZM21.5 22H20V24H21.5V22Z'
              fill='white'
            />
          </svg>
        </span>
      ) : (
        <span
          className={classNames({
            [stls.container]: true,
            [stls.fourtyPx]: fourtyPx,
            [stls.fourtyPxViolet]: fourtyPxViolet,
            [stls.whiteStyle]: isLiveCourse
          })}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='45'
            height='45'
            viewBox='0 0 45 45'
            fill='none'>
            <circle
              cx='20.5882'
              cy='20.5882'
              r='21.1765'
              transform='matrix(-1 0 0 1 43 2)'
              stroke='#F87E1B'
              strokeWidth='1.17647'
            />
            <line
              x1='3.765625'
              y1='23.06743'
              x2='25.5303'
              y2='23.06743'
              stroke='#F87E1B'
              strokeWidth='0.990629'
            />
            <line
              x1='2.577034'
              y1='23.10474'
              x2='9.69242'
              y2='20.17487'
              stroke='#F87E1B'
              strokeWidth='0.990629'
            />
            <line
              y1='-0.495315'
              x2='7.69499'
              y2='-0.495315'
              transform='matrix(-0.824678 -0.38075 -0.38075 0.924678 8.875 26.49243)'
              stroke='#F87E1B'
              strokeWidth='0.990629'
            />
          </svg>
        </span>
      )}
    </>
  )
}

export default IconPrevButton
