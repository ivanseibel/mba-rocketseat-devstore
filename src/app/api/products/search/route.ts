import type { NextRequest } from 'next/server'
import data from '../data.json'
import { z } from 'zod'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = z.string().parse(searchParams.get('q'))

  if (!query) {
    return Response.json({ message: 'Query is required' }, { status: 400 })
  }

  const products = data.products.filter((product) =>
    product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
  )

  if (products.length === 0) {
    return Response.json({ message: 'No products found' }, { status: 404 })
  }

  return Response.json(products)
}
