const budgetLevelsHeader = [
  'Финансовый год',
  'за счет бюджетных ассигнований федерального бюджета (тыс. руб)',
  'за счет бюджетов субъектов Российской Федерации (тыс. руб)',
  'за счет местных бюджетов (тыс. руб)',
  'по договорам об оказании платных образовательных услуг (тыс. руб)'
]

const budgetLevelsRows = [
  {
    cells: [
      { content: '2022' },
      { content: '0', itemProp: 'finBFVolume' },
      { content: '0', itemProp: 'finBRVolume' },
      { content: '0', itemProp: 'finBMVolume' },
      { content: '0', itemProp: 'finPVolume' }
    ]
  },
  {
    cells: [
      { content: '2023' },
      { content: '0', itemProp: 'finBFVolume' },
      { content: '0', itemProp: 'finBRVolume' },
      { content: '0', itemProp: 'finBMVolume' },
      { content: '0', itemProp: 'finPVolume' }
    ]
  },
  {
    cells: [
      { content: '2024' },
      { content: ' ', itemProp: 'finBFVolume' },
      { content: ' ', itemProp: 'finBRVolume' },
      { content: ' ', itemProp: 'finBMVolume' },
      { content: ' ', itemProp: 'finPVolume' }
    ]
  }
]

const budgetWorkHeader = [
  'Год',
  'Поступившие финансовые и материальные средства',
  'Расходованные финансовые и материальные средства'
]

const budgetWorkRows = [
  {
    cells: [
      { content: '2022', itemProp: 'finYear' },
      { content: 'Отчет с ЭЦП', itemProp: 'finPost' },
      { content: 'Отчет с ЭЦП', itemProp: 'finRas' }
    ]
  },
  {
    cells: [
      { content: '2023', itemProp: 'finYear' },
      { content: 'Отчет с ЭЦП', itemProp: 'finPost' },
      { content: 'Отчет с ЭЦП', itemProp: 'finRas' }
    ]
  }
]

export {
  budgetLevelsHeader,
  budgetLevelsRows,
  budgetWorkHeader,
  budgetWorkRows
}
