import React from 'react'
import styled from 'styled-components'
import { MenuList } from './index'
import device from '../breakPoints'

const Menu = (props) => {
  return (
    <nav>
        <StyledLists>
            {props.lists.map(list => <MenuList key={list} title={list} />)}
        </StyledLists>
    </nav>
  )
}

export default Menu

const StyledLists = styled.ul`
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 150px;
    height: 21px;
    line-height: 21px;

    @media ${device.pc} {
      gap: 55px;
      width: 367px;
    }
`