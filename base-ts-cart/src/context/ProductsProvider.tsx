import { createContext, ReactElement, useState } from 'react'

export type ProductType = {
  sku: string,
  name: string,
  price: number,
}

//const initState: ProductType[] = []

// below better for deployment
const initState: ProductType[] = [
        {
            "sku": "item0001",
            "name": "Widget",
            "price": 9.99
        },
        {
            "sku": "item0002",
            "name": "Premium Widget",
            "price": 19.99
        },
        {
            "sku": "item0003",
            "name": "Deluxe Widget",
            "price": 29.99
        }
    
]

export type UseProductsContentType = { products: ProductType[] }  

const initContextState: UseProductsContentType = { products: initState }

const ProductsContext = createContext<UseProductsContentType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState)

  // useEffect(() => {
  //   const fetchProducts = async (): Promise<ProductType[]> => {
  //     const data = await fetch('http://localhost:3500/products')
  //     .then(res => {
  //      return res.json()
  //     }).catch(err => {
  //       if (err instanceof Error) console.log(err)
  //     })
  //     return data
  //   }
  //   fetchProducts().then(data => {
  //     setProducts(data)
  //   })
  // }, [])

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )

}

export default ProductsContext