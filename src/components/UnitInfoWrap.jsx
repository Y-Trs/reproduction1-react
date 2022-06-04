import React from 'react'
import styled from 'styled-components'
import { UnitInfo } from './index'

const UnitInfoWrap = (props) => {
  return (
        <StyledUnitInfroWrap>
            {Object.keys(props.infoList).map(info => {
              let key = info.toString();
              let summary = props.infoList[info].summary;
              let detail = props.infoList[info].detail;
              let img = props.infoList[info].img;

              return (
                <UnitInfo 
                  key={key}
                  summary={summary} 
                  detail={detail} 
                  img={img ? img : undefined} 
                />
              )
            })}
        </ StyledUnitInfroWrap>
  )
}

export default UnitInfoWrap

const StyledUnitInfroWrap = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 50px;
`