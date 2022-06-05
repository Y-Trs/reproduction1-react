import React from 'react'
import styled from 'styled-components'
import bgImageForMobile from '../img/top/fv-bgi_sp@2x.jpg'

const Top = () => {
  return (
    <StyledTopContainer bgImage={bgImageForMobile}>
        <StyledSquare>
            <StyledTitle>Create Design.</StyledTitle>
        </StyledSquare>
    </StyledTopContainer>
  )
}

export default Top

const StyledTopContainer = styled.section`
    background-image: url(${props => props.bgImage});
    background-size: cover;
    height: 590px;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledSquare = styled.section`
    width: 300px;
    height: 100px;
    border: solid white 2px;
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
`