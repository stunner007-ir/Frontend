import React, { useState, useEffect } from "react";
import axios from "axios";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/orders");
        setOrders(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-4xl">Order List</h1>
        <div>
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-gray-300 bg-gray-100">
                  Serial No.
                </th>
                <th className="px-4 py-2 border border-gray-300 bg-gray-100">
                  Customer Id
                </th>
                <th className="px-4 py-2 border border-gray-300 bg-gray-100">
                  Amount
                </th>
                <th className="px-4 py-2 border border-gray-300 bg-gray-100">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-300">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {order._id}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {order.amount}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {order.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OrderList;
