import React from 'react'
import styled from 'styled-components';
import { Title, UnitInfoWrap } from './index'
import aboutList from '../info/about'
import device from '../breakPoints';

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
  display: flex;
  flex-direction: column;
  gap: 32px;


  @media ${device.pc} {
    padding: 100px 14%;
  }
`