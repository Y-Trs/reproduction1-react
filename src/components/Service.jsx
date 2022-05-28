import React from 'react'
import { Title, UnitInfoWrap } from './index'
import img1 from '../img/service-image@2x.jpg'
import img2 from '../img/service-image02@2x.jpg'

const Service = () => {
    let summary1 = 'リリース時のサポートで\nサービスのブランディングを';
    let detail1 = `
        弊社では、リリース時もサポートさせて頂きます。 
        プレスリリース用のサイトや動画制作を通して、サービスのブランディングを行わせて頂きます。
    `
    let summary2 = 'リリース後のサポートで\n効果を最大化させる';
    let detail2 = `
        弊社では、リリース後もサポートさせて頂きます。 
        サービスはリリース後に様々な課題にぶつかります。 
        そこでクライアント様と一緒に改善を行うことで、デザインの効果を最大化させます。
    `
    let infoList = [[summary1, detail1, img1], [summary2, detail2, img2]]
  return (
    <section>
        <Title title='Service' />
        <UnitInfoWrap  infoList={infoList} />
    </section>
  )
}

export default Service