import stls from '@/styles/components/sections/CorporateClients.module.sass'
import clientsList from 'constants/corporateClients'

const CorporateClients = () => {
  return (
    <div className={stls.container}>
      <h2 className={stls.title}>Мы сотрудничаем с крупными организациями</h2>
      <div className={stls.clients}>
        {clientsList.map((client, idx) => (
          <div key={client.name + idx} className={stls.client}>
            {client.pic}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CorporateClients
