import React from 'react'
import styled from 'styled-components'

const Input = (props) => {
  return (
    <StyledInputWrap>
        <StyledLabel for={props.name}>{props.label}</StyledLabel>
        <StyledInput type={props.type} name={props.name} />
    </StyledInputWrap>
  )
}

export default Input

const StyledInputWrap = styled.div`
    width: 100%;
`

const StyledLabel = styled.label`
    font-family: noto-sans-cjk-jp, sans-serif;
    font-weight: 500;
    font-size: 16px;
    font-style: normal;
    color: #141414;
`

const StyledInput = styled.input`
    width: 100%;
    height: 30px;
    margin-top: 5px;
    box-sizing: border-box;
`