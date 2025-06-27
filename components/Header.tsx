import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-[#EADDC9] shadow-md">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/images/solara_logo.png"
          alt="Solara Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </Link>

      {/* Nav Icons */}
      <nav className="flex items-center space-x-6 text-green-900">
        <Link href="/catalog" className="font-semibold hover:text-green-700">
          Shop
        </Link>
        <Link href="/catalog" className="font-semibold hover:text-green-700">
          FAQs
        </Link>
        <Link href="/catalog" className="font-semibold hover:text-green-700">
          About Us
        </Link>
        <Link href="/cart" aria-label="Cart" className="hover:text-green-700">
          <ShoppingCart className="w-6 h-6" />
        </Link>
      </nav>
    </header>
  )
}
