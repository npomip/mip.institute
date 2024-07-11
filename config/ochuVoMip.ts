const ochuVoMip = {
    fullName:
      'Образовательное частное учреждение высшего образования «Московский институт психологии»',
    shortName: 'ОЧУ ВО «МИП»',
    head: 'Столяренко Владимир Витальевич',
    vice: 'Егупов Сергей Владимирович',
    inn: '9725110198',
    ogrn: '1237700006620',
    addresses: {
      default: {
        countryCode: 'RU',
        city: 'Москва',
        zip: '107078',
        street: {
          type: 'переулок',
          typeShort: 'пер.',
          name: 'Докучаев',
          door: '8'
        },
        room: '14',
        officeNum: '4 подъезд, 1 этаж'
      },
    },
    emails: {
      default: {
        href: 'mailto:info@mip.institute',
        val: 'info@mip.institute'
      },
    },
    phoneNumbers: {
      default: {
        city: 'Москва',
        href: 'tel:+7-499-110-86-32',
        val: '+7 (499) 110-86-32',
        contactType: 'Учебный отдел',
        areaServed: ['RU', 'KZ', 'UZ'],
        languages: ['Russian', 'Kazakh', 'Uzbek']
      },
    }
  }

export default ochuVoMip