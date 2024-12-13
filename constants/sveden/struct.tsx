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
    itemProp: 'structOrgUprav',
    cells: [
      { content: 'Ректорат', itemProp: 'name', rowspan: 2 },
      { content: 'Багаев Евгений Александрович', itemProp: 'fio' },
      { content: 'Ректор', itemProp: 'post' },
      {
        content: '115114, Москва, Дербеневская набережная, дом 11',
        itemProp: 'addressStr'
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
        itemProp: 'site'
      },
      {
        content: <a href='mailto:info@mip.institute'>info@mip.institute</a>,
        itemProp: 'email'
      },
      { content: 'Отсутствует', itemProp: 'divisionClauseDocLink' }
    ]
  },
  {
    itemProp: 'structOrgUprav',
    cells: [
      { content: 'Стибунов Алексей Васильевич', itemProp: 'fio' },
      { content: 'Первый проректор', itemProp: 'post' },
      {
        content: '115114, Москва, Дербеневская набережная, дом 11',
        itemProp: 'addressStr'
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
        itemProp: 'site'
      },
      {
        content: <a href='mailto:info@mip.institute'>info@mip.institute</a>,
        itemProp: 'email'
      },
      { content: 'Отсутствует', itemProp: 'divisionClauseDocLink' }
    ]
  },
  // Ученый совет
  {
    itemProp: 'structOrgUprav',
    cells: [
      { content: 'Ученый совет', itemProp: 'name' },
      { content: '', itemProp: 'fio' },
      { content: '', itemProp: 'post' },
      {
        content: '115114, Москва, Дербеневская набережная, дом 11',
        itemProp: 'addressStr'
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
        itemProp: 'site'
      },
      {
        content: <a href='mailto:info@mip.institute'>info@mip.institute</a>,
        itemProp: 'email'
      },
      { content: 'Отсутствует', itemProp: 'divisionClauseDocLink' }
    ]
  },
  // Полная строка: Административные подразделения
  {
    isFullRow: true,
    cells: [{ content: 'Административные подразделения' }]
  },
  // Учебный отдел
  {
    itemProp: 'structAdmin',
    cells: [
      { content: 'Учебный отдел', itemProp: 'name' },
      { content: 'Губанова Ольга Викторовна', itemProp: 'fio' },
      { content: 'Начальник отдела', itemProp: 'post' },
      {
        content: '115114, Москва, Дербеневская набережная, дом 11',
        itemProp: 'addressStr'
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
        itemProp: 'site'
      },
      {
        content: <a href='mailto:info@mip.institute'>info@mip.institute</a>,
        itemProp: 'email'
      },
      { content: 'Отсутствует', itemProp: 'divisionClauseDocLink' }
    ]
  },
  // Отдел маркетинга
  {
    itemProp: 'structAdmin',
    cells: [
      { content: 'Отдел маркетинга', itemProp: 'name' },
      { content: '', itemProp: 'fio' },
      { content: '', itemProp: 'post' },
      {
        content: '115114, Москва, Дербеневская набережная, дом 11',
        itemProp: 'addressStr'
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
        itemProp: 'site'
      },
      {
        content: <a href='mailto:info@mip.institute'>info@mip.institute</a>,
        itemProp: 'email'
      },
      { content: 'Отсутствует', itemProp: 'divisionClauseDocLink' }
    ]
  },
  // Отдел мониторинга качества образования
  {
    itemProp: 'structAdmin',
    cells: [
      { content: 'Отдел мониторинга качества образования', itemProp: 'name' },
      { content: 'Попова Маргарита Геннадьевна', itemProp: 'fio' },
      { content: 'Руководитель отдела', itemProp: 'post' },
      {
        content: '115114, Москва, Дербеневская набережная, дом 11',
        itemProp: 'addressStr'
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
        itemProp: 'site'
      },
      {
        content: <a href='mailto:info@mip.institute'>info@mip.institute</a>,
        itemProp: 'email'
      },
      { content: 'Отсутствует', itemProp: 'divisionClauseDocLink' }
    ]
  },
  // Отдел по внешним коммуникациям
  {
    itemProp: 'structAdmin',
    cells: [
      { content: 'Отдел по внешним коммуникациям', itemProp: 'name' },
      { content: 'Графская Анастасия Викторовна', itemProp: 'fio' },
      { content: 'Руководитель отдела', itemProp: 'post' },
      {
        content: '115114, Москва, Дербеневская набережная, дом 11',
        itemProp: 'addressStr'
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
        itemProp: 'site'
      },
      {
        content: <a href='mailto:info@mip.institute'>info@mip.institute</a>,
        itemProp: 'email'
      },
      { content: 'Отсутствует', itemProp: 'divisionClauseDocLink' }
    ]
  },
  // Отдел практики и карьеры
  {
    itemProp: 'structAdmin',
    cells: [
      { content: 'Отдел практики и карьеры', itemProp: 'name' },
      { content: '', itemProp: 'fio' },
      { content: '', itemProp: 'post' },
      {
        content: '115114, Москва, Дербеневская набережная, дом 11',
        itemProp: 'addressStr'
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
        itemProp: 'site'
      },
      {
        content: <a href='mailto:info@mip.institute'>info@mip.institute</a>,
        itemProp: 'email'
      },
      { content: 'Отсутствует', itemProp: 'divisionClauseDocLink' }
    ]
  },
  // Отдел продаж
  {
    itemProp: 'structAdmin',
    cells: [
      { content: 'Отдел продаж', itemProp: 'name' },
      { content: '', itemProp: 'fio' },
      { content: '', itemProp: 'post' },
      {
        content: '115114, Москва, Дербеневская набережная, дом 11',
        itemProp: 'addressStr'
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
        itemProp: 'site'
      },
      {
        content: <a href='mailto:info@mip.institute'>info@mip.institute</a>,
        itemProp: 'email'
      },
      { content: 'Отсутствует', itemProp: 'divisionClauseDocLink' }
    ]
  },
  // Кафедра
  {
    itemProp: 'structAdmin',
    cells: [
      { content: 'Кафедра', itemProp: 'name' },
      { content: '', itemProp: 'fio' },
      { content: '', itemProp: 'post' },
      { content: '', itemProp: 'addressStr' },
      { content: '', itemProp: 'site' },
      { content: '', itemProp: 'email' },
      { content: '', itemProp: 'divisionClauseDocLink' }
    ]
  },
  // Приемная комиссия
  {
    itemProp: 'structAdmin',
    cells: [
      { content: 'Приемная комиссия', itemProp: 'name' },
      { content: '', itemProp: 'fio' },
      { content: '', itemProp: 'post' },
      { content: '', itemProp: 'addressStr' },
      { content: '', itemProp: 'site' },
      { content: '', itemProp: 'email' },
      { content: '', itemProp: 'divisionClauseDocLink' }
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
    itemProp: 'filInfo',
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
    itemProp: 'repInfo',
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
