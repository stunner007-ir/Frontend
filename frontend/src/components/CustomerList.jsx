import React, { useEffect, useState } from "react";
import axios from "axios";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/customers");
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-4xl">Customer List</h1>
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
                  Name
                </th>
                <th className="px-4 py-2 border border-gray-300 bg-gray-100">
                  Email
                </th>
                <th className="px-4 py-2 border border-gray-300 bg-gray-100">
                  Spends
                </th>
                <th className="px-4 py-2 border border-gray-300 bg-gray-100">
                  Visit Count
                </th>
                <th className="px-4 py-2 border border-gray-300 bg-gray-100">
                  Last Visit
                </th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={customer._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-300">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {customer._id}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {customer.name}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {customer.email}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {customer.totalSpends}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {customer.visits}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {customer.lastVisit}
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

export default CustomerList;
