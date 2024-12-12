const employeesHeader = [
  'ФИО',
  'Должность',
  'Перечень преподаваемых дисциплин',
  'Уровень (уровни) профессионального образования, квалификация',
  'Ученая степень (при наличии)',
  'Ученое звание (при наличии)',
  'Сведения о повышении квалификации (за последние 3 года)',
  'Сведения о профессиональной переподготовке (при наличии)',
  'Сведения о продолжительности опыта (лет) работы а профессиональной сфере',
  'Наименования образовательных программ, в реализации которых участвует педагогический работник'
]

const employeesRows = [
  {
    cells: [
      { content: '', itemProp: 'fio' },
      { content: '', itemProp: 'post' },
      { content: '', itemProp: 'teachingDiscipline' },
      { content: '', itemProp: 'teachingLevel' },
      { content: '', itemProp: 'degree' },
      { content: '', itemProp: 'academStat' },
      { content: '', itemProp: 'qualification' },
      { content: '', itemProp: 'profDevelopment' },
      { content: '', itemProp: 'specExperience' },
      { content: '', itemProp: 'teachingOp' }
    ]
  }
]

export { employeesHeader, employeesRows }
