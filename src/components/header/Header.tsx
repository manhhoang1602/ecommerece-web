import React from 'react'
import style from './Header.module.scss'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className={style.wrappperHeader}>
      <div>
        <div className={style.signBar}>
          <div>Tải ứng dụng</div>
          <div>
            <div>Thông báo</div>
            <div>Đăng ký</div>
            <div>Đăng nhập</div>
          </div>
        </div>
      </div>
    </div>
  )
}
