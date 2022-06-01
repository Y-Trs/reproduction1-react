import React from 'react'
import styled from 'styled-components'
import { NewsCard } from './index'
import newslists from '../newsIndex'

const NewsCards = () => {
  return (
    <StyledNewsCards>
        {Object.keys(newslists).map(news => 
            <NewsCard img={newslists[news].img} article={newslists[news].article} />
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
`