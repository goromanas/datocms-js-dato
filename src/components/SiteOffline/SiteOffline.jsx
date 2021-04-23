import React from 'react'
import Logo from '../Logo/Logo'
import { OfflineContainer, OfflineMessage, Separator } from './SiteOffline.style'

const SiteOffline = () => {
  const offlineMessage = 'Puslapis laikinai nepasiekiamas. Pabandykite vėliau'
  return (
    <OfflineContainer>
      <Logo />
      <Separator />
      <OfflineMessage>{offlineMessage}</OfflineMessage>
    </OfflineContainer>
  )
}

export default SiteOffline
