import React from 'react'
import styled from 'styled-components'
import { Title, UnitInfoWrap } from './index'
import serviceList from '../service'

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
`