import React from "react";
import { Route, Routes } from "react-router-dom";
import CartHome from "../components/CartHome";
import CartItems from "../components/CartItems";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CartHome />} />
        <Route path="/CartItems" element={<CartItems />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
