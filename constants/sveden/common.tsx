import { routes } from '@/config/index'

const commonMainTableHeader = ['Наименование', 'Данные']

const commonMainTableRows = [
  {
    itemProp: 'fullName',
    cells: [
      {
        content: 'Полное наименование образовательной организации'
      },
      {
        content:
          'Научная автономная некоммерческая организация «Московский институт психологии»'
      }
    ]
  },
  {
    itemProp: 'shortName',
    cells: [
      {
        content: 'Сокращенное наименование образовательной организации'
      },
      { content: 'НАНО «МИП»' }
    ]
  },
  {
    itemProp: 'regDate',
    cells: [
      {
        content: 'Дата создания образовательной организации'
      },
      { content: '29.12.2020' }
    ]
  },
  {
    itemProp: 'address',
    cells: [
      {
        content: 'Адрес места нахождения образовательной организации'
      },
      {
        content: '115114, город Москва, наб. Дербеневская, дом 11, помещение 13'
      }
    ]
  },
  {
    itemProp: 'workTime',
    cells: [
      { content: 'Режим, график работы' },
      {
        content:
          'Понедельник - пятница с 10:00 до 19:00, суббота с 10:00 до 15:00'
      }
    ]
  },
  {
    itemProp: 'telephone',
    cells: [
      { content: 'Контактные телефоны' },
      { content: '+7 (499) 110-88-19' }
    ]
  },
  {
    itemProp: 'email',
    cells: [
      { content: 'Адреса электронной почты' },
      {
        content: <a href='mailto:info@mip.institute'>info@mip.institute</a>
      }
    ]
  },
  {
    itemProp: 'licenseDocLink',
    cells: [
      {
        content:
          'Информация о лицензии на осуществление образовательной деятельности'
      },
      {
        content: (
          <a
            href={`${routes.front.docsConstituent}/vypiska-licenzii-nano-mip-041363.pdf`}
            target='_blank'
            rel='noopener noreferrer'>
            № Л035-01298-77/00180046
          </a>
        )
      }
    ]
  },
  {
    itemProp: 'accreditationDocLink',
    cells: [
      {
        content:
          'Информация о наличии государственной аккредитации образовательной деятельности'
      },
      {
        content: 'Отсутствует'
      }
    ]
  }
]

export { commonMainTableHeader, commonMainTableRows }
