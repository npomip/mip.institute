const vacantLevelsHeader = [
  'Код, шифр группы научных специальностей',
  'Наименование профессии, специальности, направления подготовки, наименование группы научных специальностей',
  'Уровень образования',
  'Образовательная программа, направленность, профиль, шифр и наименование научной специальности',
  'Курс',
  'Формы обучения',
  'Количество вакантных мест для приема (перевода) на места, финансируемые за счет бюджетных ассигнований федерального бюджета',
  'Количество вакантных мест для приема (перевода) на места, финансируемые за счет бюджетов субъектов Российской Федерации',
  'Количество вакантных мест для приема (перевода) на места, финансируемые за счет местных бюджетов',
  'Количество вакантных мест для приема (перевода) за счёт средств физических и (или) юридических лиц'
]

const vacantLevelsRows = [
  {
    cells: [
      { content: '1' },
      { content: '2' },
      { content: '3' },
      { content: '4' },
      { content: '5' },
      { content: '6' },
      { content: '7' },
      { content: '8' },
      { content: '9' },
      { content: '10' }
    ]
  },
  {
    cells: [
      { content: 'Отсутствует', itemProp: 'eduCode' },
      { content: 'Отсутствует', itemProp: 'eduName' },
      { content: 'Отсутствует', itemProp: 'eduLevel' },
      { content: 'Отсутствует', itemProp: 'eduProf' },
      { content: 'Отсутствует', itemProp: 'eduCourse' },
      { content: 'Отсутствует', itemProp: 'eduForm' },
      { content: 'Отсутствует', itemProp: 'numberBFVacant' },
      { content: 'Отсутствует', itemProp: 'numberBRVacant' },
      { content: 'Отсутствует', itemProp: 'numberBMVacant' },
      { content: 'Отсутствует', itemProp: 'numberPVacant' }
    ]
  }
]

export { vacantLevelsHeader, vacantLevelsRows }
