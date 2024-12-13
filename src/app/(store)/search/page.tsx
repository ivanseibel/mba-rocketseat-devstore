import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/data/types/product'
import { api } from '@/data/api'
import { redirect } from 'next/navigation'

interface SearchPageProps {
  searchParams: {
    q: string
  }
}

async function searchProducts(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {
    cache: 'no-cache',
    // next: {
    // revalidate: 60 * 60,
    // },
  })

  const products = await response.json()

  return products
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q: query } = searchParams

  if (!query) {
    return redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Results for: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {!products || products.length === 0 ? (
          <p className="col-span-3 flex items-center justify-center h-[480px] text-lg text-zinc-500">
            No products found
          </p>
        ) : (
          products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="relative group rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-baseline"
            >
              <Image
                className="group-hover:scale-105 transition-transform duration-500"
                src={product.image}
                width={480}
                height={480}
                quality={70}
                alt={product.title}
              />

              <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
                <span className="text-sm truncate">{product.title}</span>
                <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                  {product.price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0,
                  })}
                </span>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}
