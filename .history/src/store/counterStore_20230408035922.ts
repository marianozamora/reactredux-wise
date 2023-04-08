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
    errors: {
        status: number;
        message: string;
    };
}

export const useCounterStore = create<ProductsState>((set, get) => ({
    title: "Wise Test Store",
    count: 10,
    products: [],
    options: [],
    errors: {
        status: 0,
        message: "",
    },
    getProducts: async () => {
        const products = await (
        await fetch("https://fakestoreapi.com/products")
        ).json();
        set((state) => ({ ...state, products }));
    },
    cleanStore: () => set({}, true),
    getFilters: async () => {
        const filters = await (
        await fetch("https://fakestoreapi.com/products/categoriessdsfs")
        );
        const data = await filters.json();
        const errorMessage = if (filters.status === 200) ? "Todo ok": "Oops algo salio mal") ;

        
set((state) => ({
    ...state, options: data, errors: {
        status: filters.status,
        message: errorMessage
        } }));
    },
    getFiltersByCategory: async (categorie) => {
        const data = await (
        await fetch(`https://fakestoreapi.com/products/category/${categorie}`)
        ).json();
        set((state) => ({ ...state, products:data }));
    }
}));

// const useBearStore = create<BearState>()(
//     devtools(
//       persist(
//         (set) => ({
//           bears: 0,
//           increase: (by) => set((state) => ({ bears: state.bears + by })),
//         }),
//         {
//           name: 'bear-storage',
//         }
//       )
//     )
//   )