import stls from '@/styles/components/icons/IconContact.module.sass'
import IconProps from '@/types/interfaces/DropDownMenuIconInterface'
import classNames from 'classnames'
import React from 'react'

const IconEnterToPortal: React.FC<IconProps> = ({
  onClick,
  onMouseEnter,
  onMouseLeave,
  small = false,
  selected = false,
  className
}) => {
  const iconClasses = classNames(
    stls.container,
    { [stls.small]: small, [stls.selected]: selected },
    className
  )
  return (
    <span
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className={iconClasses}>
      <svg
        width='23'
        height='25'
        viewBox='0 0 23 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M10.4635 16.5741C10.2933 16.7503 10.1992 16.9862 10.2013 17.2311C10.2035 17.476 10.3017 17.7103 10.4749 17.8835C10.6481 18.0567 10.8823 18.1549 11.1272 18.157C11.3721 18.1592 11.6081 18.065 11.7843 17.8949L16.7666 12.8939C16.8101 12.8505 16.8446 12.799 16.8681 12.7422C16.8917 12.6855 16.9038 12.6246 16.9038 12.5632C16.9038 12.5018 16.8917 12.441 16.8681 12.3842C16.8446 12.3275 16.8101 12.2759 16.7666 12.2326L11.7843 7.23343C11.6081 7.06329 11.3721 6.96914 11.1272 6.97127C10.8823 6.97339 10.6481 7.07163 10.4749 7.24481C10.3017 7.418 10.2035 7.65227 10.2013 7.89718C10.1992 8.14209 10.2933 8.37804 10.4635 8.5542L13.5384 11.6441H1.02196C0.774227 11.6441 0.536643 11.7425 0.361472 11.9177C0.186301 12.0928 0.0878906 12.3304 0.0878906 12.5782C0.0878906 12.8259 0.186301 13.0635 0.361472 13.2386C0.536643 13.4138 0.774227 13.5122 1.02196 13.5122H13.5384L10.4635 16.5741ZM20.6373 0.435303H8.49448C8.24675 0.435303 8.00917 0.533713 7.834 0.708884C7.65883 0.884056 7.56042 1.12164 7.56042 1.36937C7.56042 1.6171 7.65883 1.85468 7.834 2.02985C8.00917 2.20502 8.24675 2.30343 8.49448 2.30343H19.7033C19.951 2.30343 20.1886 2.40184 20.3638 2.57702C20.5389 2.75219 20.6373 2.98977 20.6373 3.2375V21.9188C20.6373 22.1665 20.5389 22.4041 20.3638 22.5793C20.1886 22.7545 19.951 22.8529 19.7033 22.8529H8.02745C7.77972 22.8529 7.54214 22.9513 7.36697 23.1265C7.1918 23.3016 7.09338 23.5392 7.09338 23.787C7.09338 24.0347 7.1918 24.2723 7.36697 24.4474C7.54214 24.6226 7.77972 24.721 8.02745 24.721H20.6373C21.1328 24.721 21.608 24.5242 21.9583 24.1739C22.3087 23.8235 22.5055 23.3483 22.5055 22.8529V2.30343C22.5055 1.80798 22.3087 1.33281 21.9583 0.982466C21.608 0.632123 21.1328 0.435303 20.6373 0.435303Z'
          fill='white'
        />
      </svg>
    </span>
  )
}

export default IconEnterToPortal
