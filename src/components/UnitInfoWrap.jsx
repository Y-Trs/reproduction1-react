import React from 'react'
import styled from 'styled-components'
import { UnitInfo } from './index'

const UnitInfoWrap = (props) => {
  return (
        <StyledUnitInfroWrap>
            {props.infoList.map(info => <UnitInfo summary={info[0]} detail={info[1]} img={info[2]} />)}
        </ StyledUnitInfroWrap>
  )
}

export default UnitInfoWrap

const StyledUnitInfroWrap = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 50px;
    padding: 0 2%;
`