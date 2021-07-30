import stls from '@/styles/components/program/ProgramInfo.module.sass'

const ProgramInfo = () => {
  const vals = [
    { key: 'Зачисление', val: 'каждый месяц' },
    { key: 'Количество часов', val: '1024 ч' },
    { key: 'Форма обучения', val: 'очно-заочная' },
    { key: 'Срок обучения', val: '3 года 6 месяцев' }
  ]

  return (
    <div className={stls.container}>
      {vals.map(({ key, val }, idx) => (
        <div key={key + val + idx} className={stls.group}>
          <p className={stls.key}>{key}</p>
          <p className={stls.val}>{val}</p>
        </div>
      ))}
    </div>
  )
}

export default ProgramInfo
