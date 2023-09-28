import { server } from "../backend";
import React from "react";
import { ProductType } from "../types/types";

const getProducts = async (
    setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
    await server
        .get("/products")
        .then((res) => {
            setProducts(res.data);
        })
        .catch((e) => console.log(e))
        .finally(() => {
            setLoading(false);
        });
};

const getCategoriesSingleProduct = async (
    setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>
) => {
    try {
        const categories = await server
            .get("/products/categories")
            .then((res) => res.data);
        const products: ProductType[] = [];

        for (const category of categories) {
            const product = await server
                .get(`/products/category/${category}?limit=1`)
                .then((res) => res.data[0]);
            products.push(product);
        }

        setProducts(products);
    } catch (error) {
        console.log(error)
    }
};

export { getProducts, getCategoriesSingleProduct };
