import classNames from 'classnames'
import FullWrapper from '../layout/FullWrapper'
import Wrapper from '../layout/Wrapper'
import stls from '@/styles/components/liveCourses/LiveCoursesStripe.module.sass'
import React from 'react'

const firstLine = [
  'Почему я все время обижаюсь?',
  'Что делать с обидой?',
  'Как с ней справиться?'
]
const secondLine = [
  'Как перестать обижаться?',
  'Как простить обиду и надо ли ее вообще прощать?'
]
const LiveCoursesStripe = () => {
  return (
    <section className={stls.section}>
      <FullWrapper>
        <Wrapper>
          <div className={stls.text}>
            <div>
              {firstLine.map((el, i) => (
                <React.Fragment key={el}>
                  <span className={stls.item}>{el}</span>
                  {i !== firstLine.length - 1 && (
                    <div className={stls.bullet}></div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div>
              {secondLine.map((el, i) => (
                <React.Fragment key={el}>
                  <span className={stls.item}>{el}</span>
                  {i !== secondLine.length - 1 && (
                    <div className={stls.bullet}></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Wrapper>
      </FullWrapper>
    </section>
  )
}

export default LiveCoursesStripe
