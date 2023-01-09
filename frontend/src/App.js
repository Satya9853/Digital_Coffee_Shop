import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/home/header/Header";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/menu"></Route>
      </Routes>
    </div>
  );
}

export default App;
