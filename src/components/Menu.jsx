import React from 'react'
import styled from 'styled-components'
import { MenuList } from './index'

const Menu = () => {
  return (
    <nav>
        <StyledLists>
            <MenuList title={'About'} />
            <MenuList title={'Service'} />
            <MenuList title={'News'} />
            <MenuList title={'Contact'} />
        </StyledLists>
    </nav>
  )
}

export default Menu

const StyledLists = styled.ul`
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100px;
    height: 21px;
`