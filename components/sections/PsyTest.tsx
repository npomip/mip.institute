import stls from '@/styles/components/sections/PsyTest.module.sass'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Grid } from 'swiper'
import { useState } from 'react'
import Wrapper from '../layout/Wrapper'
import QuizResults from './QuizResults'
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

  const quiz = [
    {
      idx: 1,
      title: 'Что для Вас более предпочтительно?',
      question1: 'Разбираться в глубинных проблемах и сложных случаях',
      value1: ['clinic', 'art', 'sand', 'psySomatic', 'geshtalt'],
      question2: 'Вдохновлять и мотивировать',
      value2: ['organization', 'art', 'coach'],
      question3: 'Работать с детско-родительскими отношениями',
      value3: ['childrenPsy', 'ktp', 'sand', 'psyAnalisys'],
      question4: 'Помогать в решении жизненных сложностей',
      value4: ['psyCons', 'art', 'ktp', 'shortTerm', 'psySomatic', 'geshtalt']
    },
    {
      idx: 2,
      title:
        'Вы спринтер (бегун на короткие дистанции) или сайер (бегун на длинные дистанции)?',
      question1: 'Спринтер',
      value1: ['organization', 'childrenPsy', 'psyCons', 'shortTerm'],
      question2: 'Стайер',
      value2: ['clinic', 'psyCons', 'psyAnalisys']
    }
  ]
  

  const handleChange = e => {
    setInputs(e.target.value)
  }

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
  let maxKey = '';
  const handleLastSlide = () => {
    console.log(result)
    setInputs('')
    setShowResult(true)
    let max = 0;

    Object.keys(result).forEach(key => {
      result[key] = result[key] + 1;
      if (result[key] > max) {
          max = result[key];
          maxKey = key;
      }
  });
  setCategory(maxKey)
  console.log('Элемент с наибольшим количеством баллов: ', maxKey)
  }

  if(showResult)
  return (
    <QuizResults result={category}/>
  )

  return (
    <section>
      <Wrapper>
        <Swiper
        onTouchEnd={(swiper) => console.log(swiper)}
        navigation={{
          prevEl: '.back',
          nextEl: '.quiz',
      }}
      swipeHandler='.quiz'
        >
        {quiz.map((el, i) => (
          <SwiperSlide virtualIndex={el.idx}  key={i}>
            <h3>{el.title}</h3>
            <br />
            <input
              type='radio'
              name='input'
              value={el.value1}
              onChange={value => handleChange(value)}
            />
            <label>{el.question1}</label>
            <br />
            <input
              type='radio'
              name='input'
              value={el.value2}
              onChange={value => handleChange(value)}
            />
            <label>{el.question2}</label>
            <br />
            <input
              type='radio'
              name='input'
              value={el?.value3}
              onChange={value => handleChange(value)}
            />
            <label>{el?.question3}</label>
            <br />
            <button
            onClick={handleAnswer}
            className='back'>BAACK</button>
            <button
            disabled={!inputs}
            // disabled={el.idx === quiz[quiz.length-1].idx}
            onClick={(el.idx === quiz[quiz.length-1].idx) ? handleLastSlide : handleAnswer} className='quiz'>Подтвердить</button>
          </SwiperSlide>
        ))}
        </Swiper>
      </Wrapper>
    </section>
  )
}
export default PsyTest
