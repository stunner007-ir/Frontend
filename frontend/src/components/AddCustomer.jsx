import React, { useState } from "react";
import axios from "axios";

const AddCustomer = () => {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    totalSpends: "",
    visits: "",
    lastVisit: "",
  });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/customers", customer);
      alert("Customer added successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to add customer");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Customer</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="totalSpends"
        placeholder="Total Spends"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="visits"
        placeholder="Visits"
        onChange={handleChange}
        required
      />
      <input type="date" name="lastVisit" onChange={handleChange} required />
      <button type="submit">Add Customer</button>
    </form>
  );
};

export default AddCustomer;
