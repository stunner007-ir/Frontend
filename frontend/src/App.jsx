import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddCustomer from "./components/AddCustomer";
import CustomerList from "./components/CustomerList";
import AddOrder from "./components/AddOrder";
import OrderList from "./components/OrderList";
import CreateCampaign from "./components/CreateCampaign";
import CampaignList from "./components/CampaignList";
import Login from "./components/Login";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Xeno Assignment</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/add-customer">Add Customer</Link>
            </li>
            <li>
              <Link to="/customer-list">Customer List</Link>
            </li>
            <li>
              <Link to="/add-order">Add Order</Link>
            </li>
            <li>
              <Link to="/order-list">Order List</Link>
            </li>
            <li>
              <Link to="/create-campaign">Create Campaign</Link>
            </li>
            <li>
              <Link to="/campaign-list">Campaign List</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/customer-list" element={<CustomerList />} />
          <Route path="/add-order" element={<AddOrder />} />
          <Route path="/order-list" element={<OrderList />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-list" element={<CampaignList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
