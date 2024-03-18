import stls from '@/styles/components/sections/PsyTest.module.sass'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Grid, EffectCards } from 'swiper'
import { useEffect, useState } from 'react'
import Wrapper from '../layout/Wrapper'
import QuizResults from './QuizResults'
import quiz from '../funcs/quizQuestions'
SwiperCore.use([Navigation, Pagination])

const PsyTest = () => {
  const [result, setResult] = useState({
    clinic: 0,
    organization: 0,
    childrenPsy: 0,
    psyCons: 0,
    art: 0,
    sand: 0,
    psySomatic: 0,
    geshtalt: 0,
    coach: 0,
    psyAnalisys: 0,
    shortTerm: 0,
    ktp: 0
  })
  const [inputs, setInputs] = useState('')

  const [showResult, setShowResult] = useState(false)

  const [category, setCategory] = useState('')

  const handleChange = e => {
    setInputs(e.target.value)
  }
  console.log(!inputs)

  const handleAnswer = e => {
    e.preventDefault()
    const val = inputs.split(',')
    console.log(val)
    setInputs('')
    val.forEach(category => {
      setResult(prevResult => ({
        ...prevResult,
        [category]: prevResult[category] + 1
      }))
    })
  }
  let maxKey = ''
  const handleLastSlide = () => {
    console.log(result)
    setInputs('')

    setShowResult(true)
    let max = 0

    Object.keys(result).forEach(key => {
      result[key] = result[key] + 1
      if (result[key] > max) {
        max = result[key]
        maxKey = key
      }
    })
    setCategory(maxKey)
    console.log('Элемент с наибольшим количеством баллов: ', maxKey)
  }

  console.log(result)
  if (showResult) return <QuizResults result={category} />

  return (
    <section className={stls.container}>
      <Wrapper>
        <Swiper
          className={stls.a}
          speed={1000}
          // modules={[EffectCards]}
          // effect={'cards'}
          // onTouchEnd={swiper => console.log(swiper)}
          navigation={{
            prevEl: '.back',
            nextEl: '.quiz'
          }}
          swipeHandler='.quiz'>
          {quiz.map((el, i) => (
            <SwiperSlide virtualIndex={el.idx} key={el.idx}>
              <h3 className={stls.questionTitle}>{el.title}</h3>
              <div className={stls.card}>
                <div className={stls.leftBlock}>
                  <div className={stls.inputAndQuestion}>
                    <input
                      type='radio'
                      className={stls.radio}
                      name='input'
                      value={el.value1}
                      onChange={value => handleChange(value)}
                    />
                    <label className={stls.label}>{el.question1}</label>
                  </div>
                  <div className={stls.inputAndQuestion}>
                    <input
                      type='radio'
                      className={stls.radio}
                      name='input'
                      value={el.value2}
                      onChange={value => handleChange(value)}
                    />
                    <label className={stls.label}>{el.question2}</label>
                  </div>
                  {el.value3 && (
                    <div className={stls.inputAndQuestion}>
                      <input
                        type='radio'
                        className={stls.radio}
                        name='input'
                        value={el?.value3}
                        onChange={value => handleChange(value)}
                      />
                      <label className={stls.label}>{el?.question3}</label>
                    </div>
                  )}

                  {el.value4 && (
                    <div className={stls.inputAndQuestion}>
                      <input
                        type='radio'
                        className={stls.radio}
                        name='input'
                        value={el.value4}
                        onChange={value => handleChange(value)}
                      />
                      <label className={stls.label}>{el?.question4}</label>
                    </div>
                  )}
                </div>
              </div>
              <div className={stls.btn}>
                {/* <button onClick={handleAnswer} className='back'>
                  BACK
                </button> */}
                <button
                  disabled={!inputs}
                  // disabled={el.idx === 6}
                  onClick={
                    // el.idx === quiz[quiz.length - 1].idx
                    //   ? handleLastSlide
                    //   : handleAnswer
                    el.idx === 6 ? handleLastSlide : handleAnswer
                  }
                  className='quiz'>
                  Подтвердить
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </section>
  )
}
export default PsyTest
