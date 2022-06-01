import React from 'react'
import styled from 'styled-components'

const Imput = (props) => {
  return (
    <StyledImputWrap>
        <StyledLabel for={props.name}>{props.label}</StyledLabel>
        <StyledImput type={props.type} name={props.name} />
    </StyledImputWrap>
  )
}

export default Imput

const StyledImputWrap = styled.div`
    width: 100%;
`

const StyledLabel = styled.label`
    font-family: noto-sans-cjk-jp, sans-serif;
    font-weight: 500;
    font-size: 16px;
    font-style: normal;
    color: #141414;
`

const StyledImput = styled.input`
    width: 100%;
    height: 30px;
    margin-top: 5px;
    box-sizing: border-box;
`