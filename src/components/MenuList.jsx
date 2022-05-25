import React from 'react'
import styled from 'styled-components'

const MenuList = (props) => {
  return (
    <StyledList>{props.title}</StyledList>
  )
}

export default MenuList

const StyledList = styled.li`
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
    font-style: normal;
    color: white;
    list-style: none;
`