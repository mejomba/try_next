import axios from "axios"

export type Products = Product[]

export interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
}

export interface Rating {
    rate: number
    count: number
}

export default async function Home() {
    const {data} = await axios.get('http://fakestoreapi.com/products');
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1>Title</h1>
          {
              data.map((product: Product) => (
                  <div key={product.id} className="flex flex-col gap-8 items-center">
                      <h3>{product.title}</h3>
                      <p>{product.description}</p>
                  </div>
              ))
          }
      </main>
  );
}
