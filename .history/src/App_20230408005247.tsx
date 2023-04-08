import { useEffect } from "react";
import shallow from "zustand/shallow";
import { useCounterStore } from "./store/counterStore";

function App() {
  const { count, title, products } = useCounterStore(
    (state) => ({
      count: state.count,
      title: state.title,
      products: state.products,
    }),
    shallow
  );
  const { increment, getProducts, cleanStore, multiply } = useCounterStore();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>
        {title}: {count}
      </h1>

      <div>
        <button
          onClick={() => {
            increment(10);
          }}
        >
          Increment by 10
        </button>

        <button onClick={() => multiply(2)}>multiply by 2</button>

        <button onClick={() => cleanStore()}>clean store</button>
      </div>

      {
        products.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;