import React from 'react'
import styled from 'styled-components'
import device from '../breakPoints'

const Summary = (props) => {
  return (
    <StyledSummary>{props.summary}</StyledSummary>
  )
}

export default Summary

const StyledSummary = styled.h3`
    font-family: noto-sans-cjk-jp, sans-serif;
    font-weight: 700;
    font-size: 20px;
    font-style: normal;
    line-height: 40px;
    white-space: pre-wrap;

    @media ${device.pc} {
      font-size: 24px;
    }
`