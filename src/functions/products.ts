import { server } from "../backend";
import React from "react";
import { ProductType } from "../types/types";

const getProducts = (
    setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
    server
        .get("/products")
        .then((res) => {
            setProducts(res.data);
        })
        .catch((e) => console.log(e))
        .finally(() => {
            setLoading(false);
        });
};

export { getProducts };
