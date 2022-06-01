import React from 'react'
import styled from 'styled-components'
import { Img } from './index'

const NewsCard = (props) => {
  return (
    <StyledNewsCard>
        <Img img={props.img}></Img>
        <StyledDesc>{props.article}</StyledDesc>
    </StyledNewsCard>
  )
}

export default NewsCard

const StyledNewsCard = styled.div`
    text-align: center;
    border: solid #141414 1px;
    box-shadow: 1px 2px 2px rgba(27, 19, 16, 0.4), -1px 0 2px rgba(27, 19, 16, 0.4);
`

const StyledDesc = styled.div`
    padding: 25px 33px;
    font-family: noto-sans-cjk-jp, sans-serif;
    font-weight: 700;
    font-size: 13px;
    font-style: normal;
    color: #141414;
    line-height: 25px;
`