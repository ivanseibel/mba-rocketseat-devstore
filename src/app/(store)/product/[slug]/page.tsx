import Image from 'next/image'

export default function ProductDetailsPage() {
  return (
    <div className="relative grid max-h-[800px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src="/t-shirt-dowhile-2022.png"
          width={860}
          height={860}
          quality={100}
          alt=""
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">
          DoWhile 2022 T-Shirt
        </h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          Sweatshirt made with 88% cotton and 12% polyester.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            $120
          </span>
          <span className="text-sm text-zinc-400">
            12x $10 without interest with Mastercard
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Sizes</span>

          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              S
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              M
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              L
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              XL
            </button>
          </div>
        </div>

        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}
