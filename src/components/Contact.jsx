import React from 'react'
import styled from 'styled-components'
import { Title, Form } from './index'

const Contact = () => {
  return (
    <StyledContact>
        <Title title={'お問い合わせ'} />
        <Form />
    </StyledContact>
  )
}

export default Contact

const StyledContact = styled.section`
  padding: 50px 2%;
  display: flex;
  gap: 70px;
  flex-direction: column;
`