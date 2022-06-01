import React from 'react'
import styled from 'styled-components'

const TextArea = (props) => {
  return (
    <StyledImputWrap>
        <label>{props.label}</label>
        <StyledTextArea></StyledTextArea>
    </StyledImputWrap>
  )
}

export default TextArea

const StyledImputWrap = styled.div`
    width: 100%;
`

const StyledTextArea = styled.textarea`
    width: 100%;
    height: 171px;
    margin-top: 5px;
    box-sizing: border-box;
`