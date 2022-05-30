import React from 'react'
import styled from 'styled-components'

const detail = (props) => {
  return (
    <StyledDetail>{props.detail}</StyledDetail>
  )
}

export default detail

const StyledDetail = styled.p`
    font-family: noto-sans-cjk-jp, sans-serif;
    font-weight: 500;
    font-size: 14px;
    font-style: normal;
    line-height: 30px;
`