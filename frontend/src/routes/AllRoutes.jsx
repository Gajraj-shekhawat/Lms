import React from "react";
import { Routes, Route } from "react-router-dom";
import DeshBoard from "../pages/DeshBoard";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Payment from "../pages/Payment";
import SignUp from "../pages/SignUp";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/payment" element={<Payment />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<Login />} />
      {/* <Route path="/signup" element={<SignUp />} /> */}
      <Route path="/signup/:course" element={<SignUp />} />
      <Route path="/dashboard/" element={<DeshBoard />} />
    </Routes>
  );
};

export default AllRoutes;
