













import React from "react";
import Row from "../component/Row";
import CaptionCarousel from "../component/Banner";
import MyFooter from '../component/MyFooter'
import Navbar from "../component/Navbar";
let allData = {
  trend: ` http://localhost:8080/trending`,
  top_10: `http://localhost:8080/top_10`,
  top_bhojpuri: `http://localhost:8080/top_bhojpuri`,
  top_webseries: `http://localhost:8080/web_series`,
  popular_movies: `http://localhost:8080/popular_movies`,
  movie_marathon: `http://localhost:8080/movie_marathon`,
  freeWeb: `http://localhost:8080/top_10FreeWeb`,
  south: `http://localhost:8080/south`,
  hollywood: `http://localhost:8080/hollywood`,
  evergreen: `http://localhost:8080/evergreen`,
};

const TvShows = () => {
  return (
    <div>
      {/* <PauseOnHover /> */}
      <Navbar/>
      <CaptionCarousel/>
      <Row name="Trending Near You" fetched={allData.trend} />
      <Row name="Top 10 Movies In India" fetched={allData.top_10} />
      <Row name="Top Bhojpuri Movies" fetched={allData.top_bhojpuri} />
      <Row name="Top 10 Web Series in India" fetched={allData.top_webseries} />
      <Row name="Popular Movies" fetched={allData.popular_movies} />
      <Row name="Movie marathon" fetched={allData.movie_marathon} />
      <Row name="Top Web Series | 1st Ep Free" fetched={allData.freeWeb} />
      <Row name="South Dubbed Dhamaka" fetched={allData.south} />
      <Row name="World Hits | Free Dubbed Movies" fetched={allData.hollywood} />
      <Row name="Evergreen Hindi TV Shows Free" fetched={allData.evergreen} />
      <MyFooter/>
    </div>
  );
};

export default TvShows;



