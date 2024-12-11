import { CldImage } from 'next-cloudinary'

const stationImages = {
  krasnyeVorota: (
    <CldImage
      src='krasnye_Vorota_8600a2fe67'
      alt='Метро Красные Ворота'
      style={{ width: '100%', height: 'auto' }}
      width='550'
      height='550'
      crop='fit'
    />
  ),
  suharevskaya: (
    <CldImage
      src='suharevskaya_aaf304cad9'
      alt='Метро Сухаревская'
      style={{ width: '100%', height: 'auto' }}
      width='550'
      height='550'
      crop='fit'
    />
  ),
  komsomolskaya: (
    <CldImage
      src='komsomolskaya_4fd17fce88'
      alt='Метро Комсомольская'
      style={{ width: '100%', height: 'auto' }}
      width='550'
      height='1135'
      crop='fit'
    />
  )
}

const stationData = [
  {
    title: 'Красные Ворота',
    image: stationImages.krasnyeVorota
  },
  {
    title: 'Комсомольская',
    image: stationImages.komsomolskaya
  },
  {
    title: 'Сухаревская',
    image: stationImages.suharevskaya
  }
]

export { stationImages, stationData }
