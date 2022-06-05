import React from 'react'
import styled from 'styled-components'

const Title = (props) => {
  return (
    <StyledTitle>{props.title}</StyledTitle>
  )
}

export default Title

const StyledTitle = styled.h1`
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 36px;
    font-style: normal;
    margin: 0 auto;
    text-align: center;
`