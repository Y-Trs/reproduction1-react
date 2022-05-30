import React from 'react'
import styled from 'styled-components'
import { Summary, Detail } from './index'

const UnitDescWrap = (props) => {
  return (
    <StyledUnitDescWrap>
        <Summary summary={props.summary}/>
        <Detail detail={props.detail} />
    </StyledUnitDescWrap>
  )
}

export default UnitDescWrap

const StyledUnitDescWrap = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    gap: 29px;
`