import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const MenuList = (props) => {
  return (
    <StyledList>
      <NavLink 
        to={props.title} 
        style={({ isActive }) => isActive ? activeStyle : undefined }
      >
        {props.title}
      </NavLink> 
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
    
    a:link {
      color: white;
      text-decoration: none;
    }
    a:hover {
      color: hotpink;
    }
`

const activeStyle = {
  color: 'red',
}