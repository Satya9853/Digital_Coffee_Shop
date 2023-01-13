import { Fragment, useState } from "react";
import HistoryCard from "../../components/Info/HistoryCard";
import RightHome from "../../components/home/rightHome/RightHome";

import "./Home.css";

const Home = () => {
  const [showHistory, setShowHistory] = useState(false);
  const [coffeeHistory, setCoffeeHistory] = useState("");

  return (
    <Fragment>
    <div className="coffee-beans-image1"></div>
    <div className="coffee-beans-image2"></div>
      <div className="home">
      <div className="left-home">
        <div className="left-home-text">
          <span>WE BELIEVE</span>
          <br></br>
          <span>A  CUP  OF COFFEE</span>
          <br></br>
          <span>IS ONE OF THE SIMPLEST</span>
          <br></br>
          <span>PLEASURES IN LIFE</span>
        </div>
      </div>
        {showHistory && coffeeHistory && (
          <HistoryCard coffeeHistory={coffeeHistory} setCoffeeHistory={setCoffeeHistory} setShowHistory={setShowHistory} />
        )}
        <RightHome setShowHistory={setShowHistory} setCoffeeHistory={setCoffeeHistory} />
      </div>
    </Fragment>
  );
};

export default Home;
