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
    count: number;
    title: string;
    filter: string;
    products: Product[];
    increment: (value: number) => void;
    getProducts: () => Promise<void>;
    cleanStore: () => void;
    multiply: (value: number) => void;
    getFilters: () => Promise<void>;
}

export const useCounterStore = create<ProductsState>((set, get) => ({
    title: "Wise Test Store",
    count: 10,
        products: [],
    filter:[],
    increment: (value: number) =>
        set((state) => ({ ...state, count: state.count + value })),
    getProducts: async () => {
        const products = await (
        await fetch("https://fakestoreapi.com/products")
        ).json();
        set((state) => ({ ...state, products }));
    },
    cleanStore: () => set({}, true),
    multiply: (value: number) => {
        // const count = get().count
        const { count } = get();
        set({ count: count * value });
    },
    getFilters: async () => {
        const filters = await (
        await fetch("https://fakestoreapi.com/products/categories")
        ).json();
        set((state) => ({ ...state, filter:filters }));
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