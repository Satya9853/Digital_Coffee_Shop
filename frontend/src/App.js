import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/home/header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth"></Route>
        <Route path="/menu"></Route>
      </Routes>
    </div>
  );
}

export default App;
