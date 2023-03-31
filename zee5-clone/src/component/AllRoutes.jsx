import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Movies from "../Pages/Movies"
import TvShows from "../Pages/TvShows"
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp"
// import Login from './Login'

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* <Route path="/login" element={<Login />}></Route> */}
      <Route path="/tv" element={<TvShows />}></Route>
      <Route path="/movies" element={<Movies />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signin" element={<SignUp />}></Route>
    </Routes>
  );
}

