import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Payment from "../pages/Payment";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/payment" element={<Payment />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AllRoutes;
