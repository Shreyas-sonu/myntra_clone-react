import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "../Pages/Home";
import CartPage from "../Pages/CartPage";
import AddressPage from "../Pages/AddressPage";
import PaymentPage from "../Pages/PaymentPage";
import OrderConfirmPage from "../Pages/OrderConfirmPage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import MensPage from "../Pages/MensPage";
import Details from "../Component/Details/Details";
import WomensPage from "../Pages/WomensPage";
import WomenDetails from '../Component/Details/WomenDetails';
const AllRoutes = () => {
  return (
    <Routes>
      <Route extact path="/" element={<Home />} />
      <Route extact path="/men" element={<MensPage />} />
      <Route extact path="/women" element={<WomensPage />} />
      <Route extact path="/singlemen/:id" element={<Details />} />
      <Route extact path="/singlewomen/:id" element={<WomenDetails />} />
      <Route extact path="/cart" element={<CartPage />} />
      <Route extact path="/address" element={<AddressPage />} />
      <Route extact path="/payment" element={<PaymentPage />} />
      <Route extact path="/ordersuccess" element={<OrderConfirmPage />} />
      <Route extact path="/login" element={<LoginPage />} />
      <Route extact path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default AllRoutes;
