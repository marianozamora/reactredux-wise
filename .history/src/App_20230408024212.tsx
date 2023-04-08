import React from "react";
import "./App.css";
import { useEffect } from "react";
import shallow from "zustand/shallow";
import { useCounterStore } from "./store/counterStore";


function App() {
  const { title, products, filter } = useCounterStore(
    (state) => ({
      title: state.title,
      products: state.products,
      filter: state.options
    }),
    shallow
  );
  const {
    getProducts,
    getFilters,
    getFiltersByCategory
  } = useCounterStore();

  useEffect(() => {
    getProducts();
    getFilters();
  }, []);
  return (
    <div className="md:container md:mx-auto ">
      <h1>
        {title}
      </h1>
      <form>
        <div className="sm:col-span-3 align-middle text-center ">
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
            <div className="mt-2">
            <select
              onChange={(e) => {
                if (e.target.value) {
                  getFiltersByCategory(e.target.value);
                } else {
                  getProducts();
                }
              }
              }
              id="country" name="country"
              autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 p-[10px] m-auto mb-8 mt-5">
              <option value="">Seleccionar</option>
              {
                filter.map((item,i) => (
                  <option key={i} value={item}>{item}</option>
                ))
              }

              </select>
            </div>
          </div>
      </form>

      <div className="flex justify-center flex-wrap flex-row  ">
      {
        products.map((product) => (

          <div key={product.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  m-2 w-full xl:w-[30%] lg:w-[48%]">
            <div 
              className="bg-indigo-300 rounded-t-lg ">  
              <img className="rounded-t-lg object-cover h-48 w-96 " src={product.image} alt="" />
            </div>
              <div className="p-3">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ product.title }</h5>
                  </a>
              {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p> */}
              
                  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-green-300 dark:bg-green-400 dark:hover:bg-green-500 ">
                      Read more
                  </a>
              </div>
          </div>

        ))
      }

      </div>

      <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
        <div className="flex">
          <div>
            <p className="font-bold">Todo perfecto</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;