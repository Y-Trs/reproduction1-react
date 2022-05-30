import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MenuList = (props) => {
  return (
    <StyledList>
      <Link to={props.title}>{props.title}</Link> 
    </StyledList>
  )
}

export default MenuList

const StyledList = styled.li`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 10px;
    font-style: normal;
    color: white;
    list-style: none;
`