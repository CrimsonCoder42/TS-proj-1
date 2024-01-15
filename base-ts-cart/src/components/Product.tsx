import React, { ReactElement } from 'react'
import { ProductType } from '../context/ProductsProvider'
import {ReducerActionType, ReducerAction} from '../context/CartProvider'

type ProductProps = {
  product: ProductType
  dispatch: React.Dispatch<ReducerAction>
  REDUCER_ACTIONS: ReducerActionType
  inCart: boolean
}



const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: ProductProps):ReactElement => {

  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href

  const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: {...product, qty: 1}})

  const itemInCart = inCart ? ' → Item in Cart: ✔️' : null

  const content = <article className="product">
                    <h3 className="product__name">{product.name}</h3>
                    <img src={img} alt="" className="product__img" />
                    <p>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(product.price)}{itemInCart}</p>
                    <button onClick={onAddToCart}>Add to Cart</button>
                  </article>
                   

  return content
}

export default Product