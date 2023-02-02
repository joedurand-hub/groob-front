import React from 'react'
import Card from '../../../components/Card/LargeCard'
import Button from '../../../components/Button/Button'
import { useCard } from '../../../hooks/useCard'
import Layout from '../../../components/Layout/Layout'
import EditWallets from '../../../components/Wallets/EditWallets'

const Index = () => {
  const [isOpenCard, closeCard] = useCard(true);
  return (
   <Layout>
     <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <Card isOpen={isOpenCard}
        closeCard={closeCard}
        button={
          <Button name="Cerrar" variant="primary" onClick={closeCard} />
        }
      >

      </Card>
    </div>
   </Layout>
  )
}

export default Index