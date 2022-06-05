import React from 'react'
import styled from 'styled-components'
import bgImageForMobile from '../img/top/fv-bgi_sp@2x.jpg'
import bgImageForPc from '../img/top/fv-bgi@2x.jpg'
import device from '../breakPoints'


const Top = () => {
  return (
    <StyledTopContainer bgImageForMobile={bgImageForMobile} bgImageForPc={bgImageForPc}>
        <StyledSquare>
            <StyledTitle>Create Design.</StyledTitle>
        </StyledSquare>
    </StyledTopContainer>
  )
}

export default Top

const StyledTopContainer = styled.section`
    background-image: url(${props => props.bgImageForMobile});
    background-size: cover;
    height: 590px;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.pc} {
        background-image: url(${props => props.bgImageForPc});
        height: 740px;
    }
`

const StyledSquare = styled.section`
    width: 300px;
    height: 100px;
    border: solid white 2px;

    @media ${device.pc} {
        width: 449px;
        height: 136px;
    }
`

const StyledTitle = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 30px;
    font-style: normal;
    color: white;
    height: 40px;
    width: 219px;
    text-align: center;
    line-height: 104px;
    margin: 0 auto;

    @media ${device.pc} {
        font-size: 50px;
        width: 365px;
        height: 67px;
        line-height: 136px;
    }
`