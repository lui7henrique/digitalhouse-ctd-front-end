import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Header } from "./components/Header";

import { Home } from "pages/Home";
import { Favorites } from "pages/Favorites";
import { Detail } from "pages/Detail";

import { Provider } from "react-redux";
import { store } from "config/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="favoritos" element={<Favorites />} />
          <Route path="detalhe" element={<Detail />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
