import React from "react";
import "./App.css";
import requests from "./requests";
import Row from "./components/Row/Row";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="Trending"
        fetchUrl={requests.fetchingTrending}
        isLargeRow={true}
      />
      <Row title="Top Rate" fetchUrl={requests.fetchingTopRate} />
      <Row title="UpComing" fetchUrl={requests.fetchingUpcoming} />
      <Row title="Popular" fetchUrl={requests.fetchingPopular} />
      <Row title="NowPlaying" fetchUrl={requests.fetchingNowPlaying} />
    </div>
  );
}

export default App;