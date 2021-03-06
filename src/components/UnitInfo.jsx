import React from 'react'
import styled from 'styled-components'
import { UnitDescWrap, Img } from './index'
import device from '../breakPoints'

const UnitInfo = (props) => {
  return (
    <StyledUnitInfo>
         <UnitDescWrap summary={props.summary} detail={props.detail} />
         {props.img && <Img img={props.img} />}
    </StyledUnitInfo>
  )
}

export default UnitInfo

const StyledUnitInfo = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    gap: 40px;

    @media ${device.pc} {
      flex-direction: row-reverse;
      gap: 7%;
    }
`