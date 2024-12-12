const interLevelsHeader = [
  '№',
  'Государство',
  'Наименование организации',
  'Реквизиты договора(наименование, дата, номер, срок действия)'
]

const interLevelsRows = [
  {
    cells: [
      { content: '1' },
      { content: 'Отсутствует', itemProp: 'stateName' },
      {
        content:
          'В настоящее время не заключены и не планируются к заключению договора с иностранными организациями по вопросам образования и науки',
        itemProp: 'orgName'
      },
      { content: '-', itemProp: 'dogReg' }
    ]
  }
]

export { interLevelsHeader, interLevelsRows }
