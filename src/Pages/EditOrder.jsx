import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditOrder = () => {
  const [products, setProducts] = useState();
  const id = useParams();

  useEffect(() => {
    fetch(`https://clean-me-server-jubayer44.vercel.app/myOrders/${id?.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [id?.id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;

    fetch(`https://clean-me-server-jubayer44.vercel.app/myOrders/${id?.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({name, phone}),
    })
      .then((res) => res.json())
      .then((data) => {
           
          if(data.modifiedCount){
            alert('update success');
        }

      });
  };

  if (!products) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full mx-auto my-3 animate-spin dark:border-violet-400"></div>
    );
  }
  const { img, productName, userName, userPhone, email } = products;

  return (
    <form
      onSubmit={handleUpdate}
      className="max-w-md border shadow-md mx-auto text-black"
    >
      <img className="w-full" src={img} alt="" />
      <p className="my-5 text-xl font-bold text-center text-white">
        {productName}
      </p>
      <input
        name="name"
        type="text"
        placeholder="name"
        defaultValue={userName}
        className="input input-bordered input-accent w-full mb-4"
      />
      <input
        name="phone"
        defaultValue={userPhone}
        type="text"
        placeholder="Phone"
        className="input input-bordered input-accent w-full mb-4"
      />
      <input
        name="email"
        defaultValue={email}
        type="text"
        readOnly
        className="input input-bordered input-accent w-full mb-4 text-gray-500"
      />

      <button className="btn btn-success w-full mb-2">Update</button>
    </form>
  );
};

export default EditOrder;
