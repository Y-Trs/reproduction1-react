import React from 'react'
import styled from 'styled-components'
import { Title, UnitInfoWrap } from './index'
import serviceList from '../info/service'
import device from '../breakPoints'

const Service = () => {
  return (
    <StyledService>
        <Title title='Service' />
        <UnitInfoWrap  infoList={serviceList} />
    </StyledService>
  )
}

export default Service

const StyledService = styled.section`
  padding: 50px 2%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex: 1;

  @media ${device.pc} {
    gap: 72px;
    padding: 100px 14%;
  }
`