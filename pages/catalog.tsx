import Head from 'next/head'
import Header from '../components/Header'
import ProductGrid from '../components/ProductGrid'

export default function Catalog() {
  return (
    <>
      <Head>
        <title>Catalog | Solara</title>
      </Head>
      <Header />
      <main className="p-10 bg-[#FAF8F0] min-h-screen">
        <h1 className="text-3xl font-semibold text-center mb-6">Product Catalog</h1>
        <ProductGrid />
      </main>
    </>
  )
}
