import stls from '@/styles/components/sections/LegalDocs.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { routesFront } from '@/config/index'
import { IconDoc } from '@/components/icons'

const LegalDocs = () => {
  const listLeft = [
    {
      href: `${routesFront.docs}/svidetelstvo-o-gosudarstvennoj-registracii-nano-mip.pdf`,
      val: 'Свидетельство о государственной регистрации НАНО МИП'
    },
    {
      href: `${routesFront.docs}/svidetelstvo-o-postanovke-na-uchet-nano-mip.pdf`,
      val: 'Свидетельство о постановке на учет НАНО МИП'
    },
    {
      href: `${routesFront.docs}/ustav-obrazovatelnoj-organizacii-nano-mip.pdf`,
      val: 'Устав образовательной организации НАНО МИП'
    },
    {
      href: `${routesFront.docs}/postanovlieniie-pravitiel-stva-rf-ot-08-08-2013-678-ob-utvierzhdienii-nomienklatury-dolzhnostiei-piedaghoghichieskikh-rabotnikov-orghanizatsii-osushchiestvliaiushchikh-obrazovatiel-nuiu-dieiatiel-nost-d.pdf`,
      val: 'Постановление Правительства РФ от 08.08.2013 № 678 "Об утверждении номенклатуры должностей педагогических работников организаций, осуществляющих образовательную деятельность, должностей руководителей образовательных организаций"'
    },
    {
      href: `${routesFront.docs}/postanovlieniie-pravitiel-stva-rossiiskoi-fiedieratsii-ot-15-avghusta-2013-gh-706-pravila-okazaniia-platnykh-obrazovatiel-nykh-uslugh.pdf`,
      val: 'Постановление Правительства Российской Федерации от 15 августа 2013 г. № 706 «Правила оказания платных образовательных услуг»'
    },
    {
      href: `${routesFront.docs}/prikaz-ot-gh-1244-o-vniesienii-izmienienii-v-poriadok-orghanizatsii-i-osushchiestvlieniia-obrazovatiel-noi-dieiatiel-nosti-po-dopolnitiel-nym-profiessional-nym-proghrammam-utvierzhdiennyi-prikazom-minis.pdf`,
      val: 'Приказ от г. № 1244 «О внесении изменений в порядок организации и осуществления образовательной деятельности по дополнительным профессиональным программам, утвержденный приказом министерства образования и науки российской федерации от 1 июля 2013 г. N 499»'
    },
    {
      href: `${routesFront.docs}/pis-mo-minobrnauki-rossii-ot-7-maia-2014-gh-ak-126106-ob-osobiennostiakh-zakonodatiel-nogho-i-normativnogho-pravovogho-obiespiechieniia-v-sfierie-dpo.pdf`,
      val: 'Письмо Минобрнауки России от 7 мая 2014 г. № ак-1261/06 «Об особенностях законодательного и нормативного правового обеспечения в сфере ДПО»'
    }
  ]
  const listRight = [
    {
      href: `${routesFront.docs}/fiedieral-nyi-zakon-ob-obrazovanii-v-rossiiskoi-fiedieratsii-ot-29-12-2012-273-fz.pdf`,
      val: 'Федеральный закон об образовании в Российской Федерации от 29.12.2012 № 273-ФЗ'
    },
    {
      href: `${routesFront.docs}/prikaz-9-ot-14-01-2013-gh-o-komissii-ministierstva-obrazovaniia-i-nauki-rf-po-razvitiiu-dopolnitiel-nogho-profiessional-nogho-obrazovaniia.pdf`,
      val: 'Приказ № 9 от 14.01.2013 г. «О комиссии Министерства образования и науки РФ по развитию дополнительного профессионального образования»'
    },
    {
      href: `${routesFront.docs}/poriadok-orghanizatsii-i-osushchiestvlieniia-obrazovatiel-noi-dieiatiel-nosti-po-dopolnitiel-nym-profiessional-nym-proghrammam-utv-prikazom-ministierstva-obrazovaniia-i-nauki-rf-ot-1-iiulia-2013-gh-499.pdf`,
      val: 'Порядок организации и осуществления образовательной деятельности по дополнительным профессиональным программам (утв. приказом Министерства образования и науки РФ от 1 июля 2013 г. № 499)'
    },
    {
      href: `${routesFront.docs}/postanovlieniie-pravitiel-stva-rf-582-ot-10-07-2013-gh-ob-utvierzhdienii-pravil-razmieshchieniia-na-ofitsial-nom-saitie-obrazovatiel-noi-orghanizatsii-v-informatsionno-tieliekommunikatsionnoi-sieti-inti.pdf`,
      val: 'Постановление Правительства РФ №582 от 10.07.2013 г. Об утверждении Правил размещения на официальном сайте образовательной организации в информационно-телекоммуникационной сети "Интернет" и обновления информации об образовательной организации'
    },
    {
      href: `${routesFront.docs}/prikaz-ministierstva-obrazovaniia-i-nauki-rf-ot-9-ianvaria-2014-gh-n-2-ob-utvierzhdienii-poriadka-primienieniia-orghanizatsiiami-osushchiestvliaiushchimi-obrazovatiel-nuiu-dieiatiel-nost-eliektronnogho.pdf`,
      val: 'Приказ Министерства образования и науки РФ от 9 января 2014 г. N 2 Об утверждении Порядка применения организациями, осуществляющими образовательную деятельность, электронного обучения, дистанционных образовательных технологий при реализации образовательных программ'
    },
    {
      href: `${routesFront.docs}/raziasnieniia-o-zakonodatiel-nom-i-normativnom-pravovom-obiespiechienii-dopolnitiel-nogho-profiessional-nogho-obrazovaniia-diepartamient-ghosudarstviennoi-politiki-v-sfierie-rabochikh-kadrov-i-dpo.pdf`,
      val: 'Разъяснения о законодательном и нормативном правовом обеспечении дополнительного профессионального образования (Департамент государственной политики в сфере рабочих кадров и ДПО)'
    }
  ]

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Нормативные документы</h2>
        <div className={stls.content}>
          <ul className={stls.listLeft}>
            {listLeft.map((item, idx) => (
              <li key={item.val + idx} className={stls.itemLeft}>
                <a
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={stls.link}>
                  <div className={stls.icon}>
                    <IconDoc />
                  </div>
                  <span className={stls.text}>{item.val}</span>
                </a>
              </li>
            ))}
          </ul>
          <ul className={stls.listRight}>
            {listRight.map((item, idx) => (
              <li key={item.val + idx} className={stls.itemRight}>
                <a
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={stls.link}>
                  <div className={stls.icon}>
                    <IconDoc />
                  </div>
                  <span className={stls.text}>{item.val}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default LegalDocs
