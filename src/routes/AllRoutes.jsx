import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeCard } from "../Pages/HomeCard";
import CartItems from "../components/CartItems";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeCard />} />
        <Route path="/CartItems" element={<CartItems />} />
        <Route path="/HomeCard" element={<HomeCard />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
