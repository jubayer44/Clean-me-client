import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const MyOrders = () => {
  const {user, logOut} = useContext(AuthContext);
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    fetch(`https://clean-me-server-jubayer44.vercel.app/myOrders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('clean-me')}`
      }
    })
      .then((res) => {
        if(res.status === 403 || res.status === 401){
          return logOut()
        }
        return res.json();
      })
      .then((data) => {
        setOrders(data)
      });
  }, [user.email, logOut]);



  const handleDelete = (id) => {
    fetch(`https://clean-me-server-jubayer44.vercel.app/myOrders/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then((data) => {
      if(data.deletedCount){
        const remaining = orders.filter(ordr => ordr._id !== id)
        setOrders(remaining)
      }
    });
  };





  return (
    <div className="overflow-x-auto text-black my-10">
      <h1 className="text-white text-3xl font-bold text-center mb-4">
        My Order Summary
      </h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>User</th>
            <th>Phone</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        {
          orders?.map(order => {
            return <tbody key={order._id}>
            <tr>
              <td>{order?.productName}</td>
              <td>{order?.userName}</td>
              <td>{order?.userPhone}</td>
              <td className="text-center">
                <Link to={`/myOrders/${order._id}`}><button className="btn btn-xs bg-blue-500">Edit</button></Link>
                <button onClick={()=> handleDelete(order._id)} className="btn btn-xs bg-red-500 ml-3 border-none">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          })
        }
      </table>
    </div>
  );
};

export default MyOrders;
