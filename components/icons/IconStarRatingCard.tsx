import stls from '@/styles/components/icons/IconStarRatingCard.module.sass'

const IconStarRatingCard = () => {
  return (
    <span className={stls.container}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='15'
        height='14'
        viewBox='0 0 15 14'
        fill='none'>
        <path
          d='M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z'
          fill='#8F60FF'
        />
      </svg>
    </span>
  )
}

export default IconStarRatingCard
