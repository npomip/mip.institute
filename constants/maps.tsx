import Image from 'next/image'
import komsomolskaya from '@/public/assets/imgs/lectorium/maps/komsomolskaya.png'
import krasnyeVorota from '@/public/assets/imgs/lectorium/maps/krasnyeVorota.png'
import suharevskaya from '@/public/assets/imgs/lectorium/maps/suharevskaya.png'

const stationImages = {
  krasnyeVorota: (
    <Image
      src={krasnyeVorota}
      alt='Метро Красные Ворота'
      style={{ width: '100%', height: 'auto' }}
    />
  ),
  suharevskaya: (
    <Image
      src={suharevskaya}
      alt='Метро Сухаревская'
      style={{ width: '100%', height: 'auto' }}
    />
  ),
  komsomolskaya: (
    <Image
      src={komsomolskaya}
      alt='Метро Комсомольская'
      style={{ width: '100%', height: 'auto' }}
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
