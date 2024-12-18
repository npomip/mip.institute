const managersHeader = [
  'ФИО',
  'Должность',
  'Контактные телефоны',
  'Адрес электронной почты'
]

const managersRows = [
  {
    cells: [
      { content: 'Багаев Евгений Александрович', itemProp: 'fio' },
      { content: 'Ректор', itemProp: 'post' },
      { content: '+7 (499) 110-88-19', itemProp: 'telephone' },
      { content: 'info@mip.institute', itemProp: 'email' }
    ]
  },
  {
    cells: [
      { content: 'Стибунов Алексей Васильевич', itemProp: 'fio' },
      { content: 'Первый проректор', itemProp: 'post' },
      { content: '+7 (499) 110-88-19', itemProp: 'telephone' },
      { content: 'info@mip.institute', itemProp: 'email' }
    ]
  }
]

const zamsHeader = [
  'ФИО',
  'Должность',
  'Контактные телефоны',
  'Адрес электронной почты'
]
const zamsRows = [
  {
    cells: [
      { content: 'Отсутствует', itemProp: 'fio' },
      { content: 'Отсутствует', itemProp: 'post' },
      { content: 'Отсутствует', itemProp: 'telephone' },
      { content: 'Отсутствует', itemProp: 'email' }
    ]
  }
]

const filialsHeader = [
  'ФИО',
  'Должность',
  'Контактные телефоны',
  'Адрес электронной почты'
]
const filialsRows = [
  {
    cells: [
      { content: 'Отсутствует', itemProp: 'fio' },
      { content: 'Отсутствует', itemProp: 'post' },
      { content: 'Отсутствует', itemProp: 'telephone' },
      { content: 'Отсутствует', itemProp: 'email' }
    ]
  }
]

export {
  managersHeader,
  managersRows,
  zamsHeader,
  zamsRows,
  filialsHeader,
  filialsRows
}
