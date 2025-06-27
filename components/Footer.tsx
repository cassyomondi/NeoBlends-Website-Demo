import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#EADDC9] text-gray-800 py-10">
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Logo */}
        <Image
          src="/images/solara_logo.png" // Make sure this points to your logo in public/images/
          alt="Solara Logo"
          width={200}
          height={120}
          className="object-contain"
        />

        {/* Get in Touch */}
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">Get in touch</h3>
          <p>Email: <a href="mailto:sales@neoblends.co.ke" className="text-green-700 hover:underline">sales@neoblends.co.ke</a></p>
          <p>Phone: <a href="tel:+254111111111" className="text-green-700 hover:underline">+254 111 111 111</a></p>
          <p>Address: Rasi Gardens, Hurlingham</p>
        </div>

        {/* Socials */}
        {/* Socials */}
<div className="mt-4">
  <a
    href="https://www.instagram.com/solara.ke"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block text-green-700 hover:text-green-900 transition"
    aria-label="Instagram"
  >
    {/* Clean Instagram icon (solid style) */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      <path d="M7.75 2C5.127 2 3 4.127 3 6.75v10.5C3 19.873 5.127 22 7.75 22h8.5c2.623 0 4.75-2.127 4.75-4.75V6.75C21 4.127 18.873 2 16.25 2h-8.5Zm0 1.5h8.5c1.793 0 3.25 1.457 3.25 3.25v10.5c0 1.793-1.457 3.25-3.25 3.25h-8.5A3.252 3.252 0 0 1 4.5 17.25V6.75c0-1.793 1.457-3.25 3.25-3.25Zm8.875 2.625a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75ZM12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Zm0 1.5a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5Z" />
    </svg>
  </a>
</div>


        <p className="text-sm text-gray-500 mt-6">&copy; {new Date().getFullYear()} Solara KE</p>
      </div>
    </footer>
  )
}
