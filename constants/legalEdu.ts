import {
  dataOchuVoMipAdditionalLeft,
  dataOchuVoMipAdditionalRight,
  dataOchuVoMipEntranceLeft,
  dataOchuVoMipEntranceRight,
  dataOchuVoMipCommonLeft,
  dataOchuVoMipCommonRight,
  dataOchuVoMipProgramLeft,
  dataOchuVoMipProgramRight,
  dataOchuVoMipProgram2Left,
  dataOchuVoMipProgram2Right,
  dataOchuVoMipHigherEduLeft,
  dataOchuVoMipHigherEduRight,
  dataOchuVoMipAddEduLeft,
  dataOchuVoMipAddEduRight,
  dataOchuVoMipOrderLeft
} from '@/data/index'

export const listAdditional = [
  {
    title: 'Нормативные документы',
    contentLeft: dataOchuVoMipAdditionalLeft,
    contentRight: dataOchuVoMipAdditionalRight
  }
]

export const listEntrance = [
  {
    title: 'Вступительные испытания',
    contentLeft: dataOchuVoMipEntranceLeft,
    contentRight: dataOchuVoMipEntranceRight
  }
]

export const listProgram = [
  {
    title: 'Сведения об образовательной программе 44.03.02',
    contentLeft: dataOchuVoMipProgramLeft,
    contentRight: dataOchuVoMipProgramRight
  }
]

export const listProgram2 = [
  {
    title: 'Сведения об образовательной программе 37.03.01',
    contentLeft: dataOchuVoMipProgram2Left,
    contentRight: dataOchuVoMipProgram2Right
  }
]

export const listOrder = [
  {
    title: 'Приказы о зачислении',
    contentLeft: dataOchuVoMipOrderLeft,
  }
]

export const listGeneral = [
  {
    title: 'Общие документы',
    contentLeft: dataOchuVoMipCommonLeft,
    contentRight: dataOchuVoMipCommonRight
  }
]

export const listHigherEducation = [
  {
    title: 'Высшее образование',
    contentLeft: dataOchuVoMipHigherEduLeft,
    contentRight: dataOchuVoMipHigherEduRight
  }
]

export const listAddEducation = [
  {
    title: 'Дополнительное профессиональное образование',
    contentLeft: dataOchuVoMipAddEduLeft,
    contentRight: dataOchuVoMipAddEduRight
  }
]