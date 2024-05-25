import stls from '@/styles/components/program/ProgramSelect.module.sass'

const ProgramSelect = () => {
  const options = [
    'Сортировать по умолчанию',
    'По возрастанию цены',
    'По убыванию цены',
    'По популярности',
    'По новизне'
  ]
  return (
    <select className={stls.select}>
      {options.map((option, i) => (
        <option
          value='value1'
          defaultValue={options[0]}
          key={option}
          className={stls.option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default ProgramSelect
