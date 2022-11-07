import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Feature = () => {
  // const {count, results} = useContext(LoaderContext);
  const [results, setResults] = useState([]);
  const [count, setCount] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);


useEffect(()=> {
  fetch(`https://clean-me-server-jubayer44.vercel.app/feature?page=${page}&size=${size}`)
  .then(res => res.json())
  .then(data => {
    setResults(data.results)
    setCount(data.count)
  })
}, [page, size])

  const pages = Math.ceil(count / size);



  return (
    <section className="py-20 dark:bg-gray-800 dark:text-gray-100">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold lg:text-5xl">
            Relax, you are in good hands
          </h2>
          <p className="font-bold my-4 tracking-wider uppercase dark:text-violet-400">
            Special Feature
          </p>
        </div>
        <div className="flex flex-wrap items-stretch -mx-4">
          {results?.map((singleData) => (
            <div
              key={singleData._id}
              className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0"
              data-aos="zoom-in-up"
              data-aos-duration="1500"
            >
              <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-900 hover:dark:bg-gray-700 relative h-[545px]">
                <img className="h-[247px]" src={singleData.img} alt="" />
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">{singleData.name}</h4>
                </div>

                <Link to={`/feature/${singleData._id}`}>
                  <button
                    type="button"
                    className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-violet-600 dark:text-gray-900 absolute bottom-7 w-[85%] h-12"
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-group flex justify-center">
          {
            [...Array(pages).keys()].map(number => 
              
              <button key={number} className={`btn ${page === number && 'btn-active'}`}
              onClick={()=> setPage(number)}
              >{number + 1}</button>
              )
          }
          
          <div>
            <select 
            onChange={(e)=> setSize(e.target.value)}
            name="" id="" className="btn ml-10">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
