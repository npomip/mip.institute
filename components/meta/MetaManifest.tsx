import { themeColor } from '@/config/index'

const MetaManifest = () => {
  return (
    <>
      <meta name='application-name' content='Московский Институт Психологии' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta
        name='apple-mobile-web-app-title'
        content='Московский Институт Психологии'
      />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='msapplication-TileColor' content={themeColor} />
      <meta name='msapplication-tap-highlight' content='no' />
      <meta name='theme-color' content={themeColor} />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/assets/imgs/icons/apple-icon-180.png'></link>
      <link rel='manifest' href='/manifest.json' />
      <link rel='icon' href='/favicon.ico' />
      <link rel='shortcut icon' href='/favicon.ico' />
    </>
  )
}

export default MetaManifest
