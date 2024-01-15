import { useContext } from "react"
import ProductsContext from "../context/ProductsProvider"
import { UseProductsContentType } from "../context/ProductsProvider"

const useProducts = (): UseProductsContentType => {
    return useContext(ProductsContext)
}

export default useProducts