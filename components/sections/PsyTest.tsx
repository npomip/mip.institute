import stls from '@/styles/components/sections/PsyTest.module.sass'
import { useState } from 'react';
import Wrapper from '../layout/Wrapper'

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
  });
  const [inputs, setInputs] = useState([]);

  console.log(result)

  const handleChange = (e) => {
    setInputs(e.target.value);
  };

  const handleAnswer = (categories) => {
    console.log(categories)
    categories.forEach(category => {
      setResult(prevResult => ({
        ...prevResult,
        [category]: prevResult[category] + 1
      }));
    });
  };

  console.log(inputs)

  return (
    <section >
      <Wrapper>
        <button onClick={() => handleAnswer(['clinic', 'organization'])}>Вариант ответа 1</button>
        <button onClick={() => handleAnswer(['clinic'])}>Вариант ответа 2</button>
        <p className={stls.question}>Что для Вас более предпочтительно?</p>
        <div>
      <input
        type="radio"
        name="input"
        value={['clinic', 'art', 'sand', 'psySomatic', 'geshtalt']}
        onChange={handleChange}
      />
      <label>Разбираться в глубинных проблемах и сложных случаях</label>
      <br />
      <input
        type="radio"
        name="input"
        value={['organization', 'art', 'coach']}
        onChange={handleChange}
      />
      
      <label>Вдохновлять и мотивировать</label>
      <br />
      <input
        type="radio"
        name="input"
        value={['childrenPsy', 'ktp', 'sand', 'psyAnalisys']}
        onChange={handleChange}
      />
      <label>Работать с детско-родительскими отношениями</label>
      <br />
      <input
        type="radio"
        name="input"
        value={['psyCons', 'art', 'ktp', 'shortTerm', 'psySomatic', 'geshtalt']}
        onChange={e => handleChange(e)}
      />
      <label>Помогать в решении жизненных сложностей</label>
    </div>
    <button onClick={() => handleAnswer(result)}>Подтвердить</button>
      </Wrapper>
    </section>
  );
}
export default PsyTest
