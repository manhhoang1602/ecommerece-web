import React from 'react'
import style from './Header.module.scss'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className={style.wrappperHeader}>
      <div className={'container'}>
        <div className={style.signBar}>
          <div className={style.signBarLeft}>Tải ứng dụng</div>
          <div className={style.signBarRight}>
            <div>Thông báo</div>
            <div>Đăng ký</div>
            <div>Đăng nhập</div>
          </div>
        </div>
      </div>
    </div>
  )
}
