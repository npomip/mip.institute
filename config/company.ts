const company = {
  fullName:
    'Научная автономная некоммерческая организация «Московский институт психологии»',
  shortName: 'НАНО «МИП»',
  name: 'Московский Институт Психологии',
  tagline:
    'Освойте востребованную профессию психолога или повысьте квалификацию вместе с нами',
  addresses: [
    {
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
  ],
  emails: [
    {
      href: 'mailto:info@mip.institute',
      val: 'info@mip.institute'
    }
  ],
  phoneNumbers: [
    {
      href: 'tel:+7-499-110-86-32',
      val: '+7 (499) 110-86-32',
      contactType: 'Учебный отдел',
      areaServed: ['RU', 'KZ', 'UZ'],
      languages: ['Russian', 'Kazakh', 'Uzbek']
    }
  ]
}

export default company
