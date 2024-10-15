import stls from '@/styles/components/sections/LegalInfo.module.sass'
import Wrapper from '@/ui/Wrapper'
import { company, ochuVoMip } from '@/config/index'

type Props = {
  isOchuVoMip?: boolean
}

const LegalInfo = ({ isOchuVoMip }: Props) => {
  const listLeft = [
    {
      title: 'Полное наименование организации:',
      content: <>{isOchuVoMip ? ochuVoMip?.fullName : company.fullName}</>
    },
    {
      title: 'Сокращенное наименование образовательной организации:',
      content: <>{isOchuVoMip ? ochuVoMip?.shortName : company.shortName}</>
    },
    {
      title: 'Ректор',
      content: <>{isOchuVoMip ? ochuVoMip?.head : company.head}</>
    },
    {
      title: 'Исполнительный директор',
      content: <>{ochuVoMip?.vice}</>
    },
    {
      title: 'Информация о месте нахождения образовательной организации:',
      content: (
        <>
          Фактический адрес:{' '}
          {isOchuVoMip
            ? ochuVoMip?.addresses.default.zip
            : company.addresses.default.zip}
          , г. {company.addresses.default.city}, <br />{' '}
          {`${company.addresses.default.street.name} ${company.addresses.default.street.type}, д.${company.addresses.default.street.door}`}
        </>
      )
    },
    {
      title: 'ИНН организации:',
      content: <>{isOchuVoMip ? ochuVoMip?.inn : company.inn}</>
    }
  ]
  const listRight = [
    {
      title:
        'Информация о режиме и графике работы образовательной организации:',
      content: `ПН-ПТ с ${isOchuVoMip ? '09' : '10'}:00 до 19:00 (UTC/GTM + 3ч)`
    },
    {
      title:
        'Информация о контактных телефонах образовательной организации, об адресах электронной почты образовательной организации:',
      content: (
        <>
          Контактный телефон: {company.phoneNumbers.default.val} <br /> Адрес
          электронной почты: {company.emails.default.val}
        </>
      )
    },
    {
      title:
        'Информация о местах осуществления образовательной деятельности, в том числе не указанных в приложении к лицензии (реестре лицензий) на осуществление образовательной деятельности в соответствии с частью 4 статьи 91 Федерального закона от 29.12.2012 №273-ФЗ "Об образовании в Российской Федерации":',
      content: `Адрес: ${
        isOchuVoMip ? '107078' : '115419'
      }, Москва, Докучаев переулок, 8`
    },
    {
      title: 'ОГРН организации:',
      content: <>{isOchuVoMip ? ochuVoMip?.ogrn : company.ogrn}</>
    }
  ]
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Основные сведения</h2>
        <div className={stls.content}>
          <ul className={stls.listLeft}>
            {listLeft.map(item => {
              if (item.title === 'Исполнительный директор' && !isOchuVoMip) {
                return null
              } else {
                return (
                  <li key={item.title} className={stls.itemLeft}>
                    <p className={stls.itemTitle}>{item.title}</p>
                    <p className={stls.itemContent}>{item.content}</p>
                  </li>
                )
              }
            })}
          </ul>
          <ul className={stls.listRight}>
            {listRight.map(item => (
              <li key={item.title} className={stls.itemRight}>
                <p className={stls.itemTitle}>{item.title}</p>
                <p className={stls.itemContent}>{item.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default LegalInfo
