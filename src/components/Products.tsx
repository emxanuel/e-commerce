import { getProducts } from "../functions/products"
import { useState, useEffect } from 'react'
import type { ProductType } from "../types/types.d.ts"
import { defaultProduct } from "../defaults.ts"
import Product from "./Product"

const Products = () => {
    const [products, setProducts] = useState<ProductType[]>([
        defaultProduct
    ])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts(setProducts, setLoading)
    }, [])
    return (
        <div className="flex flex-col items-center">
            {loading ? (
                <h2>Loading</h2>
            ) : (
                <div className="grid grid-cols-3 gap-5 w-10/12">
                    {products.map(p => (
                        <Product info={p} key={p.id} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Products