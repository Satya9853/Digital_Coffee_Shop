import { Fragment, useState } from "react";
import HistoryCard from "../../components/Info/HistoryCard";
import RightHome from "../../components/home/rightHome/RightHome";

import "./Home.css";

const Home = () => {
  const [showHistory, setShowHistory] = useState(false);
  const [coffeeHistory, setCoffeeHistory] = useState("");

  return (
    <Fragment>
      <div className="home">
        {showHistory && coffeeHistory && (
          <HistoryCard coffeeHistory={coffeeHistory} setCoffeeHistory={setCoffeeHistory} setShowHistory={setShowHistory} />
        )}
        <RightHome setShowHistory={setShowHistory} setCoffeeHistory={setCoffeeHistory} />
      </div>
    </Fragment>
  );
};

export default Home;
