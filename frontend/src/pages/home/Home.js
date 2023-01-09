import { Fragment, useState } from "react";
import InfoCard from "../../components/Info/InfoCard";
import RightHome from "../../components/home/rightHome/RightHome";

import "./Home.css";

const Home = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [coffeeInfo, setCoffeeInfo] = useState("");

  return (
    <Fragment>
      <div className="home">
        {showInfo && coffeeInfo && <InfoCard coffeeInfo={coffeeInfo} setShowInfo={setShowInfo} setCoffeeInfo />}
        <RightHome setShowInfo={setShowInfo} setCoffeeInfo={setCoffeeInfo} />
      </div>
    </Fragment>
  );
};

export default Home;
