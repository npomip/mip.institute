import Table from '@/ui/Table'
import stls from './Objects.module.sass'
import {
  purposeCabHeader,
  purposeCabRows,
  purposePracHeader,
  purposePracRows,
  purposeLibrHeader,
  purposeLibrRows,
  purposeSportHeader,
  purposeSportRows,
  hostelHeader,
  hostelRows,
  textBlocks
} from 'constants/sveden/objects'
import Link from 'next/link'
import TextBlock from '@/ui/TextBlock'

const Objects = () => {
  return (
    <>
      <Table
        title='Сведения о наличии оборудованных учебных кабинетов'
        itemPropHeader='purposeCab'
        headers={purposeCabHeader}
        rows={purposeCabRows}
      />
      <Table
        title='Сведения о наличии объектов для проведения практических занятий'
        itemPropHeader='purposePrac'
        headers={purposePracHeader}
        rows={purposePracRows}
      />
      <Table
        title='Сведения о наличии библиотеки'
        itemPropHeader='purposeLibr'
        headers={purposeLibrHeader}
        rows={purposeLibrRows}
      />
      <Table
        title='Сведения о наличии объектов спорта'
        itemPropHeader='purposeSport'
        headers={purposeSportHeader}
        rows={purposeSportRows}
      />
      <TextBlock textBlock={textBlocks.textBlock1} />
      <TextBlock textBlock={textBlocks.textBlock2} />
      <TextBlock textBlock={textBlocks.textBlock3} />
      <TextBlock textBlock={textBlocks.textBlock4} />
      <TextBlock textBlock={textBlocks.textBlock5} isLinkSide />
      <TextBlock textBlock={textBlocks.textBlock6} isLink />
      <TextBlock textBlock={textBlocks.textBlock7} />
      <TextBlock textBlock={textBlocks.textBlock8} />
      <TextBlock textBlock={textBlocks.textBlock9} />
      <TextBlock textBlock={textBlocks.textBlock10} isLinkSide />
      <Table
        title='Информация о наличии общежития, интерната, количестве жилых помещений в них для иногородних обучающихся'
        headers={hostelHeader}
        rows={hostelRows}
      />
      <TextBlock textBlock={textBlocks.textBlock11} />
      <TextBlock textBlock={textBlocks.textBlock12} />
    </>
  )
}

export default Objects
