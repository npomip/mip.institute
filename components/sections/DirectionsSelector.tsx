import stls from '@/styles/components/sections/DirectionsSelector.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { ContextStaticProps } from '@/context/index'
import { Fragment, useContext, useState } from 'react'
import routes from '@/config/routes'
import classNames from 'classnames'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'
import { useRouter } from 'next/router'

const DirectionsSelector = ({currentType=null, setCurrentType}) => {

  const list = [{id:1, label: 'Дополнительное образование', href: routes.front.programs, programType: 'null'}, {id:1, label: 'Профессиональная переподготовка', href: routes.front.professions, programType: 'profession'}, {id:1, label: 'Повышение квалификации', href: routes.front.courses, programType: 'course'}]

  const isMobileLayout = useMediaQuery({ query: '(max-width: 768px)' })
  const router = useRouter()
  return (
    <div className={stls.container}>
      {list.map(({ label, href, programType }, idx) => (
        <Fragment key={idx}>
          <li className={classNames({
              [stls.studyField]: true,
              [stls.active]: currentType === programType
            })} 
            onMouseEnter={!isMobileLayout ? () => setCurrentType(programType) : undefined}
            onClick={ () => {
              setCurrentType(programType)
            if(!isMobileLayout) {
              router.push(href)
            }
            }}
            >
            {/* <BtnField */}
            {/* <Link href={href} passHref> */}
                <p
                  // onMouseEnter={() => setCurrentType(programType)}
                  className={stls.mainFields}
                >
                  {label}
                </p>
            {/* </Link> */}
            {/* </BtnField> */}
          </li>
        </Fragment>
      ))}
    </div>
  )
}

export default DirectionsSelector