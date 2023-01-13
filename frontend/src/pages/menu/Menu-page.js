import React, { Fragment, useState } from "react";
import Menu from "../../components/menu/Menu-item";
import Option from "../../components/menu/Option";
import { coffee_info } from "../../data/coffee_info";

import "./Menu-page.css";
import Chart from "../../components/menu/chart/Chart";

const MenuPage = () => {
  const [showChart, setShowChart] = useState(false);
  return (
    <Fragment>
      <div className="menu">
        <Option setShowChart={setShowChart} />
        <div className="item_wrapper">
          {coffee_info.map((item) => (
            <Menu item={item} key={item.id} />
          ))}
        </div>
      </div>
      {showChart && <Chart setShowChart={setShowChart} />}
    </Fragment>
  );
};

export default MenuPage;
