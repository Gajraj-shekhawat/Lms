import React from "react";
import { Routes, Route } from "react-router-dom";
import Payment from "../pages/Payment";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
};

export default AllRoutes;
