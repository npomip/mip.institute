import stls from '@/styles/components/icons/IconPrevButton.module.sass'
import classNames from 'classnames'

interface Props {
  fourtyPx?: boolean
  fourtyPxViolet?: boolean
  isLiveCourse?: boolean
  isSquareBtn?: boolean
}

const IconNextButton = ({
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
            <rect
              x='47'
              y='47'
              width='47'
              height='47'
              rx='5'
              transform='rotate(180 47 47)'
              fill='#6F01C6'
            />
            <path
              d='M27.7071 24.7071C28.0976 24.3166 28.0976 23.6834 27.7071 23.2929L21.3431 16.9289C20.9526 16.5384 20.3195 16.5384 19.9289 16.9289C19.5384 17.3195 19.5384 17.9526 19.9289 18.3431L25.5858 24L19.9289 29.6569C19.5384 30.0474 19.5384 30.6805 19.9289 31.0711C20.3195 31.4616 20.9526 31.4616 21.3431 31.0711L27.7071 24.7071ZM25.5 25H27V23H25.5V25Z'
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
              y1='-0.495315'
              x2='22.7647'
              y2='-0.495315'
              transform='matrix(-1 0 0 1 42 23.8)'
              stroke='#F87E1B'
              strokeWidth='0.990629'
            />
            <line
              y1='-0.595315'
              x2='7.69499'
              y2='-0.445315'
              transform='matrix(-0.924678 -0.38075 -0.38075 0.924678 41.7 24)'
              stroke='#F87E1B'
              strokeWidth='0.990629'
            />
            <line
              x1='14.8364'
              y1='26.03443'
              x2='21.9518'
              y2='23.18456'
              transform='translate(19.8)'
              stroke='#F87E1B'
              strokeWidth='0.990629'
            />
          </svg>
        </span>
      )}
    </>
  )
}

export default IconNextButton
