import React from 'react'
import Row from '../component/Row'
import PauseOnHover from '../component/Banner'
let allData={
    trend:` http://localhost:8080/trending`,
    top_10:`http://localhost:8080/top-10`,
    top_bhojpuri:`http://localhost:8080/top-bhojpuri`,
    top_webseries:`http://localhost:8080/top-10-web-series`,
    popular_movies:`http://localhost:8080/popular-movies`
}

const Home = () => {
  return (
    <div>
   <PauseOnHover/>
   
        <Row name="Trending Near You" fetched={allData.trend}/>
        <Row name="Top 10 Movies In India" fetched={allData.top_10}/>
        <Row name="Top Bhojpuri Movies" fetched={allData.top_bhojpuri}/>
        <Row name="Top 10 Web Series in India" fetched={allData.top_webseries}/>
        <Row name="Popular Movies" fetched={allData.popular_movies}/>
    </div>
  )
}

export default Home;
