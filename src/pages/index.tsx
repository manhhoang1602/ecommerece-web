import Banner from '@/components/banner/Banner'
import Header from '@/components/header/Header'
import Product from '@/components/product/Product'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ecommerce web</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        {/* <Product /> */}
        <Banner Style={{ marginTop: 119, paddingTop: 30 }} />
      </main>
    </>
  )
}
