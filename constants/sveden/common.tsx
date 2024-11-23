import { routes } from '@/config/index'
import Link from 'next/link'

const commonMainTableHeader = ['Наименование', 'Данные']

const commonMainTableRows = [
  {
    itemprop: 'fullName',
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
    itemprop: 'shortName',
    cells: [
      {
        content: 'Сокращенное наименование образовательной организации'
      },
      { content: 'НАНО «МИП»' }
    ]
  },
  {
    itemprop: 'regDate',
    cells: [
      {
        content: 'Дата создания образовательной организации'
      },
      { content: '29.12.2020' }
    ]
  },
  {
    itemprop: 'address',
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
    itemprop: 'workTime',
    cells: [
      { content: 'Режим, график работы' },
      {
        content:
          'Понедельник - пятница с 10:00 до 19:00, суббота с 10:00 до 15:00'
      }
    ]
  },
  {
    itemprop: 'telephone',
    cells: [
      { content: 'Контактные телефоны' },
      { content: '+7 (499) 110-88-19' }
    ]
  },
  {
    itemprop: 'email',
    cells: [
      { content: 'Адреса электронной почты' },
      {
        content: <a href='mailto:info@mip.institute'>info@mip.institute</a>
      }
    ]
  },
  {
    itemprop: 'licenseDocLink',
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
    itemprop: 'accreditationDocLink',
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

const uchredHeader = [
  'Наименование учредителя',
  'Адрес местонахождения учредителя(ей)',
  'Контактные телефоны',
  'Адреса электронной почты',
  'Адрес сайта учредителя(ей) в сети «Интернет»'
]

const uchredRows = [
  {
    itemprop: 'uchredLaw',
    cells: [
      {
        itemprop: 'nameUchred',
        content:
          'Научная автономная некоммерческая организация «Московский институт психологии»'
      },
      {
        itemprop: 'addressUchred',
        content: 'г. Москва, набережная Дербеневская, дом 11'
      },
      {
        itemprop: 'telUchred',
        content: '+7 (499) 110-88-19'
      },

      {
        itemprop: 'mailUchred',
        content: <a href='mailto:info@mip.institute'>info@mip.institute</a>
      },
      {
        itemprop: 'websiteUchred',
        content: (
          <Link
            href='https://mip.institute/'
            target='_blank'
            rel='noopener noreferrer'>
            https://mip.institute/
          </Link>
        )
      }
    ]
  }
]

const platformHeader = [
  '№ п/п',
  'Адрес места осуществления образовательной деятельности '
]
const platformRows = [
  {
    itemprop: 'addressPlaceSet',
    cells: [
      {
        content: 1
      },
      { content: 'Не предусмотрено' }
    ]
  }
]

const practiceHeader = [
  '№ п/п',
  'Адрес места осуществления образовательной деятельности'
]
const practiceRows = [
  {
    itemprop: 'addressPlacePrac',
    cells: [
      {
        content: 1
      },
      { content: 'Проведение практики не осуществляется' }
    ]
  }
]

const podgHeader = [
  '№ п/п',
  'Адрес места осуществления образовательной деятельности'
]
const podgRows = [
  {
    itemprop: 'addressPlacePodg',
    cells: [
      {
        content: 1
      },
      { content: 'Практическая подготовка не осуществляется' }
    ]
  }
]

const giaHeader = [
  '№ п/п',
  'Адрес места осуществления образовательной деятельности'
]
const giaRows = [
  {
    itemprop: 'addressPlaceGia',
    cells: [
      {
        content: 1
      },
      {
        content:
          'Проведение государственной итоговой аттестации не осуществляется'
      }
    ]
  }
]

const dopHeader = [
  '№ п/п',
  'Адрес места осуществления образовательной деятельности'
]
const dopRows = [
  {
    itemprop: 'addressPlaceDop',
    cells: [
      {
        content: 1
      },
      {
        content: 'г. Москва, набережная Дербеневская, дом 11'
      }
    ]
  }
]

const profHeader = [
  '№ п/п',
  'Адрес места осуществления образовательной деятельности'
]
const profRows = [
  {
    itemprop: 'addressPlaceOppo',
    cells: [
      {
        content: 1
      },
      {
        content: 'Профессиональное обучение не осуществляется'
      }
    ]
  }
]

export {
  commonMainTableHeader,
  commonMainTableRows,
  uchredHeader,
  uchredRows,
  platformHeader,
  platformRows,
  practiceHeader,
  practiceRows,
  podgHeader,
  podgRows,
  giaHeader,
  giaRows,
  dopHeader,
  dopRows,
  profHeader,
  profRows
}
