import { TypeDataDocs } from '@/types/index'
import { routes } from '@/config/index'

const dataOchuVoMipAdditionalRight: TypeDataDocs = [
  {
    href: `${routes.front.ochuvomipEntrance}/pvi-obschestvoznanie.pdf`,
    val: 'ПВИ Обществознание'
  },
  {
    href: `${routes.front.ochuvomipEntrance}/pvi-osnovy-obschei-psihologii.pdf`,
    val: 'ПВИ Основы общей психологии'
  },
  {
    href: `${routes.front.ochuvomipEntrance}/pvi-osnovy-psihologii-razvitiia-i-vozrastnoi-psihologii.pdf`,
    val: 'ПВИ Основы психологии развития и возрастной психологии'
  },
]

export default dataOchuVoMipAdditionalRight