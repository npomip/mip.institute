import React from 'react'
import HeaderFreeAcces from '@/components/sections/FreeAccess/HeaderFreeAccess/HeaderFreeAccess'
import { ContentFreeAccess } from '../sections/FreeAccess/ContentFreeAccess/ContentFreeAccess'
import Wrapper from '@/ui/Wrapper'

export const PageFreeAcces = () => {
  return (
    <Wrapper>
      <HeaderFreeAcces />
      <ContentFreeAccess />
    </Wrapper>
  )
}
