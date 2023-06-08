import logo from "./logo.svg";
import "./App.css";
import Pages from "./components/pages/Pages";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Pages />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
