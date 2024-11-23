import Link from 'next/link'

const structOrgUpravHeader = [
  'Наименование органа управления / структурного подразделения',
  'ФИО руководителя структурного подразделения',
  'Должность руководителя структурного подразделения',
  'Адрес местонахождения структурного подразделения',
  'Адрес официального сайта структурного подразделения',
  'Адреса электронной почты структурного подразделения',
  'Положение об органе управления / о структурном подразделении'
]

const structOrgUpravRows = [
  // Полная строка: Органы управления образовательной организацией
  {
    isFullRow: true,
    cells: [{ content: 'Органы управления образовательной организацией' }]
  },
  // Ректорат
  {
    itemprop: 'structOrgUprav',
    cells: [
      { content: 'Ректорат', itemprop: 'name' },
      { content: 'Багаев Евгений Александрович', itemprop: 'fio' },
      { content: 'Ректор', itemprop: 'post' },
      {
        content: '115114, Москва, Дербеневская набережная, дом 11',
        itemprop: 'addressStr'
      },
      {
        content: (
          <Link
            href='https://mip.institute/'
            target='_blank'
            rel='noopener noreferrer'>
            https://mip.institute/
          </Link>
        ),
        itemprop: 'site'
      },
      {
        content: <a href='mailto:info@mip.institute'>info@mip.institute</a>,
        itemprop: 'email'
      },
      { content: 'Отсутствует', itemprop: 'divisionClauseDocLink' }
    ]
  },
  // Ученый совет
  {
    itemprop: 'structOrgUprav',
    cells: [
      { content: 'Ученый совет', itemprop: 'name' },
      { content: '', itemprop: 'fio' },
      { content: '', itemprop: 'post' },
      {
        content: '115114, Москва, Дербеневская набережная, дом 11',
        itemprop: 'addressStr'
      },
      {
        content: (
          <Link
            href='https://mip.institute/'
            target='_blank'
            rel='noopener noreferrer'>
            https://mip.institute/
          </Link>
        ),
        itemprop: 'site'
      },
      {
        content: <a href='mailto:info@mip.institute'>info@mip.institute</a>,
        itemprop: 'email'
      },
      { content: 'Отсутствует', itemprop: 'divisionClauseDocLink' }
    ]
  },
  // Полная строка: Административные подразделения
  {
    isFullRow: true,
    cells: [{ content: 'Административные подразделения' }]
  },
  // Учебный отдел
  {
    itemprop: 'structAdmin',
    cells: [
      { content: 'Учебный отдел', itemprop: 'name' },
      { content: '', itemprop: 'fio' },
      { content: '', itemprop: 'post' },
      { content: '', itemprop: 'addressStr' },
      { content: '', itemprop: 'site' },
      { content: '', itemprop: 'email' },
      { content: '', itemprop: 'divisionClauseDocLink' }
    ]
  },
  // Кафедра
  {
    itemprop: 'structAdmin',
    cells: [
      { content: 'Кафедра', itemprop: 'name' },
      { content: '', itemprop: 'fio' },
      { content: '', itemprop: 'post' },
      { content: '', itemprop: 'addressStr' },
      { content: '', itemprop: 'site' },
      { content: '', itemprop: 'email' },
      { content: '', itemprop: 'divisionClauseDocLink' }
    ]
  },
  // Приемная комиссия
  {
    itemprop: 'structAdmin',
    cells: [
      { content: 'Приемная комиссия', itemprop: 'name' },
      { content: '', itemprop: 'fio' },
      { content: '', itemprop: 'post' },
      { content: '', itemprop: 'addressStr' },
      { content: '', itemprop: 'site' },
      { content: '', itemprop: 'email' },
      { content: '', itemprop: 'divisionClauseDocLink' }
    ]
  }
]

const filInfoHeaders = [
  '№ п/п',
  'Наименование филиала',
  'ФИО руководителя',
  'Должность руководителя',
  'Адрес места нахождения',
  'Электронная почта',
  'Адрес официального сайта или страницы филиала в сети «Интернет» (при наличии)',
  'Положение о филиале'
]

const filInfoRows = [
  {
    isFullRow: true,
    itemprop: 'filInfo',
    cells: [{ content: 'Филиалы отсутствуют' }]
  }
]

const repInfoHeaders = [
  '№ п/п',
  'Наименование представительства',
  'ФИО руководителя',
  'Должность руководителя',
  'Адрес места нахождения',
  'Электронная почта',
  'Адрес официального сайта или страницы представительства в сети «Интернет» (при наличии)',
  'Положение о представительстве'
]

const repInfoRows = [
  {
    isFullRow: true,
    itemprop: 'repInfo',
    cells: [{ content: 'Представительства отсутствуют' }]
  }
]

export {
  structOrgUpravHeader,
  structOrgUpravRows,
  filInfoHeaders,
  filInfoRows,
  repInfoHeaders,
  repInfoRows
}
