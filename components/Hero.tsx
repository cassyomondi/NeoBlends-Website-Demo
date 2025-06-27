'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: '/images/solara_product_showcase.jpg',
    title: 'Gentle on skin. Powerful on protection.',
    subtitle: 'Featuring: Moisturizing Hand Wash',
  },
  {
    image: '/images/solara_product_showcase_2.jpg',
    title: 'Naturally rejuvenate. Feel the glow.',
    subtitle: 'Featuring: Rejuvenating Body Wash with Vitamin E',
  },
  {
    image: '/images/solara_product_showcase_3.jpg',
    title: 'Sustainably crafted. Luxuriously moisturizing.',
    subtitle: 'Featuring: Solara Signature Collection',
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length)

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  const current = slides[index]

  return (
    <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden">
      {/* Image Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={current.image}
            alt="Solara showcase"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Animated Text Overlay */}
      <motion.div
        key={current.title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg mb-2">{current.title}</h1>
        <p className="text-lg md:text-xl font-light">{current.subtitle}</p>
        <a
          href="/catalog"
          className="inline-block mt-6 px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition"
        >
          Shop Now
        </a>
      </motion.div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
