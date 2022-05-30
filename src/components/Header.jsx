import React from 'react'
import styled from 'styled-components'
import { Logo, Menu } from './index'

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu lists={['About', 'Service', 'News', 'Contact']}/>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  height: 75px;
  background-color: #1B1310;
  padding: 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`