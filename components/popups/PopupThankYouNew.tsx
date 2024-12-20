import stls from '@/styles/components/popups/PopupThankyouNew.module.sass'
import { useEffect, useContext } from 'react'
import { ContextStaticProps } from '@/context/index'
import TagManager from 'react-gtm-module'
import { BtnClose } from '@/components/btns'
import { v4 as uuidv4 } from 'uuid'
import GratefullNew from '../sections/GratefullNew'

const PopupThankyouNew = ({ close }) => {
  const { program } = useContext(ContextStaticProps)

  useEffect(() => {
    const tagManagerArgs = {
      dataLayer: {
        event: 'lead',
        ecommerce: {
          add: {
            actionField: {
              id: uuidv4()
            },
            products: [
              {
                id: (program && program._id) || (program && program.id) || null,
                name: (program && program.title) || null,
                price: (program && program.price) || null,
                type: (program && program.typeLabel) || null
              }
            ]
          }
        }
      },
      dataLayerName: 'dataLayer'
    }
    TagManager.dataLayer(tagManagerArgs)
  }, [])
  return (
    <div className={stls.container}>
      <div className={stls.close}>
        <BtnClose onClick={close} iconCloseCircle />
      </div>
      <GratefullNew backButton={false} />
    </div>
  )
}

export default PopupThankyouNew
