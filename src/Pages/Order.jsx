import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Order = () => {
  const {img, name, price} = useLoaderData();
  const { user } = useContext(AuthContext);
  const {email} = user;

  const handleInput = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const userPhone = form.phone.value;

    const order = {
      productName: name,
      price,
      img,
      userName,
      email,
      userPhone
    }

    fetch(`https://clean-me-server-jubayer44.vercel.app/orders?email=${user?.email}`, {
      method: "POST",
      headers: {
          'content-type': 'application/json',
      },
      body: JSON.stringify(order)
  })
    .then(res => res.json())
    .then(data => console.log(data))

  };

  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 my-10">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div
          rel="noopener noreferrer"
          href="/"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
        >
          <div className="object-cover w-full rounded p-6 lg:col-span-6">
            <img className="w-full rounded-md" src={img} alt="" />
            <p className="text-2xl text-center my-3 font-semibold">{name}</p>
            <p className="text-xl text-center">Price: ${price}</p>
          </div>
          <div className="p-6 space-y-2 lg:col-span-6">
            <form onSubmit={handleInput}>
              <input
                type="text"
                name="name"
                placeholder="your name"
                className="input text-black input-bordered input-accent w-full max-w-xs"
              />
              <input
                type="text"
                name="phone"
                placeholder="your phone"
                className="input text-black input-bordered input-accent w-full max-w-xs mt-5"
              />
              <input
                type="text"
                name=""
                placeholder=""
                defaultValue={user?.email}
                readOnly
                className="input text-gray-500 input-bordered input-accent w-full max-w-xs mt-5"
              />

              <button
                type="submit"
                className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-violet-400 text-gray-900 max-w-xs mt-5 w-full"
                style={{ marginTop: "25px" }}
              >
                Order Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
