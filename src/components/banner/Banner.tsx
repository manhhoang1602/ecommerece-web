import React from 'react'
import { Carousel } from 'antd'

import style from './Banner.module.scss'

type Props = {
  Style?: React.CSSProperties
}

export default function Banner({ Style }: Props) {
  return (
    <div style={Style} className={[style.banner, 'container'].join(' ')}>
      <div className={style.carousel}>
        <Carousel>
          <div className={style.carouselItem}>
            <div
              className={style.carouselItem}
              style={{
                backgroundImage: `url('https://cf.shopee.vn/file/vn-50009109-da1d6767f11590ea56d1395ec47586a1_xxhdpi')`,
              }}
            ></div>
          </div>
        </Carousel>
      </div>
      <div className={style.subBanner}>
        <div
          className={style.subTop}
          style={{
            backgroundImage: `url('https://cf.shopee.vn/file/vn-50009109-bd7d3b6f551ea1abe07b69ef541a1936_xhdpi')`,
          }}
        ></div>
        <div
          className={style.subBottom}
          style={{
            backgroundImage: `url('https://cf.shopee.vn/file/vn-50009109-05bc37965ede3e775a0e7d05f6cde138_xhdpi')`,
          }}
        ></div>
      </div>
    </div>
  )
}
