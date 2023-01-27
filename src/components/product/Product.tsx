import Image from 'next/image'
import React from 'react'
import style from './Product.module.scss'

type Props = {}

export default function Product({}: Props) {
  return (
    <div className={style.wrapperProduct}>
      <div className={style.productImage}>
        <Image
          src={'https://cf.shopee.vn/file/761a1a5cded4a34ef02e08fa409d746d'}
          alt={'product_img'}
          width={188}
          height={190}
          className={style.image}
        />

        <div className={style.discount}>
          <div className={style.discountPercent}>50%</div>
          <div className={style.label}>giảm</div>
        </div>

        <div className={style.tag}>Yêu thích</div>
      </div>

      <div className={style.productContent}>
        <div className={style.productName}>
          Túi xách nữ đẹp túi đeo chéo kẹp nách đeo vai Hàn Quốc đi học đi chơi
          đi tiệc cao cấp họa tiết hoa Nami Bags TX45
        </div>
        <div className={style.wrapperProductTag}></div>
        <div className={style.wrapperProductPrice}>
          <div>
            <span className={style.priceCurrency}>₫</span>
            <span>209.000</span>
          </div>
          <div className={style.totalSold}>Đã bán 87</div>
        </div>
      </div>
    </div>
  )
}
