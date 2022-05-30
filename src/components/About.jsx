import React from 'react'
import styled from 'styled-components';
import { Title, UnitInfoWrap } from './index'

const About = () => {
    let summary = 'ミニマルで\n洗練されたデザインを';
    let detail = `
        近年、ミニマルなデザインが流行しています。 
        そこで弊社では、
        クライアント企業様新規サービス等の課題に対してミニマルで洗練されたデザインを実現させることで解決のサポートを致します。 
        もちろん全てのサービスにおいてミニマルなデザインが課題解決になるわけではないので、 
        課題や今後のサービスの展開等しっかりとヒアリングを行なった上でご提案させて頂きます。
    `
    let infoList = [[summary, detail]]
  return (
    <StyledAbout>
        <Title title='About' />
        <UnitInfoWrap infoList={infoList} />
    </StyledAbout>
  )
}

export default About

const StyledAbout = styled.section`
  padding: 50px 2%;
`