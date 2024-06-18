import { TypeDataDocs } from '@/types/index'
import { routes } from '@/config/index'

const dataOchuVoMipDocsGeneralRight: TypeDataDocs = [
  {
    href: `${routes.front.ochuvomipGeneral}/polozhenie-ob-organizacii-obr-deyatelnosti-dpp.pdf`,
    val: 'Положение об организации образовательной деятельности ДПП'
  },
  {
    href: `${routes.front.ochuvomipGeneral}/pravila-vnutrennego-trudovogo-rasporyadka.pdf`,
    val: 'Правила внутреннего трудового распорядка ОЧУ ВО МИП'
  },
  {
    href: `${routes.front.ochuvomipGeneral}/pravila-vnutrennego-rasporyadka.pdf`,
    val: 'Правила внутреннего распорядка для обучающихся'
  },
  {
    href: `${routes.front.ochuvomipGeneral}/pravila-obucheniya-dpp.pdf`,
    val: 'Правила обучения по ДПП'
  },
  {
    href: `${routes.front.ochuvomipGeneral}/pravila-priema-dpp.pdf`,
    val: 'Правила приема на обучение по ДПП'
  }
]

export default dataOchuVoMipDocsGeneralRight
