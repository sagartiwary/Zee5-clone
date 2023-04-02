import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import MyTvShows from "../Movie/MyTvShows"
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp"
import SingleUserPage from "../Pages/SingleUserPage";
import PageNotFound from "../Pages/PageNotFound";
import MyNews from "../Movie/MyNews";
import MyWebSeries from "../Movie/MyWebSeries";
import Buy from "./Buy"
import Payment from "./Payment"
import MyPlayer from "../Movie/MyPlayer";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* <Route path="/login" element={<Login />}></Route> */}
      {/* <Route path="/tv" element={<TvShows />}></Route>
      // <Route path="/movies" element={<Movies />}></Route> */}
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signin" element={<SignUp />}></Route>
      <Route path="/movies/:user_id" element={<SingleUserPage />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
      <Route path="/news" element={<MyNews/>}/>
      <Route path="/webseries" element={<MyWebSeries/>}/>
      <Route path="/buy" element={<Buy/>}/>
      <Route path="/payment" element={< Payment/>}/>
      <Route path="/player" element={< MyPlayer/>}/>
      <Route path="/tvshows" element={<MyTvShows/>}/>
    </Routes>
  );
}


