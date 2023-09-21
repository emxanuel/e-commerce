import { Product } from "./types/types";

const defaultProduct: Product = {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    imageURL: "",
    rating: {
        rate: 0,
        count: 0,
    },
};

export { defaultProduct };
