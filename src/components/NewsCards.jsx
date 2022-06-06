import React from 'react'
import styled from 'styled-components'
import { NewsCard } from './index'
import newslists from '../info/newsIndex'
import device from '../breakPoints'

const NewsCards = () => {
  return (
    <StyledNewsCards>
        {Object.keys(newslists).map(news => 
            <NewsCard key={news.toString()} img={newslists[news].img} article={newslists[news].article} />
        )}
    </StyledNewsCards>
  )
}

export default NewsCards

const StyledNewsCards = styled.div`
    padding: 0 2%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 50px;

    @media ${device.pc} {
      flex-direction: row;
      gap: 34px;
    }
`