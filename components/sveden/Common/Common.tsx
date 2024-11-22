import Table from '@/ui/Table/Table'
import stls from './Common.module.sass'
import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  // children: ReactNode
}

const Common = ({  }: Props) => {
  const headers: string[] = [
    "Наименование филиала",
    "Адрес места нахождения",
    "Режим и график работы",
    "Контактные телефоны",
    "Электронная почта",
    "Адрес официального сайта или страницы филиала в сети «Интернет»",
  ];
  const rows = [
    {
      itemProp: "filInfo", // itemProp для строки
      cells: [
        {
          content: (
            <u>
              <a
                href="https://mgsu.ru/universityabout/Struktura/Instituti/MF/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Мытищинский филиал федерального государственного бюджетного
                учреждения высшего образования «Национальный исследовательский
                Московский государственный строительный университет»
              </a>
            </u>
          ),
          itemProp: "nameFil",
        },
        {
          content: "141006, Центральный федеральный округ, Московская область, г. Мытищи, Олимпийский проспект, д. 50",
          itemProp: "addressFil",
        },
        {
          content: `Пн.-Чт. — 09.00 — 18.00\nПт. — 09.00 — 16.45\nСб.-Вс. — выходные дни`,
          itemProp: "workTimeFil",
        },
        { content: "+7 495", itemProp: "telephoneFil" },
        {
          content: (
            <u>
              <a href="mailto:MF@mgsu.ru">MF@mgsu.ru</a>
            </u>
          ),
          itemProp: "emailFil",
        },
        {
          content: (
            <u>
              <a
                href="https://mgsu.ru/universityabout/Struktura/Instituti/MF/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://mgsu.ru/universityabout/Struktura/Instituti/MF/
              </a>
            </u>
          ),
          itemProp: "websiteFil",
        },
      ],
    },
    {
      itemProp: "filInfo",
      cells: [
        {
          content: (
            <u>
              <a
                href="https://mgsu.ru/education/SPO/Sam_kolledg_stroit_i_predpr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Самарский колледж строительства и предпринимательства — филиал
                федерального государственного бюджетного образовательного
                учреждения высшего образования «Национальный исследовательский
                Московский государственный строительный университет»
              </a>
            </u>
          ),
          itemProp: "nameFil",
        },
        {
          content: "443010, Приволжский федеральный округ, Самарская область, г. Самара, ул. Фрунзе, 116",
          itemProp: "addressFil",
        },
        {
          content: `Пн.- Пт. — 09.00 — 17.30\nСб.-Вс. — выходные дни`,
          itemProp: "workTimeFil",
        },
        { content: "+7 (846)-333-23-92", itemProp: "telephoneFil" },
        {
          content: (
            <u>
              <a href="mailto:samara@mgsu.ru">samara@mgsu.ru</a>
            </u>
          ),
          itemProp: "emailFil",
        },
        {
          content: (
            <a
              href="https://mgsu.ru/education/SPO/Sam_kolledg_stroit_i_predpr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://mgsu.ru/education/SPO/Sam_kolledg_stroit_i_predpr/
            </a>
          ),
          itemProp: "websiteFil",
        },
      ],
    },
  ];
  
  return (
  <>
  <Table headers={headers} rows={rows} />
  </>
  )
}

export default Common
