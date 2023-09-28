import { getProducts } from "../functions/products"
import { useState, useEffect } from 'react'
import type { ProductType } from "../types/types.d.ts"
import { defaultProduct } from "../defaults.ts"
import Product from "./Product"
import { Skeleton } from "@mui/material"

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
                <div className="grid grid-cols-3 gap-10">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <Skeleton
                                variant="text"
                                height={50}
                                width={250}
                                animation='wave'
                            />
                            <Skeleton
                                variant="rectangular"
                                width={250}
                                height={250}
                                animation='wave'
                            />
                            <div>
                                <Skeleton
                                    variant="text"
                                    height={20}
                                    width={125}
                                    animation='wave'
                                />
                                <Skeleton
                                    variant="text"
                                    height={20}
                                    width={125}
                                    animation='wave'
                                />
                            </div>
                        </div>
                    ))}
                </div>

            ) : (
                <div className="grid grid-cols-3 gap-5 w-10/12">
                    {products[0].id !== 0 ? products.map(p => (
                        <Product info={p} key={p.id} />
                    )) : (
                        <div>

                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Products