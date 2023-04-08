import React from "react";
import "./App.css";
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
    <div className="container md:w-[100%] ">
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
  
      <div className="flex justify-center flex-wrap flex-row  ">
      {
        products.map((product) => (

          
          <div key={product.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  m-2 w-full xl:w-[30%] lg:w-[48%]">
            <div 
              className="bg-indigo-300">  
              <img className="rounded-t-lg object-cover h-48 w-96 " src={product.image} alt="" />
            </div>
              <div className="p-3">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ product.title }</h5>
                  </a>
              {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p> */}
              
                  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-800">
                      Read more
                      <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
              </div>
          </div>

        ))
      }

      </div>
    </div>
  );
}

export default App;