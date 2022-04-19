const company = {
  fullName:
    'Научная автономная некоммерческая организация «Московский институт психологии»',
  shortName: 'НАНО «МИП»',
  name: 'Московский Институт Психологии',
  tagline:
    'Освойте востребованную профессию психолога или повысьте квалификацию вместе с нами',
  addresses: {
    default: {
      countryCode: 'RU',
      city: 'Москва',
      zip: '115114',
      street: {
        type: 'набережная',
        typeShort: 'наб.',
        name: 'Дербеневская',
        door: '11',
        room: '14'
      }
    }
  },
  emails: {
    default: {
      href: 'mailto:info@mip.institute',
      val: 'info@mip.institute'
    }
  },
  phoneNumbers: {
    default: {
      href: 'tel:+7-499-110-86-32',
      val: '+7 (499) 110-86-32',
      contactType: 'Учебный отдел',
      areaServed: ['RU', 'KZ', 'UZ'],
      languages: ['Russian', 'Kazakh', 'Uzbek']
    },
    defaultAlt: {
      href: 'tel:+7-800-600-29-03',
      val: '+7 (800) 600-29-03',
      contactType: 'Учебный отдел',
      areaServed: ['RU', 'KZ', 'UZ'],
      languages: ['Russian', 'Kazakh', 'Uzbek']
    },
    kz: {
      href: 'tel:+7-771-766-22-24',
      val: '+7 (771) 766-22-24',
      contactType: 'Учебный отдел',
      areaServed: ['RU', 'KZ', 'UZ'],
      languages: ['Russian', 'Kazakh', 'Uzbek']
    },
    kzAlt: {
      href: 'tel:+7-727-311-15-00',
      val: '+7 (727) 311-15-00',
      contactType: 'Учебный отдел',
      areaServed: ['RU', 'KZ', 'UZ'],
      languages: ['Russian', 'Kazakh', 'Uzbek']
    }
  }
}

export default company
