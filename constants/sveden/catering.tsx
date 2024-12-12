const mealsHeader = [
  'Наименование объекта',
  'Адрес места нахождения',
  'Площадь, м²',
  'Количество мест',
  'Приспособленность для использования инвалидами и лицами с ограниченными возможностями здоровья'
]

const mealsRows = [
  {
    cells: [
      { content: 'Отсутствует', itemProp: 'objName' },
      { content: 'Отсутствует', itemProp: 'objAddress' },
      { content: 'Отсутствует', itemProp: 'objSq' },
      { content: 'Отсутствует', itemProp: 'objCnt' },
      { content: 'Отсутствует', itemProp: 'objOvz' }
    ]
  }
]

const healthHeader = [
  'Наименование объекта',
  'Адрес места нахождения',
  'Площадь, м²',
  'Количество мест',
  'Приспособленность для использования инвалидами и лицами с ограниченными возможностями здоровья'
]

const healthRows = [
  {
    cells: [
      { content: 'Отсутствует', itemProp: 'objName' },
      { content: 'Отсутствует', itemProp: 'objAddress' },
      { content: 'Отсутствует', itemProp: 'objSq' },
      { content: 'Отсутствует', itemProp: 'objCnt' },
      { content: 'Отсутствует', itemProp: 'objOvz' }
    ]
  }
]

export { healthRows, healthHeader, mealsRows, mealsHeader }
