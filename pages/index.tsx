import Head from 'next/head'
import Header from '../components/Header'
import ProductGrid from '../components/ProductGrid'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Solara | Natural Body Care</title>
        <meta name="description" content="Solara – Embrace Nature, Feel the Luxury." />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Header />

      <main className="bg-[#FAF8F0] text-gray-800">
        <Hero />
        <section className="p-10">
          <h2 className="text-2xl font-semibold text-center">Most Popular</h2>
          <ProductGrid />
        </section>
      </main>

      <Footer /> {/* ✅ Place the Footer here */}

    </>
  )
}
