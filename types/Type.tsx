export type Product = {
    id: number;
    category: string;
    name: string;
    description: string;
    image: string;
    size: string;
    features: string[];
    colors?: string[];
    stock: string;
}

export type Category = {
    id: number;
    name: string;
    value: string;
    products: Product[];
}