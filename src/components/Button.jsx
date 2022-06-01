import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  return (
    <StyledButton>送信</StyledButton>
  )
}

export default Button

const StyledButton = styled.button`
    font-family: noto-sans-cjk-jp, sans-serif;
    font-weight: 700;
    font-size: 20px;
    font-style: normal;
    color: white;
    text-align: center;
    line-height: 59px;
    background-color: #1B1310;
    width: 235px;
    height: 59px;
    border-radius: 51px;
`