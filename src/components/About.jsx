import React from 'react'
import styled from 'styled-components';
import { Title, UnitInfoWrap } from './index'
import aboutList from '../about'

const About = () => {
  return (
    <StyledAbout>
        <Title title='About' />
        <UnitInfoWrap infoList={aboutList} />
    </StyledAbout>
  )
}

export default About

const StyledAbout = styled.section`
  padding: 50px 2%;
`