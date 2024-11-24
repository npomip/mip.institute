const educationLevelsHeader = [
  'Код,шифр',
  'Наименование профессии, специальности, направления подготовки, научной специальности',
  'Образовательная программа, направленность, профиль, шифр и наименование научной специальности',
  'Уровень образования',
  'Формы обучения',
  'Нормативный срок обучения',
  'Учебные предметы, курсы, дисциплины (модули), предусмотренные соответствующей образовательной программой',
  'Практики, предусмотренные соответствующей образовательной программой'
]

const educationLevelsRows = [
  {
    cells: [
      { content: 'Отсутствует', itemProp: 'eduCode»' },
      { content: 'Отсутствует', itemProp: 'eduName' },
      { content: 'Отсутствует', itemProp: 'eduProf' },
      { content: 'Отсутствует', itemProp: 'eduLevel' },
      { content: 'Отсутствует', itemProp: 'eduForm' },
      { content: 'Отсутствует', itemProp: 'learningTerm' },
      { content: 'Отсутствует', itemProp: 'eduPred' },
      { content: 'Отсутствует', itemProp: 'eduPrac' },
    ]
  },
]

const educationInfoHeader = [
  'Код, шифр',
  'Наименование профессии, специальности, направления подготовки, научной специальности',
  'Образовательная программа, направленность, профиль, шифр и наименование научной специальности',
  'Уровень образования',
  'Образовательная программа, направленность, профиль, шифр и наименование научной специальности',
  'Реализуемые формы обучения',
  'Ссылка на описание образовательной программы с приложением ее копии',
  'Ссылка на учебный план',
  'Ссылка на календарный учебный график',
  'Ссылка на рабочие программы практик, предусмотренных соответствующей образовательной программой',
  'Ссылка на методические и иные документы, разработанные ОО для обеспечения образовательного процесса, а также рабочие программы воспитания и календарные планы воспитательной работы, включаемых в ООП'
]

const educationInfoRows = [
  {
    cells: [
      { content: '', itemProp: 'eduCode»' },
      { content: '', itemProp: 'eduName' },
      { content: '', itemProp: 'eduLevel' },
      { content: '', itemProp: 'eduProf' },
      { content: '', itemProp: 'eduForm' },
      { content: '', itemProp: 'opMain' },
      { content: '', itemProp: 'educationPlan' },
      { content: '', itemProp: 'educationRpd' },
      { content: '', itemProp: 'educationShedule' },
      { content: '', itemProp: 'eduPr' },
      { content: '', itemProp: 'methodology' },
    ]
  },
  {
    isFullRow: true,
    cells: [{ content: 'Образовательные программы среднего профессионального и высшего образования отсутствуют.' }]
  }
]


const educationScienceHeader = [
'Код, шифр',
'Наименование специальности, направления подготовки, наименование группы научных специальностей',
'Перечень научных направлений, в рамках которых ведется научная (научно- исследовательская) деятельность',
'Образовательная программа, направленность, профиль, шифр и наименование научной специальности',
"Уровень образования",
"Название научного направления/научной школы",
"Результаты научной (научно- исследовательской) деятельности",
"Сведения о научно- исследовательской базе для осуществления научной (научно- исследовательской) деятельности"
]

const educationScienceRows = [
  {
    cells: [
      { content: '', itemProp: 'eduCode»' },
      { content: '', itemProp: 'eduName' },
      { content: '', itemProp: 'perechenNir' },
      { content: '', itemProp: 'eduProf' },
      { content: '', itemProp: 'eduLevel' },
      { content: '', itemProp: 'napravNir' },
      { content: '', itemProp: 'resultNir' },
      { content: '', itemProp: 'baseNir' },
    ]
  },
  {
    isFullRow: true,
    cells: [{ content: 'Отсутствует' }]
  }
]

const educationWorkHeader = [
  "Код, шифр",
  "Наименование профессии, специальности, направления подготовки наименование группы научных специальностей",
  "Образовательная программа, направленность, профиль, шифр и наименование научной специальности",
  "Количество выпускников",
  "Количество трудоустроенных выпускников"
]

const educationWorkRows = [
  {
    cells: [
      { content: '', itemProp: 'eduCode»' },
      { content: '', itemProp: 'eduName' },
      { content: '', itemProp: 'eduProf' },
      { content: '', itemProp: 'v1' },
      { content: '', itemProp: 't1' },
    ]
  },
  {
    isFullRow: true,
    cells: [{ content: 'Отсутствует / не применимо' }]
  }
]

export {
  educationLevelsHeader,
  educationLevelsRows,
  educationInfoHeader,
  educationInfoRows,
  educationScienceHeader,
  educationScienceRows,
  educationWorkHeader,
  educationWorkRows
  
}
