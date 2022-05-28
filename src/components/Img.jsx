import React from 'react'
import styled from 'styled-components'

const Img = (props) => {
  return (
    <StyledImg src={props.img}></StyledImg>
  )
}

export default Img

const StyledImg = styled.img`
    width: 100%;
`
