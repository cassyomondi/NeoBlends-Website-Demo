import Image from 'next/image'

const products = [
  {
    id: 1,
    name: "Moisturizing Hand Wash",
    image: "/images/solara_nourishing_handwash.png",
    price: 850,
    isNew: true
  },
  {
    id: 2,
    name: "Rejuvenating Body Wash",
    image: "/images/solara_rejuvenating_bodywash.png",
    price: 850,
    isNew: true
  },
  {
    id: 3,
    name: "Hydrating Lotion",
    image: "/images/solara_ultra_hydrating_lotion_500ml.png",
    price: 700,
    isNew: true
  },
  {
    id: 4,
    name: "Sulfate-Free Shampoo",
    image: "/images/solara_sulfate_free_shampoo.png",
    price: 850,
    isNew: true
  },
  {
    id: 5,
    name: "Nourishing Body Cream",
    image: "/images/solara_nourishing_bodycream.png",
    price: 800,
    isNew: true
  },
  {
    id: 6,
    name: "Moisture Boost Conditioner",
    image: "/images/solara_moisture_boost_conditioner.png",
    price: 900,
    isNew: true
  }
]

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {products.map(product => (
        <div
          key={product.id}
          className="h-full flex flex-col bg-white rounded-xl shadow p-4 text-center hover:shadow-lg transition"
        >
          {/* Product Image with optional "NEW" label */}
          <div className="relative h-48 overflow-hidden flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={150}
              height={150}
              className="object-contain max-h-full"
            />
            {product.isNew && (
              <span className="absolute top-2 left-2 bg-green-700 text-white text-xs font-semibold px-2 py-1 shadow-sm flex items-center gap-1">
                NEW
              </span>
            )}
          </div>

          {/* Product Name + Price */}
          <div className="mt-3">
            <h3 className="text-base font-semibold min-h-[3rem] leading-snug line-clamp-2">
              {product.name}
            </h3>
            <p className="text-green-800 font-bold mt-1 leading-tight">KES {product.price}</p>
          </div>

          {/* Add to Cart Button */}
          <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded-full">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}
