import React from 'react'
import styled from 'styled-components'

const Logo = () => {
  return (
    <StyledLogo>クリ★スタ</StyledLogo>
  )
}

export default Logo

const StyledLogo = styled.h1`
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 26px;
    font-style: normal;
    color: white;
    line-height: 75px;
`