import React from 'react'
import { Title, NewsCards } from './index'
import styled from 'styled-components'

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
`