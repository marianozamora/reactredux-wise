import create from "zustand";

export interface Product {
  id: number;
  title: string;
  body: string;
}

interface CounterState {
  count: number;
  title: string;
  products: Product[];
  increment: (value: number) => void;
  getProducts: () => Promise<void>;
  cleanStore: () => void;
  multiply: (value: number) => void;
}

export const useCounterStore = create<CounterState>((set, get) => ({
  title: "Wise Test Store",
  count: 10,
  products: [],
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
}));