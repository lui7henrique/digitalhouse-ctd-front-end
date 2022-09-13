import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Header } from "./components/Header";

import { Home } from "pages/Home";
import { Favorites } from "pages/Favorites";
import { Detail } from "pages/Detail";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favoritos" element={<Favorites />} />
        <Route path="detalhe" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
