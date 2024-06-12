import React, { useState } from "react";
import axios from "axios";

const AddOrder = () => {
  const [order, setOrder] = useState({ customerId: "", amount: "", date: "" });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/orders", order);
      alert("Order added successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to add order");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Order</h2>
      <input
        type="text"
        name="customerId"
        placeholder="Customer ID"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        onChange={handleChange}
        required
      />
      <input type="date" name="date" onChange={handleChange} required />
      <button type="submit">Add Order</button>
    </form>
  );
};

export default AddOrder;
