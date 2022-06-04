import React from 'react'
import styled from 'styled-components'

const Fotter = () => {
  return (
    <StyledFotter>©︎crest.design all rights reserved</StyledFotter>
  )
}

export default Fotter

const StyledFotter = styled.footer`
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 14px;
    font-style: normal;
    color: white;
    text-align: center;
    line-height: 60px;
    background-color: #1B1310;
    height: 60px;
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
`