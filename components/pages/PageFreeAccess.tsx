import React from 'react'
import HeaderFreeAcces from '@/components/sections/FreeAccess/HeaderFreeAccess/HeaderFreeAccess'
import { ContentFreeAccess } from '../sections/FreeAccess/ContentFreeAccess/ContentFreeAccess'
import Wrapper from '@/ui/Wrapper'
import stls from '@/styles/pages/PageFreeAccess.module.sass'

export const PageFreeAcces = () => {
  return (
    <div className={stls.container}>
      <Wrapper>
        <HeaderFreeAcces />
        <ContentFreeAccess />
      </Wrapper>
    </div>
  )
}
