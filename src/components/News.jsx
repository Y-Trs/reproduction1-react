import React from 'react'
import { Title, NewsCards } from './index'
import styled from 'styled-components'
import device from '../breakPoints'

const News = () => {
  return (
      <StyledNews>
          <Title title='News' />
          <NewsCards />
      </StyledNews>
  )
}

export default News

const StyledNews = styled.section`
  padding: 50px 2%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${device.pc} {
    gap: 72px;
  }
`