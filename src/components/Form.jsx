import React from 'react'
import styled from 'styled-components'
import { Input, TextArea, Button } from './index'
import device from '../breakPoints'

const Form = () => {
  return (
    <StyledForm>
        <Input label={'担当者名'} type={'text'} name={'name' }/>
        <Input label={'電話番号'} type={'text'} name={'tell' } />
        <Input label={'メールアドレス'} type={'email'} name={'email' } />
        <TextArea label={'お問い合わせ内容'} name={'message' } />
        <Button />
    </StyledForm>
  )
}

export default Form

const StyledForm = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 25px;

    @media ${device.pc} {
    width: 50%;
    margin: 0 auto;
  }
`