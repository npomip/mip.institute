const educationStandartsHeader = [
  '1',
  '2',
  '3',
]

const educationStandartsRows = [
  {
    cells: [
      { content: '1'},
      { content: 'Информация о применяемых федеральных государственных образовательных стандартах с размещением их копий' },
      { content: 'Не применяется', itemProp: 'eduFedDoc' },
    ],
  },
  {
    cells: [
      { content: '2'},
      { content: 'Информация об утвержденных образовательных стандартах, с размещением их в форме электронного документа, подписанного электронной подписью' },
      { content: 'Не применяется', itemProp: 'eduStandartDoc' },
    ],
  },
  {
    cells: [
      { content: '3'},
      { content: 'Информация о применяемых федеральных государственных требованиях с размещением их копий' },
      { content: 'Не применяется', itemProp: 'eduFedTreb' },
    ],
  },
  {
    cells: [
      { content: '4'},
      { content: 'Информация о самостоятельно устанавливаемых требованиях, с размещением их в форме электронного документа, подписанного электронной подписью' },
      { content: 'Не применяется', itemProp: 'eduStandartTreb' },
    ],
  },
]

export {
  educationStandartsHeader,
  educationStandartsRows
  
}