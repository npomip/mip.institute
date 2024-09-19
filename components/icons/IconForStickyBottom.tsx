import stls from '@/styles/components/icons/IconForStickyBottom.module.sass'

const IconForStickyBottom = () => {
  return (
    <span className={stls.container}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='89'
        height='65'
        viewBox='0 0 89 65'
        fill='none'
        className={stls.svg}>
        <path
          d='M44.5217 88.2246C68.0058 88.2246 87.0435 68.9226 87.0435 45.1123C87.0435 21.302 68.0058 2 44.5217 2C21.0376 2 2 21.302 2 45.1123C2 68.9226 21.0376 88.2246 44.5217 88.2246Z'
          stroke='url(#paint0_linear_3913_46)'
          strokeWidth='2.18892'
          strokeMiterlimit='10'
        />
        <defs>
          <linearGradient
            id='paint0_linear_3913_46'
            x1='1.15347'
            y1='45.1126'
            x2='87.8895'
            y2='45.1126'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#6300EB' />
            <stop offset='1' stopColor='#FF30C9' />
          </linearGradient>
        </defs>
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='163'
        height='82'
        viewBox='0 0 163 82'
        className={stls.ball}
        fill='none'>
        <path
          d='M81.5 122C126.511 122 163 85.5112 163 40.5C163 -4.5112 126.511 -41 81.5 -41C36.4888 -41 0 -4.5112 0 40.5C0 85.5112 36.4888 122 81.5 122Z'
          fill='url(#paint0_linear_3913_39)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_3913_39'
            x1='112.947'
            y1='123.32'
            x2='-6.3556'
            y2='-190.882'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#6300EB' />
            <stop offset='1' stopColor='#FF30C9' />
          </linearGradient>
        </defs>
      </svg>
    </span>
  )
}

export default IconForStickyBottom
