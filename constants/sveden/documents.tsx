import { routes } from '@/config/index'

const staticLinks = [
  {
    itemProp: 'ustavDocLink',
    href: `${routes.front.docsConstituent}/ustav-obrazovatelnoj-organizacii-nano-mip.pdf`,
    label: 'Устав образовательной организации НАНО МИП'
  },
  {
    itemProp: 'localActStud',
    href: `${routes.front.docsGeneral}/pravila-vnutrienniegho-uchiebnogho-rasporiadka-nano-mip.pdf`,
    label: 'Правила внутреннего учебного распорядка НАНО МИП'
  },
  {
    itemProp: 'localActOrder',
    href: `${routes.front.docsGeneral}/pravila-vnutrienniegho-trudovogho-rasporiadka-nano-mip.pdf`,
    label: 'Правила внутреннего трудового распорядка НАНО МИП'
  },
  {
    itemProp: 'localActCollec',
    href: '',
    label: 'Коллективный договор (при наличии)'
  },
  {
    itemProp: 'reportEduDocLink',
    href: '',
    label: 'Отчеты о результатах самообследования'
  },
  {
    itemProp: 'prescriptionDocLink',
    href: '',
    label:
      'Предписания органов, осуществляющих государственный контроль (надзор) в сфере образования, копии отчетов об исполнении предписаний'
  }
]

const links = [
  {
    href: `${routes.front.docsGeneral}/pravila-priiema-na-obuchieniie-nano-mip.pdf`,
    itemProp: 'priemDocLink',
    val: 'Правила приема на обучение НАНО МИП'
  },
  {
    href: '',
    itemProp: 'modeDocLink',
    val: 'Режим занятий обучающихся'
  },
  {
    href: `${routes.front.docsGeneral}/polozhenie-o-tekuschei-promezhutochnoi-i-itogovoi-attestacii-v-nano-mip.pdf`,
    itemProp: 'tekKontrolDocLink',
    val: 'Положение о текущей, промежуточной и итоговой аттестации слушателей по ДПП в НАНО МИП'
  },
  {
    href: `${routes.front.docsGeneral}/polozhenie-o-poriadke-otchisleniia-v-nano-mip.pdf`,
    itemProp: 'perevodDocLink',
    val: 'Положение о порядке отчисления обучающихся в НАНО МИП'
  },
  {
    href: `${routes.front.docsGeneral}/polozhenie-o-poriadke-vosstanovleniia-v-nano-mip.pdf`,
    itemProp: 'perevodDocLink',
    val: 'Положение о порядке восстановления в число слушателей, ранее обучавшихся в НАНО МИП'
  },
  {
    href: '',
    itemProp: 'vozDocLink',
    val: 'Порядок оформления возникновения, приостановления и прекращения отношений между образовательной организацией и обучающимися и (или) родителями (законными представителями) несовершеннолетних обучающихся'
  }
]

export { staticLinks, links }
