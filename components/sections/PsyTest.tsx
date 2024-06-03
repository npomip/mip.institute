import stls from '@/styles/components/sections/PsyTest.module.sass'
import { useState } from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import quiz from '../funcs/quizQuestions'
import Wrapper from '../layout/Wrapper'
import QuizResults from './QuizResults'
import PsyTestMain from './PsyTestMain'
SwiperCore.use([Navigation, Pagination])

const PsyTest = () => {
  const [_, setInputs] = useState('')
  const [result, setResult] = useState<Array<Array<string>>>([])
  const [showResult, setShowResult] = useState(false)
  const [isTestStarted, setIsTestStarted] = useState(false)

  const [category, setCategory] = useState('')

  const handleAnswer = (categories, index) => {
    setInputs(categories)
    setResult(prevRes => [...prevRes, categories])
    setInputs('')
    index === 6 && handleLastSlide()
  }

  const handleBack = e => {
    e.preventDefault()
    setResult(prevRes => [...prevRes].slice(0, prevRes.length - 1))
    setInputs('')
  }

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
    setShowResult(true)
    let max = 0

    result.forEach(array => {
      array.forEach(word => {
        if (result.filter(array => array.includes(word)).length > max) {
          max = result.filter(array => array.includes(word)).length
          maxKey = word
        }
      })
    })
    setCategory(maxKey)
  }
  if (showResult) return <QuizResults result={category} />

  const handleStart = () => {
    setIsTestStarted(true)
  }

  return (
    <>
      {isTestStarted ? (
        <section className={stls.container}>
          <Wrapper>
            <Swiper
              className={stls.a}
              speed={1000}
              navigation={{
                prevEl: '.back',
                nextEl: '.quiz'
              }}
              swipeHandler='.quiz'>
              {quiz.map(el => (
                <SwiperSlide virtualIndex={el.idx} key={el.idx}>
                  <h3 className={stls.questionTitle}>{el.title}</h3>
                  <div className={stls.card}>
                    <div className={stls.leftBlock}>
                      <div
                        className='quiz'
                        onClick={() => handleAnswer(el.value1, el.idx)}>
                        <input
                          type='radio'
                          className={stls.radioQuiz}
                          name='input'
                          value={el.value1}
                        />
                        <label className={stls.label}>{el.question1}</label>
                      </div>
                      <div
                        className='quiz'
                        onClick={() => handleAnswer(el.value2, el.idx)}>
                        <input
                          type='radio'
                          className={stls.radioQuiz}
                          name='input'
                          onClick={value => handleAnswer(value, el.idx)}
                          value={el.value2}
                        />
                        <label className={stls.label}>{el.question2}</label>
                      </div>
                      {el.value3 && (
                        <div
                          className='quiz'
                          onClick={() => handleAnswer(el.value3, el.idx)}>
                          <input
                            type='radio'
                            className={stls.radioQuiz}
                            name='input'
                            onClick={value => handleAnswer(value, el.idx)}
                            value={el?.value3}
                          />
                          <label className={stls.label}>{el?.question3}</label>
                        </div>
                      )}

                      {el.value4 && (
                        <div
                          className='quiz'
                          onClick={() => handleAnswer(el.value4, el.idx)}>
                          <input
                            type='radio'
                            className={stls.radioQuiz}
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
                    <button
                      disabled={el.idx === 1}
                      onClick={handleBack}
                      className='back'>
                      Назад
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Wrapper>
        </section>
      ) : (
        <PsyTestMain startHandler={handleStart} />
      )}
    </>
  )
}
export default PsyTest
