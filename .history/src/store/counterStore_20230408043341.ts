import {create} from "zustand";

export interface Product {
    id: number;
    title: string;
    body: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export interface Filter {
    category: string;
}

interface ProductsState {
    title: string;
    options: [];
    products: Product[];
    getProducts: () => Promise<void>;
    cleanStore: () => void;
    getFilters: () => Promise<void>;
    getFiltersByCategory: (categorie: any) => Promise<void>;
    status: number;
}

export const useProductStore = create<ProductsState>((set, get) => ({
    title: "Wise Test Store",
    count: 10,
    products: [],
    options: [],
    status: 0,
    getProducts: async () => {
        const products = await fetch("https://fakestoreapi.com/products");
        const data = await products.json();
        set((state) => ({ ...state, products: data, status: products.status }));
    },
    cleanStore: () => set({}, true),
    getFilters: async () => {
        const filters =
            await fetch("https://fakestoreapi.com/products/categories")
        ;
        const data = await filters.json();
    set((state) => ({
        ...state, options: data, status: products.status }));
    },
    getFiltersByCategory: async (categorie) => {
        const data = await (
        await fetch(`https://fakestoreapi.com/products/category/${categorie}`)
        ).json();
        set((state) => ({ ...state, products:data, status:products.status }));
    }
}));
