import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Open_Sans } from '@next/font/google'

const OpenSans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['vietnamese'],
  style: ['normal', 'italic'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={OpenSans.className}>
      <Component {...pageProps} />
    </div>
  )
}
