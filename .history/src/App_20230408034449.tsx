import React from "react";
import "./App.css";
import { useEffect } from "react";
import shallow from "zustand/shallow";
import { useCounterStore } from "./store/counterStore";
import { StarIcon } from "./icons";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import nProgress from "nprogress";


const generateStars = (rating: any) => {
  const parseNumber = parseInt(rating);
  const array = new Array(parseNumber)
  return (
    <>
      {
        array.fill(0).map((_, i) => <StarIcon key={i} className="w-5 h-5 text-yellow-400" />)
      }
      {
        new Array(5 - parseNumber).fill(0).map((_, i) => <StarIcon key={i} className="w-5 h-5 text-gray-400" />)
      }
    </>
  ) 
}

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
    NProgress.start();
    getProducts();
    getFilters();
    NProgress.done();


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
                nProgress.start();
                if (e.target.value) {
                  getFiltersByCategory(e.target.value);
                } else {
                  getProducts();
                }
                npProgress.done();
              }
              }
              id="country" name="country"
              autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 p-[10px] m-auto mb-8 mt-5 dark:text-white">
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
                    <h5 className="flex items-center align-middle justify-center mb-2 h-[80px] text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ product.title }</h5>
              </a>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{ product.category }</span>
              </div>
              <div className="flex items-center mt-2.5 mb-5">
              {generateStars(product.rating.rate)}
                
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{ product.rating.rate }</span>
        </div>
        <div className="flex items-center justify-between">
          
                <span className="text-3xl font-bold text-gray-900 dark:text-white">${ product.price}</span>
            <a href="#" className="text-white bg-green-400 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-400 dark:focus:ring-green-800">Buy this item</a>
        </div>
              {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p> */}

              </div>
          </div>

        ))
      }

      </div>

      <div className="bg-teal-100  border-teal-500 border-t-4 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
        <div className="flex">
          <div>
            <p className="font-bold">Page Load in time.</p>
          </div>
        </div>
      </div>
      <div className="bg-red-100  border-red-500 border-t-4 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
        <div className="flex">
          <div>
            <p className="font-bold">Oops Something </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;