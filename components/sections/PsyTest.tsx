import stls from '@/styles/components/sections/PsyTest.module.sass'
import { useState } from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import quiz from '../funcs/quizQuestions'
import Wrapper from '../layout/Wrapper'
import QuizResults from './QuizResults'
SwiperCore.use([Navigation, Pagination])

const PsyTest = () => {
  const [inputs, setInputs] = useState('')
  const [result, setResult] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)

  const [category, setCategory] = useState('')

  const handleChange = e => {
    console.log('change')
    setInputs(e.target.value)
  }

  const handleAnswer = (categories, index) => {
    // e.preventDefault()
    console.log(categories.target.value)
    setInputs(categories.target.value)
    setResult(prevRes => [...prevRes, categories.target.value])
    setInputs('')
    index === 6 && handleLastSlide()
    
  }

  const handleBack = e => {
    e.preventDefault()
    setResult(prevRes => [...prevRes].slice(0, prevRes.length - 1))
    setInputs('')
  }
  console.log(result)

  let maxKey = ''
  let options = {
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
  }
  const handleLastSlide = () => {
    // setInputs('')
    // setResult(prevRes => [...prevRes, inputs])
    setShowResult(true)
    let max = 0

    result.forEach(key => {
      
      const splitKeys = key.split(',')
      splitKeys.forEach(splitKey => {
        options[splitKey] = options[splitKey] + 1
        if (options[splitKey] > max) {
          max = options[splitKey]
          maxKey = splitKey
        }
      })
    })
    setCategory(maxKey)
  }
  if (showResult) return <QuizResults result={category} />

  return (
    <section className={stls.container}>
      <Wrapper>
        <Swiper
          className={stls.a}
          speed={1000}
          navigation={{
            prevEl: '.back',
            nextEl: '.quiz'
          }}
          onSlideNextTransitionStart={() => console.log('swiper')}
          swipeHandler='.quiz'>
          {quiz.map(el => (
            <SwiperSlide virtualIndex={el.idx} key={el.idx}>
              <h3 className={stls.questionTitle}>{el.title}</h3>
              <div className={stls.card}>
                <div className={stls.leftBlock}>
                  <div className={stls.inputAndQuestion}>
                    <input
                      type='radio'
                      className='quiz'
                      name='input'
                      onClick={value => handleAnswer(value, el.idx)}
                      value={el.value1}
                    />
                    <label className={stls.label}>{el.question1}</label>
                  </div>
                  <div className={stls.inputAndQuestion}>
                    <input
                      type='radio'
                      className='quiz'
                      name='input'
                      onClick={value => handleAnswer(value, el.idx)}
                      value={el.value2}
                    />
                    <label className={stls.label}>{el.question2}</label>
                  </div>
                  {el.value3 && (
                    <div className={stls.inputAndQuestion}>
                      <input
                        type='radio'
                        className='quiz'
                        name='input'
                        onClick={value => handleAnswer(value, el.idx)}
                        value={el?.value3}
                      />
                      <label className={stls.label}>{el?.question3}</label>
                    </div>
                  )}

                  {el.value4 && (
                    <div className={stls.inputAndQuestion}>
                      <input
                        type='radio'
                        className='quiz'
                        name='input'
                        onClick={value => handleAnswer(value, el.idx)}
                        value={el.value4}
                      />
                      <label className={stls.label}>{el?.question4}</label>
                    </div>
                  )}
                </div>
              </div>
              <div className={stls.btn}>
                {el.idx !== 1 ? (
                  <button onClick={handleBack} className='back'>
                    Назад
                  </button>
                ) : (
                  <button disabled className='back'>
                    Назад
                  </button>
                )}
                {/* <button
                  disabled={!inputs}
                  onClick={el.idx === 6 ? handleLastSlide : handleAnswer}
                  className='quiz'>
                  Подтвердить
                </button> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </section>
  )
}
export default PsyTest
